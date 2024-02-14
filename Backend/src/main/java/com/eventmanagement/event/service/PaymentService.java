package com.eventmanagement.event.service;

import com.eventmanagement.event.dto.request.PaymentRequest;
import com.eventmanagement.event.response.BasicResponse;
import com.eventmanagement.event.response.PaymentResponse;

public interface PaymentService {
    BasicResponse<PaymentResponse> getAllPayment();
     BasicResponse<PaymentResponse> createPayment(PaymentRequest PaymentRequest);
     BasicResponse<PaymentResponse>deletePayment(String PaymentId);
     BasicResponse<PaymentResponse> updatePayment(String PaymentId, PaymentRequest PaymentRequest);
}
