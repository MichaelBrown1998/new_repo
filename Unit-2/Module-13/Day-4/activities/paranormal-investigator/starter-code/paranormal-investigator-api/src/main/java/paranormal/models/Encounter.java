package paranormal.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import paranormal.json.LocalDateTimeDeserializer;

import java.time.LocalDateTime;

public class Encounter {

    private int id;
    private String brief;
    private String details;
    @JsonFormat(pattern = "dd-MMM-yyyy hh:mma")
    @JsonDeserialize(using = LocalDateTimeDeserializer.class)
    private LocalDateTime dateTime;
    private String imageUrl;

    public Encounter() {
    }

    public Encounter(int id, String brief, String details, LocalDateTime dateTime, String imageUrl) {
        this.id = id;
        this.brief = brief;
        this.details = details;
        this.dateTime = dateTime;
        this.imageUrl = imageUrl;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getBrief() {
        return brief;
    }

    public void setBrief(String brief) {
        this.brief = brief;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public LocalDateTime getDateTime() {
        return dateTime;
    }

    public void setDateTime(LocalDateTime dateTime) {
        this.dateTime = dateTime;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
}
