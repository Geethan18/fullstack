package com.eventmanagement.event.controller;

import org.springframework.web.bind.annotation.RestController;

import com.eventmanagement.event.dto.request.MenuRequest;
import com.eventmanagement.event.dto.request.UserRequest;
import com.eventmanagement.event.models.User;
import com.eventmanagement.event.response.BasicResponse;
import com.eventmanagement.event.response.MenuResponse;
import com.eventmanagement.event.response.UserResponse;
import com.eventmanagement.event.service.UserService;
import com.eventmanagement.event.serviceImpl.UserserviceImpl;
import com.eventmanagement.event.utils.MyConstant;

import lombok.RequiredArgsConstructor;

import static com.eventmanagement.event.utils.MyConstant.LIST;
import static com.eventmanagement.event.utils.MyConstant.USERS;

import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping(USERS)
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;
    private final UserserviceImpl userserviceim;
    @GetMapping(LIST)
    public ResponseEntity<BasicResponse<UserResponse>> create(){
        System.out.println("Hello");
        BasicResponse<UserResponse> response=new BasicResponse<>();
        try{
            response=userService.getAllUser();
            return new ResponseEntity<>(response,HttpStatus.OK);
        }
        catch(Exception e){
            response.setMessage("Something went wrong!");
            return new ResponseEntity<>(response,HttpStatus.EXPECTATION_FAILED);
        }
    }
@GetMapping(MyConstant.USER)
public Optional<User> findbyEmail(@PathVariable String email){
    return userserviceim.findbyemail(email);
}
 @PostMapping(MyConstant.USER)
    public ResponseEntity<BasicResponse<UserResponse>> createUser(@RequestBody UserRequest bookingRequest) {
        BasicResponse<UserResponse> response = new BasicResponse<>();
        try {
            BasicResponse<UserResponse> createdBookingResponse = userService.createUser(bookingRequest);
            response.setMessage(createdBookingResponse.getMessage());
            response.setData(createdBookingResponse.getData());
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            response.setMessage("Failed to create booking: " + e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
        @DeleteMapping(MyConstant.USER + "/{bookingId}")
    public ResponseEntity<BasicResponse<UserResponse>> deleteBooking(@PathVariable String bookingId) {
        BasicResponse<UserResponse> response = new BasicResponse<>();
        try {
            BasicResponse<UserResponse> deletedBookingResponse = userService.deleteUser(bookingId);
            response.setMessage(deletedBookingResponse.getMessage());
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            response.setMessage("Failed to delete booking: " + e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PutMapping(MyConstant.USER + "/{bookingId}")
public ResponseEntity<BasicResponse<UserResponse>> updateBooking(@PathVariable String bookingId, @RequestBody UserRequest bookingRequest) {
    BasicResponse<UserResponse> response = new BasicResponse<>();
    try {
        BasicResponse<UserResponse> updatedBookingResponse = userService.updateUser(bookingId, bookingRequest);
        response.setMessage(updatedBookingResponse.getMessage());
        response.setData(updatedBookingResponse.getData());
        return new ResponseEntity<>(response, HttpStatus.OK);
    } catch (Exception e) {
        response.setMessage("Failed to update booking: " + e.getMessage());
        return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
}
