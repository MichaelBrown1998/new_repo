package com.trilogyed.hospital.domain;

import java.util.Objects;

public class EquipmentLocation {
    private Integer id;
    private String description;
    private String location;

    public EquipmentLocation() {}

    public EquipmentLocation(Integer id, String description, String location) {
        this(description, location);
        this.id = id;
    }

    public EquipmentLocation(String description, String location) {
        this.description = description;
        this.location = location;
    }


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        EquipmentLocation that = (EquipmentLocation) o;
        return Objects.equals(id, that.id) &&
                description.equals(that.description) &&
                location.equals(that.location);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, description, location);
    }
}
