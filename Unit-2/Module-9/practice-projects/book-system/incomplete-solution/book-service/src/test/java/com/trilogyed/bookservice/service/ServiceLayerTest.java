package com.trilogyed.bookservice.service;

import com.trilogyed.bookservice.dao.BookDao;
import com.trilogyed.bookservice.models.Book;
import com.trilogyed.bookservice.models.Note;
import com.trilogyed.bookservice.util.feign.NoteService;
import com.trilogyed.bookservice.viewmodels.BookViewModel;
import org.junit.Before;
import org.junit.Test;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.junit.Assert.*;
import static org.mockito.Mockito.doReturn;
import static org.mockito.Mockito.mock;

public class ServiceLayerTest {

    private BookDao dao;
    private NoteService noteService;
    private RabbitTemplate rabbitTemplate;
    private ServiceLayer service;

    private static final int BOOK_ID_FOR_TEST = 8909;

    @Before
    public void setUp() throws Exception {
        setUpDaoMock();
        setUpNoteServiceMock();
        setUpRabbitTemplateMock();
        service = new ServiceLayer(dao, noteService, rabbitTemplate);
    }

    private void setUpRabbitTemplateMock() {
        rabbitTemplate = mock(RabbitTemplate.class);
    }

    private void setUpDaoMock() {
        dao = mock(BookDao.class);
        Book inputBook = new Book();
        inputBook.setTitle("Moby Dick");
        inputBook.setAuthor("Herman Melville");

        Book outputBook = new Book();
        outputBook.setTitle("Moby Dick");
        outputBook.setAuthor("Herman Melville");
        outputBook.setBookId(BOOK_ID_FOR_TEST);

        doReturn(outputBook).when(dao).addBook(inputBook);
        doReturn(outputBook).when(dao).getBook(BOOK_ID_FOR_TEST);
    }

    private void setUpNoteServiceMock() {
        noteService = mock(NoteService.class);
        Note note1 = new Note();
        note1.setNoteId(45);
        note1.setBookId(BOOK_ID_FOR_TEST);
        note1.setNote("This is a long book.");

        Note note2 = new Note();
        note2.setNoteId(332);
        note2.setBookId(BOOK_ID_FOR_TEST);
        note2.setNote("Boooooooorrrrrrringgggggg.");

        List<Note> notes = Arrays.asList(note1, note2);

        doReturn(notes).when(noteService).getNotesByBookId(8909);
    }

    @Test
    public void shouldAddBook() {
        // Arrange
        BookViewModel input = new BookViewModel();
        input.setTitle("Moby Dick");
        input.setAuthor("Herman Melville");

        Note note1 = new Note();
        note1.setNote("This is a long book.");
        Note note2 = new Note();
        note2.setNote("Boooooooorrrrrrringgggggg.");
        List<Note> notes = Arrays.asList(note1, note2);
        input.setNotes(notes);

        Book whatIExpect = new Book();
        whatIExpect.setTitle("Moby Dick");
        whatIExpect.setAuthor("Herman Melville");
        whatIExpect.setBookId(BOOK_ID_FOR_TEST);

        // Act
        Book whatIGot = service.createBook(input);

        // Assert
        assertEquals(whatIExpect, whatIGot);
    }

    @Test
    public void shouldGetBook() {
        // Arrange
        BookViewModel whatIExpect = new BookViewModel();
        whatIExpect.setTitle("Moby Dick");
        whatIExpect.setAuthor("Herman Melville");
        whatIExpect.setBookId(BOOK_ID_FOR_TEST);

        Note expectedNote1 = new Note();
        expectedNote1.setBookId(BOOK_ID_FOR_TEST);
        expectedNote1.setNoteId(45);
        expectedNote1.setNote("This is a long book.");

        Note expectedNote2 = new Note();
        expectedNote2.setNoteId(332);
        expectedNote2.setBookId(BOOK_ID_FOR_TEST);
        expectedNote2.setNote("Boooooooorrrrrrringgggggg.");

        whatIExpect.setNotes(Arrays.asList(expectedNote1, expectedNote2));

        // Act
        BookViewModel whatIGot = service.retrieveBook(BOOK_ID_FOR_TEST);

        // Assert
        assertEquals(whatIExpect, whatIGot);
    }

}