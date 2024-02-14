package com.eventmanagement.event.service;

import com.eventmanagement.event.dto.request.EventDetailsRequest;
import com.eventmanagement.event.response.BasicResponse;
import com.eventmanagement.event.response.EventDetailsResponse;

public interface EventDetailsS {
    BasicResponse<EventDetailsResponse> getAllEvents();
     BasicResponse<EventDetailsResponse> createEvent(EventDetailsRequest menuRequest);
     BasicResponse<EventDetailsResponse>deleteEvent(String menuId);
     BasicResponse<EventDetailsResponse> updateEvent(String menuId, EventDetailsRequest bookingRequest);
}
