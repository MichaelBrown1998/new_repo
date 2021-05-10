package todo.domain;

import org.springframework.stereotype.Service;
import todo.models.ToDo;

import java.util.ArrayList;
import java.util.List;

@Service
public class ToDoService {

    private final ArrayList<ToDo> todos = new ArrayList<>();

    public ToDoService() {
        todos.add(new ToDo(1, "Pick up kale.", 5));
        todos.add(new ToDo(2, "Wash the dog.", 2));
        todos.add(new ToDo(3, "File taxes.", 9));
    }

    public List<ToDo> findAll() {
        return new ArrayList<>(todos);
    }

    public ToDo add(ToDo toDo) {

        int nextId = todos.stream()
                .mapToInt(i -> i.getId())
                .max()
                .orElse(0) + 1;

        toDo.setId(nextId);
        todos.add(toDo);
        return toDo;
    }

    public boolean update(ToDo toDo) {
        for (int i = 0; i < todos.size(); i++) {
            if (todos.get(i).getId() == toDo.getId()) {
                todos.set(i, toDo);
                return true;
            }
        }
        return false;
    }

    public boolean deleteById(int id) {
        return todos.removeIf(i -> i.getId() == id);
    }
}
