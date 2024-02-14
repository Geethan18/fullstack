package com.eventmanagement.event.dto.request;

import com.eventmanagement.event.enumerated.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserRequest {
    private String id;
    private String username;
    private String image;
    private Role role;
    private Long phonenumber;
    private String gender;
    private String address;
}
