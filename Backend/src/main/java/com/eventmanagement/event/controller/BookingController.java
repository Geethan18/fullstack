package com.eventmanagement.event.controller;


import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;
import static org.springframework.http.HttpStatus.OK;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.eventmanagement.event.dto.request.BookingRequest;
import com.eventmanagement.event.response.BasicResponse;
import com.eventmanagement.event.response.BookingsResponse;
import com.eventmanagement.event.service.BookingService;
import com.eventmanagement.event.utils.MyConstant;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(MyConstant.USERS)
@RequiredArgsConstructor
public class BookingController {

    private final BookingService bookingService;


     @GetMapping(MyConstant.BOOKING)
        public ResponseEntity<BasicResponse<BookingsResponse>> create() {
            BasicResponse<BookingsResponse> response = new BasicResponse<>();
            try {
                response = bookingService.getAllBookings();
                return new ResponseEntity<>(response, OK);
            } catch (Exception e) {
                response.setMessage("No Bookings");
                return new ResponseEntity<>(response, EXPECTATION_FAILED);
            }
        }
          @PostMapping(MyConstant.BOOKING)
    public ResponseEntity<BasicResponse<BookingsResponse>> createBooking(@RequestBody BookingRequest bookingRequest) {
        BasicResponse<BookingsResponse> response = new BasicResponse<>();
        try {
            BasicResponse<BookingsResponse> createdBookingResponse = bookingService.createBooking(bookingRequest);
            response.setMessage(createdBookingResponse.getMessage());
            response.setData(createdBookingResponse.getData());
            return new ResponseEntity<>(response, OK);
        } catch (Exception e) {
            response.setMessage("Failed to create booking: " + e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
        @DeleteMapping(MyConstant.BOOKING + "/{bookingId}")
    public ResponseEntity<BasicResponse<BookingsResponse>> deleteBooking(@PathVariable String bookingId) {
        BasicResponse<BookingsResponse> response = new BasicResponse<>();
        try {
            BasicResponse<BookingsResponse> deletedBookingResponse = bookingService.deletebooking(bookingId);
            response.setMessage(deletedBookingResponse.getMessage());
            return new ResponseEntity<>(response, OK);
        } catch (Exception e) {
            response.setMessage("Failed to delete booking: " + e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PutMapping(MyConstant.BOOKING + "/{bookingId}")
public ResponseEntity<BasicResponse<BookingsResponse>> updateBooking(@PathVariable String bookingId, @RequestBody BookingRequest bookingRequest) {
    BasicResponse<BookingsResponse> response = new BasicResponse<>();
    try {
        BasicResponse<BookingsResponse> updatedBookingResponse = bookingService.updateBooking(bookingId, bookingRequest);
        response.setMessage(updatedBookingResponse.getMessage());
        response.setData(updatedBookingResponse.getData());
        return new ResponseEntity<>(response, OK);
    } catch (Exception e) {
        response.setMessage("Failed to update booking: " + e.getMessage());
        return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}

}