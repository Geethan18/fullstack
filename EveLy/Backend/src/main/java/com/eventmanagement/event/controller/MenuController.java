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
import com.eventmanagement.event.dto.request.MenuRequest;
import com.eventmanagement.event.models.Menu;
import com.eventmanagement.event.response.BasicResponse;
import com.eventmanagement.event.response.BookingsResponse;
import com.eventmanagement.event.response.MenuResponse;
import com.eventmanagement.event.service.BookingService;
import com.eventmanagement.event.service.MenuService;
import com.eventmanagement.event.utils.MyConstant;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(MyConstant.USERS)
@RequiredArgsConstructor
public class MenuController {

    private final MenuService menuService;


     @GetMapping(MyConstant.MENU)
        public ResponseEntity<BasicResponse<MenuResponse>> create() {
            BasicResponse<MenuResponse> response = new BasicResponse<>();
            try {
                response = menuService.getAllMenu();
                return new ResponseEntity<>(response, OK);
            } catch (Exception e) {
                response.setMessage("No Bookings");
                return new ResponseEntity<>(response, EXPECTATION_FAILED);
            }
        }
          @PostMapping(MyConstant.MENU)
    public ResponseEntity<BasicResponse<MenuResponse>> createBooking(@RequestBody MenuRequest bookingRequest) {
        BasicResponse<MenuResponse> response = new BasicResponse<>();
        try {
            BasicResponse<MenuResponse> createdBookingResponse = menuService.createMenu(bookingRequest);
            response.setMessage(createdBookingResponse.getMessage());
            response.setData(createdBookingResponse.getData());
            return new ResponseEntity<>(response, OK);
        } catch (Exception e) {
            response.setMessage("Failed to create booking: " + e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
        @DeleteMapping(MyConstant.MENU + "/{bookingId}")
    public ResponseEntity<BasicResponse<MenuResponse>> deleteBooking(@PathVariable String bookingId) {
        BasicResponse<MenuResponse> response = new BasicResponse<>();
        try {
            BasicResponse<MenuResponse> deletedBookingResponse = menuService.deleteMenu(bookingId);
            response.setMessage(deletedBookingResponse.getMessage());
            return new ResponseEntity<>(response, OK);
        } catch (Exception e) {
            response.setMessage("Failed to delete booking: " + e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PutMapping(MyConstant.MENU + "/{bookingId}")
public ResponseEntity<BasicResponse<MenuResponse>> updateBooking(@PathVariable String bookingId, @RequestBody MenuRequest bookingRequest) {
    BasicResponse<MenuResponse> response = new BasicResponse<>();
    try {
        BasicResponse<MenuResponse> updatedBookingResponse = menuService.updateMenu(bookingId, bookingRequest);
        response.setMessage(updatedBookingResponse.getMessage());
        response.setData(updatedBookingResponse.getData());
        return new ResponseEntity<>(response, OK);
    } catch (Exception e) {
        response.setMessage("Failed to update booking: " + e.getMessage());
        return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}

}