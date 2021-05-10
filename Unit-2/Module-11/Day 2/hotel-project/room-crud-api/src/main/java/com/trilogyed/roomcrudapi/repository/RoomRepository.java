package com.trilogyed.roomcrudapi.repository;

import com.trilogyed.roomcrudapi.dto.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoomRepository extends JpaRepository<Room, Integer> {

}
