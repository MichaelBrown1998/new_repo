package com.trilogyed.equipmentlocation;

public class InvalidIdException extends RuntimeException {
    public InvalidIdException(int id) {
        super("Invalid id: " + id);
    }
}
