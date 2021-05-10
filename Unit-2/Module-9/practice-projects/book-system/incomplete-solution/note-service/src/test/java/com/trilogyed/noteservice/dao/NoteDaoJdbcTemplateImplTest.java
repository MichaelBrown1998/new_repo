package com.trilogyed.noteservice.dao;

import com.trilogyed.noteservice.models.Note;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.List;

import static org.junit.Assert.*;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest
public class NoteDaoJdbcTemplateImplTest {
    @Autowired
    NoteDao dao;

    private Note testNote1NoId;

    @Before
    public void setUp() throws Exception {
        List<Note> notes = dao.getAllNotes();

        for (Note note : notes) {
            dao.deleteNote(note.getNoteId());
        }

    }

    @Test
    public void shouldAddGetAndDeleteANote() {
        Note note = new Note();
        note.setBookId(1);
        note.setNote("test note");

        Note whatIExpect = new Note();
        whatIExpect.setBookId(1);
        whatIExpect.setNote("test note");

        // Act
        note = dao.addNote(note);
        Note whatIGot = dao.getNote(note.getNoteId());

        whatIExpect.setNoteId(note.getNoteId());

        // Assert
        assertEquals(whatIExpect, whatIGot);

        // Act
        dao.deleteNote(note.getNoteId());
        whatIGot = dao.getNote(note.getNoteId());

        assertNull(whatIGot);
    }

    @Test
    public void shouldGetAllNotes() {
        //Arrange
        Note note1 = new Note();
        note1.setBookId(1);
        note1.setNote("test note 1");

        Note note2 = new Note();
        note2.setBookId(2);
        note2.setNote("test note 2");

        dao.addNote(note1);
        dao.addNote(note2);

        //Act
        List<Note> notes = dao.getAllNotes();

        //Assert
        assertEquals(2, notes.size());
    }

    @Test
    public void shouldGetNotesByBook() {
        //Arrange
        Note note1 = new Note();
        note1.setBookId(1);
        note1.setNote("test note 1");

        Note note2 = new Note();
        note2.setBookId(2);
        note2.setNote("test note 2");

        Note note3 = new Note();
        note3.setBookId(2);
        note3.setNote("test note 3");

        dao.addNote(note1);
        dao.addNote(note2);
        dao.addNote(note3);

        //Act
        List<Note> notes = dao.getNotesByBook(1);

        //Assert
        assertEquals(notes.size(), 1);

        //Act
        notes = dao.getNotesByBook(2);

        //Assert
        assertEquals(notes.size(), 2);

        //Act
        notes = dao.getNotesByBook(3);

        //Assert
        assertEquals(notes.size(), 0);
    }


    @Test
    public void shouldUpdateNote() {
        //Arrange
        Note noteToInsert = new Note();
        noteToInsert.setBookId(1);
        noteToInsert.setNote("before update");

        noteToInsert = dao.addNote(noteToInsert);

        Note updatedNote = new Note();
        updatedNote.setNoteId(noteToInsert.getNoteId());
        updatedNote.setBookId(2);
        updatedNote.setNote("after update");

        Note noteIExpect = new Note();
        noteIExpect.setNoteId(noteToInsert.getNoteId());
        noteIExpect.setBookId(updatedNote.getBookId());
        noteIExpect.setNote(updatedNote.getNote());

        // Act
        dao.updateNote(updatedNote);
        Note noteIGot = dao.getNote(noteToInsert.getNoteId());

        //Assert
        assertEquals(noteIExpect, noteIGot);
    }


}