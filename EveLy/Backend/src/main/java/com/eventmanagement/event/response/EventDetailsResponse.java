package com.eventmanagement.event.response;

import java.time.LocalTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EventDetailsResponse {
    private String eventId;
    private String eventcategory;
    private String location;
    private LocalTime time;
    private String requirement;
    private String cateringdetails;
    private String venues;
    private int availableslots;
    private Long userId;
}
