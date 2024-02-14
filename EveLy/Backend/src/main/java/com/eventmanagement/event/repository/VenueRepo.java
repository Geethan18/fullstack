package com.eventmanagement.event.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eventmanagement.event.models.Venue;

public interface VenueRepo extends JpaRepository<Venue, String>{

}
