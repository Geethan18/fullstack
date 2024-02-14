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

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Builder
@Table(name = "venues")
public class Venue {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "venue_id")
    private String venueId;

    @Column(name = "venue_name", nullable = false)
    private String venueName;

    @Column(nullable = false)
    private String city;

    @Column(nullable = false)
    private String state;

    @Column(nullable = false)
    private String description;
}
