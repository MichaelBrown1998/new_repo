package com.trilogyed.bookservice.util.message;

import com.trilogyed.bookservice.models.Note;

import java.util.Objects;

public class NoteAction {
    private Note note;
    private String action;

    public Note getNote() {
        return note;
    }

    public void setNote(Note note) {
        this.note = note;
    }

    public String getAction() {
        return action;
    }

    public void setAction(String action) {
        this.action = action;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        NoteAction that = (NoteAction) o;
        return Objects.equals(note, that.note) && Objects.equals(action, that.action);
    }

    @Override
    public int hashCode() {
        return Objects.hash(note, action);
    }

    @Override
    public String toString() {
        return "NoteAction{" +
                "note=" + note +
                ", action='" + action + '\'' +
                '}';
    }

}
