package com.trilogyed.noteservice.exception;

public class BadIdException extends RuntimeException {
    public BadIdException() {super();}
    public BadIdException(int id) {super("Invalid id: " + id);}
}
