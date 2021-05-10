package paranormal.domain;

import org.springframework.stereotype.Service;
import paranormal.models.Encounter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class EncounterService {

    private ArrayList<Encounter> encounters = new ArrayList<>();

    public EncounterService() {
        encounters.add(new Encounter(1, "Tingling sensation",
                "I swear something is near me. I just know it.",
                LocalDateTime.now(),
                null));
        encounters.add(new Encounter(2, "Weird noise",
                "Did you hear that?!",
                LocalDateTime.now().minusDays(2),
                "https://upload.wikimedia.org/wikipedia/commons/8/8f/Shunkosai_Hokuei_Obake.jpg"));
        encounters.add(new Encounter(3, "A shape",
                "Look over there. What is that?",
                LocalDateTime.now().minusDays(4),
                "https://upload.wikimedia.org/wikipedia/commons/9/9a/John_A._Russo_as_zombie_in_Night_of_the_Living_Dead.JPG"));
    }

    public List<Encounter> findAll() {
        return new ArrayList<>(encounters);
    }

    public Encounter add(Encounter encounter) {

        int nextId = encounters.stream()
                .mapToInt(i -> i.getId())
                .max()
                .orElse(0) + 1;

        encounter.setId(nextId);
        encounters.add(encounter);
        return encounter;
    }

    public boolean update(Encounter encounter) {
        for (int i = 0; i < encounters.size(); i++) {
            if (encounters.get(i).getId() == encounter.getId()) {
                encounters.set(i, encounter);
                return true;
            }
        }
        return false;
    }

    public boolean deleteById(int id) {
        return encounters.removeIf(i -> i.getId() == id);
    }
}
