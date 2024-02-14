package com.eventmanagement.event.serviceImpl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.eventmanagement.event.dto.request.BookingRequest;
import com.eventmanagement.event.models.Bookings;
import com.eventmanagement.event.models.Payments;
import com.eventmanagement.event.repository.BookingsRepo;
import com.eventmanagement.event.response.BasicResponse;
import com.eventmanagement.event.response.BookingsResponse;
import com.eventmanagement.event.response.PaymentResponse;
import com.eventmanagement.event.service.BookingService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BookingServiceImpl implements BookingService {

    private final BookingsRepo bookingRepository;

     @Override
    public BasicResponse<BookingsResponse> getAllBookings(){
         List<Bookings> bookings = bookingRepository.findAll();
          List<BookingsResponse> bookingResponses = bookings.stream().map(booking-> BookingsResponse.builder()
            .bookingId(booking.getBookingId())
            .bookingname(booking.getBookingname())
            .status(booking.getStatus())
            .build())
            .collect(Collectors.toList());
        return BasicResponse.<BookingsResponse>builder()
            .message("Course data fetched successfully!!!")
            .data(bookingResponses)
            .build();
        }

    // @Override
    // public BasicResponse<BookingsResponse> createBooking(BookingRequest bookingRequest) {
    //     // TODO Auto-generated method stub
    //     // throw new UnsupportedOperationException("Unimplemented method 'createBooking'");
    //     Bookings booking = new Bookings();
    //     booking.setBookingId(bookingRequest.getBookingId());
    //     booking.setBookingname(bookingRequest.getEventName());
    //     booking.setStatus(bookingRequest.getStatus());
    //     Bookings savedBooking = bookingRepository.save(booking);
    //     BookingsResponse bookingResponse = mapToBookingResponse(savedBooking);
    //     return BasicResponse.<BookingsResponse>builder()
    //             .message("Booking created successfully")
    //             .data(List.of(bookingResponse))
    //             .build();
    // }
    // private BookingsResponse mapToBookingResponse(Bookings booking) {
    //     return BookingsResponse.builder()
    //             .bookingId(booking.getBookingId())
    //             .bookingname(booking.getBookingname())
    //             .status(booking.getStatus())
    //             .build();
    // }

    private final BookingsRepo bookingsRepo;
    @Override
    public BasicResponse<BookingsResponse> createBooking(BookingRequest request) {
        var book = Bookings.builder()
            .bookingId(request.getBookingId())
            .bookingname(request.getBookingName())
            .status(request.getStatus())
            .build();
        bookingsRepo.save(book);
        return BasicResponse.<BookingsResponse>builder()
            .message("Success")
            .build();
        }
   
        


        @Override
        public BasicResponse<BookingsResponse> deletebooking(String bookingId) {
            // TODO Auto-generated method stub
            if (bookingsRepo.existsById(bookingId)) {
                bookingsRepo.deleteById(bookingId);
                return BasicResponse.<BookingsResponse>builder()
                    .message("Booking deleted successfully")
                    .build();
            } else {
                return BasicResponse.<BookingsResponse>builder()
                    .message("Booking not found with ID: " + bookingId)
                    .build();
            }
        }
        @Override
        public BasicResponse<BookingsResponse> updateBooking(String bookingId, BookingRequest request) {
            // Retrieve the existing booking from the repository
            Bookings existingBooking = bookingsRepo.findById(bookingId)
                    .orElseThrow(() -> new RuntimeException("Booking not found with id: " + bookingId));
        
            // Update the booking details
            existingBooking.setBookingname(request.getBookingName());
            existingBooking.setStatus(request.getStatus());
        
            // Save the updated booking to the repository
            bookingsRepo.save(existingBooking);
        
            // Construct and return the response
            BookingsResponse updatedBookingResponse = mapToBookingResponse(existingBooking);
            return BasicResponse.<BookingsResponse>builder()
                    .message("Booking updated successfully")
                    .data(List.of(updatedBookingResponse)) // Pass a list containing a single updated booking response
                    .build();
        }




       private BookingsResponse mapToBookingResponse(Bookings request) {
            return BookingsResponse.builder()
            .bookingId(request.getBookingId())
            .bookingname(request.getBookingname())
            .status(request.getStatus())
                    .build();
        }
}