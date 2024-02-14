package com.eventmanagement.event.dto.request;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BookingRequest {
    private String bookingId;
    private String status;
    private String bookingName;
}
