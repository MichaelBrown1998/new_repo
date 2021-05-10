package todo.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import todo.domain.ToDoService;
import todo.models.ToDo;

import java.util.List;

@RestController
@RequestMapping("/api/todo")
public class ToDoController {

    private final ToDoService service;

    public ToDoController(ToDoService service) {
        this.service = service;
    }

    @GetMapping
    public List<ToDo> get() {
        return service.findAll();
    }

    @PostMapping
    public ResponseEntity<ToDo> post(@RequestBody ToDo toDo) {
        if (toDo.getId() > 0) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        ToDo result = service.add(toDo);
        return new ResponseEntity<>(result, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> put(@PathVariable int id, @RequestBody ToDo toDo) {
        if (id != toDo.getId()) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
        if (service.update(toDo)) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable int id) {
        if (service.deleteById(id)) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
