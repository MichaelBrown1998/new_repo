package com.trilogyed.bookservice.dao;

import com.trilogyed.bookservice.models.Book;

import java.util.List;

public interface BookDao {
    Book getBook(int id);
    List<Book> getAllBooks();
    Book addBook(Book book);
    void deleteBook(int id);
    void updateBook(Book book);
}
