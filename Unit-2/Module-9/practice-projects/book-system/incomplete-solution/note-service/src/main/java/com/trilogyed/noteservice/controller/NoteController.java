package com.trilogyed.noteservice.controller;

import com.trilogyed.noteservice.dao.NoteDao;
import com.trilogyed.noteservice.exception.BadIdException;
import com.trilogyed.noteservice.exception.InvalidParametersException;
import com.trilogyed.noteservice.models.Note;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class NoteController {
    @Autowired
    private NoteDao dao;

    @RequestMapping(value = "/note/{id}", method= RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public Note getNoteById(@PathVariable int id) {
        Note returnVal = dao.getNote(id);
        if (returnVal == null) {
            throw new BadIdException(id);
        }
        return dao.getNote(id);
    }
    @RequestMapping(value = "/note", method= RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    public Note createNote(@RequestBody Note note) {
        System.out.println("creating note " + note);
        return dao.addNote(note);
    }

    @RequestMapping(value = "/note", method= RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public List<Note> getAllNotes() {
        return dao.getAllNotes();
    }

    @RequestMapping(value = "/note/book/{id}", method= RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public List<Note> getNotesByBookId(@PathVariable int id) {
        System.out.println("Getting notes for book " + id);
        return dao.getNotesByBook(id);
    }

    @RequestMapping(value = "/note/{id}", method= RequestMethod.PUT)
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateNote(@PathVariable int id, @RequestBody Note note) {
        if (id != note.getNoteId()) {
            throw new InvalidParametersException("id in path does not match noteId in body");
        }
        dao.updateNote(note);
    }

    @RequestMapping(value = "/note/{id}", method= RequestMethod.DELETE)
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteNote(@PathVariable int id) {
        System.out.println("Deleting note with id " + id);
        dao.deleteNote(id);
    }

}
