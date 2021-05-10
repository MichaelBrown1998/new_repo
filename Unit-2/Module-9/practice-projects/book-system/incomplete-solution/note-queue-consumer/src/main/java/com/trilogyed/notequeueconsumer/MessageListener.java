package com.trilogyed.notequeueconsumer;

import com.trilogyed.notequeueconsumer.util.feign.NoteService;
import com.trilogyed.notequeueconsumer.util.messages.NoteAction;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MessageListener {
    @Autowired
    NoteService noteService;

    @RabbitListener(queues = NoteQueueConsumerApplication.QUEUE_NAME)
    public void receiveMessage(NoteAction noteAction) {
        System.out.println("Received a message " + noteAction);
        if (noteAction.getAction().equals("DELETE")) {
            System.out.println("Deleting note");
            noteService.deleteNote(noteAction.getNote().getNoteId());
        } else {
            System.out.println("Adding note");
            noteService.createNote(noteAction.getNote());
        }
    }

}
