package com.trilogyed.hotelbookingservice.exception;

public class NoSuchRoomException extends RuntimeException {
    public NoSuchRoomException(int roomNumber) {super("There is no room number " + roomNumber + ".");}
}
