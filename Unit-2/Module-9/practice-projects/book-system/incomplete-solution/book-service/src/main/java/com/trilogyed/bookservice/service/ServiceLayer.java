package com.trilogyed.bookservice.service;

import com.trilogyed.bookservice.dao.BookDao;
import com.trilogyed.bookservice.models.Book;
import com.trilogyed.bookservice.models.Note;
import com.trilogyed.bookservice.util.feign.NoteService;
import com.trilogyed.bookservice.util.message.NoteAction;
import com.trilogyed.bookservice.viewmodels.BookViewModel;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ServiceLayer {
    public static final String EXCHANGE = "queue-book-note-exchange";
    public static final String ROUTING_KEY_PREFIX = "book.note.";
    public static final String ROUTING_KEY_ADD = ROUTING_KEY_PREFIX + "add";
    public static final String ROUTING_KEY_DELETE = ROUTING_KEY_PREFIX + "delete";

    private BookDao dao;
    private NoteService noteService;
    private RabbitTemplate rabbitTemplate;

    @Autowired
    public ServiceLayer(BookDao dao, NoteService noteService, RabbitTemplate rabbitTemplate) {
        this.dao = dao;
        this.noteService = noteService;
        this.rabbitTemplate = rabbitTemplate;
    }

    public Book createBook(BookViewModel bookViewModel) {
        Book book = new Book();
        book.setAuthor(bookViewModel.getAuthor());
        book.setTitle(bookViewModel.getTitle());
        book = dao.addBook(book);

        addNotes(bookViewModel.getNotes(), book.getBookId());

        return book;
    }

    private void addNotes(List<Note> notes, final int bookId) {
        notes.stream().forEach(
                note -> {
                    note.setBookId(bookId);
                    NoteAction noteAction = new NoteAction();
                    noteAction.setAction("ADD");
                    noteAction.setNote(note);
                    System.out.println("Sending message...");
                    rabbitTemplate.convertAndSend(EXCHANGE, ROUTING_KEY_ADD, noteAction);
                    System.out.println("Message Sent");
                }
        );
    }

    public void deleteNotes(List<Note> notes) {
        notes.stream().forEach(
                note -> {
                    NoteAction noteAction = new NoteAction();
                    noteAction.setAction("DELETE");
                    noteAction.setNote(note);
                    System.out.println("Sending delete note message...");
                    rabbitTemplate.convertAndSend(EXCHANGE, ROUTING_KEY_DELETE, noteAction);
                    System.out.println("Message Sent");
                }
        );
    }

    public BookViewModel retrieveBook(int id) {
        Book book = dao.getBook(id);
        return buildBookViewModel(book);
    }

    private BookViewModel buildBookViewModel(Book book) {
        BookViewModel returnVal = new BookViewModel();
        returnVal.setBookId(book.getBookId());
        returnVal.setAuthor(book.getAuthor());
        returnVal.setTitle(book.getTitle());
        returnVal.setNotes(noteService.getNotesByBookId(book.getBookId()));

        return returnVal;
    }

    public List<BookViewModel> getAllBooks() {
        List<Book> books = dao.getAllBooks();
        List<BookViewModel> returnVal = new ArrayList<>();
        for(Book book: books) {
            returnVal.add(buildBookViewModel(book));
        }

        return returnVal;
    }


    public void updateBook(BookViewModel bookViewModel) {
        Book book = new Book();
        book.setBookId(bookViewModel.getBookId());
        book.setAuthor(bookViewModel.getAuthor());
        book.setTitle(bookViewModel.getTitle());

        dao.updateBook(book);

        // First, delete all the existing notes
        clearNotesByBookId(book.getBookId());

        // Then, add all the notes
        addNotes(bookViewModel.getNotes(), book.getBookId());
    }

    private void clearNotesByBookId(int bookId) {
        List<Note> notesToDelete = noteService.getNotesByBookId(bookId);
        deleteNotes(notesToDelete);
    }

    public void deleteBook(int id) {
        dao.deleteBook(id);

        clearNotesByBookId(id);
    }

}
