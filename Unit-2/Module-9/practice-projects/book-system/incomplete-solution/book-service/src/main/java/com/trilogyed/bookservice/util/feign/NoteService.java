package com.trilogyed.bookservice.util.feign;

import com.trilogyed.bookservice.models.Note;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.List;

@FeignClient(name = "note-service")
public interface NoteService {
    @RequestMapping(value = "/note/book/{id}", method= RequestMethod.GET)
    public List<Note> getNotesByBookId(@PathVariable int id);
}
