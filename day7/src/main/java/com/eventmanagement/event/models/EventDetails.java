package com.eventmanagement.event.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Builder
@Table(name = "event_details")
public class EventDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String eventid;

    @Column(name = "event_category", nullable = false)
    private String eventCategory;

    @Column(nullable = false)
    private String location;

    @Column(nullable = false)
    private LocalDate date;

    @Column(nullable = false)
    private LocalTime time;

    @Column(nullable = false)
    private String requirements;

    @Column(name = "catering_details")
    private String cateringDetails;

    @Column(nullable = false)
    private String venue;

    @Column(nullable = false)
    private int availableslots;

    @Column(name = "user_id")
    private Long userId;

  
}
