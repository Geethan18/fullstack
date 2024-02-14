package com.eventmanagement.event.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eventmanagement.event.models.EventDetails;

public interface EventDetailsRepo extends JpaRepository<EventDetails, String>{

}
