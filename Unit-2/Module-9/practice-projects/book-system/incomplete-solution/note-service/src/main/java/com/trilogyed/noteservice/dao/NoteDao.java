package com.trilogyed.noteservice.dao;

import com.trilogyed.noteservice.models.Note;

import java.util.List;

public interface NoteDao {
    Note getNote(int id);
    List<Note> getAllNotes();
    Note addNote(Note note);
    void deleteNote(int id);
    void updateNote(Note note);
    List<Note> getNotesByBook(int bookId);
}
