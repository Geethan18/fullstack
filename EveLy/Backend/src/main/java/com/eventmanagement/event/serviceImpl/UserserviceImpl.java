package com.eventmanagement.event.serviceImpl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

import com.eventmanagement.event.dto.request.PaymentRequest;
import com.eventmanagement.event.dto.request.UserRequest;
import com.eventmanagement.event.models.Payments;
import com.eventmanagement.event.models.User;
import com.eventmanagement.event.repository.UserRepo;
import com.eventmanagement.event.response.BasicResponse;
import com.eventmanagement.event.response.PaymentResponse;
import com.eventmanagement.event.response.UserResponse;
import com.eventmanagement.event.service.UserService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserserviceImpl implements UserService {
    private final UserRepo userRepo;

    @Override
    public BasicResponse <UserResponse> getAllUser(){
        List<User> users=userRepo.findAll();
        List<UserResponse> userResponses=users.stream().map(user-> UserResponse.builder()
        .id(user.getId())
        .username(user.getUsername())
        .image(user.getImage())
        .phonenumber(user.getPhonenumber())
        .gender(user.getGender())
        .address(user.getUseraddress())
        .role(user.getRole())
        .build()).collect(Collectors.toList());

        return BasicResponse.<UserResponse>builder().message("Vetrii!").data(userResponses).build();
        
    }
    public Optional <User> findbyemail(@PathVariable String email){
        return userRepo.findByEmail(email);
    }
     @Override
    public BasicResponse<UserResponse> createUser(UserRequest user) {
        var users = User.builder()
        .id(user.getId())
        .username(user.getUsername())
        .image(user.getImage())
        .phonenumber(user.getPhonenumber())
        .gender(user.getGender())
        .useraddress(user.getAddress())
        .role(user.getRole())
        .build();
        userRepo.save(users);
        return BasicResponse.<UserResponse>builder()
            .message("Success")
            .build();
        }
   
        @Override
        public BasicResponse<UserResponse> deleteUser(String userId) {
            // TODO Auto-generated method stub
            if (userRepo.existsById(userId)) {
                userRepo.deleteById(userId);
                return BasicResponse.<UserResponse>builder()
                    .message("Event deleted successfully")
                    .build();
            } else {
                return BasicResponse.<UserResponse>builder()
                    .message("Event not found with ID: " + userId)
                    .build();
            }
        }
        @Override
        public BasicResponse<UserResponse> updateUser(String userId, UserRequest request){
            // Retrieve the existing booking from the repository
            User existingBooking = userRepo.findById(userId)
                    .orElseThrow(() -> new RuntimeException("Event not found with id: " + userId));
        
            // Update the booking details
            existingBooking.setUseraddress(request.getAddress());
            existingBooking.setGender(request.getGender());
            existingBooking.setImage(request.getImage());
            existingBooking.setPhonenumber(request.getPhonenumber());
            existingBooking.setUsername(request.getUsername());
            
        
            // Save the updated booking to the repository
            userRepo.save(existingBooking);
        
            // Construct and return the response
            UserResponse updatedBookingResponse = mapToUserResponse(existingBooking);
            return BasicResponse.<UserResponse>builder()
                    .message("Event updated successfully")
                    .data(List.of(updatedBookingResponse)) // Pass a list containing a single updated booking response
                    .build();
        }

        private UserResponse mapToUserResponse(User user) {
            return UserResponse.builder()
            .id(user.getId())
            .username(user.getUsername())
            .image(user.getImage())
            .phonenumber(user.getPhonenumber())
            .gender(user.getGender())
            .address(user.getUseraddress())
            .role(user.getRole())
                    .build();
        }
}
