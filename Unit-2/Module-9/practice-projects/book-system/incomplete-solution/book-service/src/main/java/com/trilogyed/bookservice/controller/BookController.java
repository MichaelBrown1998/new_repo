package com.trilogyed.bookservice.controller;

import com.trilogyed.bookservice.models.Book;
import com.trilogyed.bookservice.service.ServiceLayer;
import com.trilogyed.bookservice.viewmodels.BookViewModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BookController {
    @Autowired
    private ServiceLayer serviceLayer;

    @RequestMapping(value = "/book/{id}", method= RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public BookViewModel getBookById(@PathVariable int id) {
        return serviceLayer.retrieveBook(id);
    }

    @RequestMapping(value = "/book", method= RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    public Book createBook(@RequestBody BookViewModel bookViewModel) {
        return serviceLayer.createBook(bookViewModel);
    }

    @RequestMapping(value = "/book", method= RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public List<BookViewModel> getAllBooks() {
        return serviceLayer.getAllBooks();
    }

    @RequestMapping(value = "/book/{id}", method= RequestMethod.PUT)
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateBook(@PathVariable int id, @RequestBody BookViewModel bookViewModel) {
        serviceLayer.updateBook(bookViewModel);
    }

    @RequestMapping(value = "/book/{id}", method= RequestMethod.DELETE)
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteBook(@PathVariable int id) {
        serviceLayer.deleteBook(id);
    }

}
