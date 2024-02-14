package com.eventmanagement.event.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eventmanagement.event.models.Bookings;


public interface BookingsRepo extends JpaRepository <Bookings, String> {
    // Optional<Bookings> findByID(String bookingId);
}
