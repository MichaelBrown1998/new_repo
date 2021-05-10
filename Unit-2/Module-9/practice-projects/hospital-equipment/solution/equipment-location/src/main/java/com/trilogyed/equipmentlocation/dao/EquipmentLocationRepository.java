package com.trilogyed.equipmentlocation.dao;

import com.trilogyed.equipmentlocation.dto.EquipmentLocation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EquipmentLocationRepository extends JpaRepository<EquipmentLocation, Integer> {
    List<EquipmentLocation> findByDescription(String description);
}
