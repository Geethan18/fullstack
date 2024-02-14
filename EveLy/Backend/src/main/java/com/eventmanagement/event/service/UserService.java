package com.eventmanagement.event.service;

import com.eventmanagement.event.dto.request.UserRequest;
import com.eventmanagement.event.response.BasicResponse;
import com.eventmanagement.event.response.UserResponse;

public interface UserService {
     BasicResponse<UserResponse> getAllUser();
     BasicResponse<UserResponse> updateUser(String userId, UserRequest request);
     BasicResponse<UserResponse> deleteUser(String userId);
     BasicResponse<UserResponse> createUser(UserRequest user);
}
