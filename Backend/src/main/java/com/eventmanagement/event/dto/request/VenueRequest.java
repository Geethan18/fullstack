package com.eventmanagement.event.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class VenueRequest {
    private Long venueId;
    private String venueName;
    private String city;
    private String state;
    private String location;
}
