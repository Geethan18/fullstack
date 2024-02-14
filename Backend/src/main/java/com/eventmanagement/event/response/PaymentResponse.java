package com.eventmanagement.event.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PaymentResponse {
    private String paymentId;
    private String userId;
    private String eventId;
    private String paymentType;
    private String bookingId;
    private double amount;
    private String message;
}
