package com.eventmanagement.event.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PaymentRequest {
    private String paymentId;
    private String userId;
    private String eventId;
    private String paymentType;
    private String bookingId;
    private double amount;
}
