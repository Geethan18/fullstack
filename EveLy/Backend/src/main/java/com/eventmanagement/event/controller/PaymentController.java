package com.eventmanagement.event.controller;

import com.eventmanagement.event.dto.request.BookingRequest;
import com.eventmanagement.event.dto.request.PaymentRequest;
import com.eventmanagement.event.response.BasicResponse;
import com.eventmanagement.event.response.PaymentResponse;
import com.eventmanagement.event.service.PaymentService;
import com.eventmanagement.event.utils.MyConstant;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(MyConstant.USERS)
@RequiredArgsConstructor
public class PaymentController {

    private final PaymentService paymentService;

    @PostMapping("/post")
    public ResponseEntity<BasicResponse<PaymentResponse>> createPayment(@RequestBody PaymentRequest paymentRequest) {
        BasicResponse<PaymentResponse> response = new BasicResponse<>();
        try {
            BasicResponse<PaymentResponse> createdPaymentResponse = paymentService.createPayment(paymentRequest);
            response.setMessage(createdPaymentResponse.getMessage());
            response.setData(createdPaymentResponse.getData());
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            response.setMessage("Failed to create payment: " + e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("/getPayments")
        public ResponseEntity<BasicResponse<PaymentResponse>> create() {
            BasicResponse<PaymentResponse> response = new BasicResponse<>();
            try {
                response = paymentService.getAllPayment();
                return new ResponseEntity<>(response, HttpStatus.OK);
            } catch (Exception e) {
                response.setMessage("No Payments");
                return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
            }
        }
        @DeleteMapping(MyConstant.PAY + "/{PaymentId}")
        public ResponseEntity<BasicResponse<PaymentResponse>> deleteBooking(@PathVariable String PaymentId) {
            BasicResponse<PaymentResponse> response = new BasicResponse<>();
            try {
                BasicResponse<PaymentResponse> deletedBookingResponse = paymentService.deletePayment(PaymentId);
                response.setMessage(deletedBookingResponse.getMessage());
                return new ResponseEntity<>(response, HttpStatus.OK);
            } catch (Exception e) {
                response.setMessage("Failed to delete booking: " + e.getMessage());
                return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
         @PutMapping(MyConstant.PAY + "/{PaymentId}")
public ResponseEntity<BasicResponse<PaymentResponse>> updateBooking(@PathVariable String bookingId, @RequestBody PaymentRequest payRequest) {
    BasicResponse<PaymentResponse> response = new BasicResponse<>();
    try {
        BasicResponse<PaymentResponse> updatedBookingResponse = paymentService.updatePayment(bookingId, payRequest);
        response.setMessage(updatedBookingResponse.getMessage());
        response.setData(updatedBookingResponse.getData());
        return new ResponseEntity<>(response, HttpStatus.OK);
    } catch (Exception e) {
        response.setMessage("Failed to update booking: " + e.getMessage());
        return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    // Implement other CRUD endpoints for Payments as needed
}
}