package com.eventmanagement.event.service;

import com.eventmanagement.event.dto.request.BookingRequest;
import com.eventmanagement.event.response.BasicResponse;
import com.eventmanagement.event.response.BookingsResponse;

public interface BookingService {
    BasicResponse<BookingsResponse> getAllBookings();
     BasicResponse<BookingsResponse> createBooking(BookingRequest bookingRequest);
     BasicResponse<BookingsResponse>deletebooking(String bookingId);
     BasicResponse<BookingsResponse> updateBooking(String bookingId, BookingRequest request);
    //  BasicResponse<BookingsResponse> createBooking(BookingRequest bookingRequest);
}