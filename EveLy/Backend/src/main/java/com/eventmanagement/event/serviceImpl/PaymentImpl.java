package com.eventmanagement.event.serviceImpl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.eventmanagement.event.dto.request.BookingRequest;
import com.eventmanagement.event.dto.request.PaymentRequest;
import com.eventmanagement.event.models.Bookings;
import com.eventmanagement.event.models.Payments;
import com.eventmanagement.event.repository.PaymentRepo;
import com.eventmanagement.event.response.BasicResponse;
import com.eventmanagement.event.response.PaymentResponse;
import com.eventmanagement.event.service.BookingService;
import com.eventmanagement.event.service.PaymentService;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PaymentImpl implements PaymentService {

    private final PaymentRepo payrep;

     @Override
    public BasicResponse<PaymentResponse> getAllPayment(){
         List<Payments> payments = payrep.findAll();
          List<PaymentResponse> PaymentResponses = payments.stream().map(payment-> PaymentResponse.builder()
            .bookingId(payment.getBookingId())
            .paymentId(payment.getPaymentId())
            .eventId(payment.getEventId())
            .amount(payment.getAmount())
            .build())
            .collect(Collectors.toList());
        return BasicResponse.<PaymentResponse>builder()
            .message("Event data fetched successfully!!!")
            .data(PaymentResponses)
            .build();
        }



    private final PaymentRepo payrepp;
    @Override
    public BasicResponse<PaymentResponse> createPayment(PaymentRequest reques) {
        var pay = Payments.builder()
        .bookingId(reques.getBookingId())
        .userId(reques.getUserId())
        .paymentId(reques.getPaymentId())
        .eventId(reques.getEventId())
        .paymentType(reques.getPaymentType())
        .amount(reques.getAmount())
        .build();
        payrepp.save(pay);
        return BasicResponse.<PaymentResponse>builder()
            .message("Success")
            .build();
        }
   
        


        @Override
        public BasicResponse<PaymentResponse> deletePayment(String PaymentId) {
            // TODO Auto-generated method stub
            if (payrepp.existsById(PaymentId)) {
                payrepp.deleteById(PaymentId);
                return BasicResponse.<PaymentResponse>builder()
                    .message("Event deleted successfully")
                    .build();
            } else {
                return BasicResponse.<PaymentResponse>builder()
                    .message("Event not found with ID: " + PaymentId)
                    .build();
            }
        }
        @Override
        public BasicResponse<PaymentResponse> updatePayment(String paymentId, PaymentRequest request){
            // Retrieve the existing booking from the repository
            Payments existingBooking = payrepp.findById(paymentId)
                    .orElseThrow(() -> new RuntimeException("Event not found with id: " + paymentId));
        
            // Update the booking details
            existingBooking.setAmount(request.getAmount());
            existingBooking.setPaymentType(request.getPaymentType());
        
            // Save the updated booking to the repository
            payrepp.save(existingBooking);
        
            // Construct and return the response
            PaymentResponse updatedBookingResponse = mapToPaymentResponse(existingBooking);
            return BasicResponse.<PaymentResponse>builder()
                    .message("Event updated successfully")
                    .data(List.of(updatedBookingResponse)) // Pass a list containing a single updated booking response
                    .build();
        }

        private PaymentResponse mapToPaymentResponse(Payments payment) {
            return PaymentResponse.builder()
                    .paymentId(payment.getPaymentId())
                    .bookingId(payment.getBookingId())
                    .amount(payment.getAmount())
                    .paymentType(payment.getPaymentType())
                    .build();
        }

    }