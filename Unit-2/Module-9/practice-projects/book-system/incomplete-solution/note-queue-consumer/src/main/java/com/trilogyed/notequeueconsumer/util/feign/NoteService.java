package com.trilogyed.notequeueconsumer.util.feign;

import com.trilogyed.notequeueconsumer.util.messages.Note;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@FeignClient(name = "note-service")
public interface NoteService {
    @RequestMapping(value = "/note", method= RequestMethod.POST)
    public Note createNote(@RequestBody Note note);

    @RequestMapping(value = "/note/{id}", method= RequestMethod.DELETE)
    public void deleteNote(@PathVariable int id);

}
