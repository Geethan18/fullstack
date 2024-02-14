package com.eventmanagement.event.serviceImpl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.eventmanagement.event.dto.request.EventDetailsRequest;
import com.eventmanagement.event.models.EventDetails;
import com.eventmanagement.event.models.Menu;
import com.eventmanagement.event.repository.EventDetailsRepo;
import com.eventmanagement.event.response.BasicResponse;
import com.eventmanagement.event.response.EventDetailsResponse;
import com.eventmanagement.event.response.MenuResponse;
import com.eventmanagement.event.service.EventDetailsS;

import lombok.RequiredArgsConstructor;
@Service
@RequiredArgsConstructor
public class EventDetailsImpl implements EventDetailsS{
    private final EventDetailsRepo eventsrepo;
    @Override
    public BasicResponse<EventDetailsResponse> getAllEvents() {
          List<EventDetails> bookings = eventsrepo.findAll();
        List<EventDetailsResponse> bookingResponses = bookings.stream().map(booking-> EventDetailsResponse.builder()
          .eventId(booking.getEventid())
          .eventcategory(booking.getEventCategory())
          .location(booking.getLocation())
          .time(booking.getTime())
          .requirement(booking.getRequirements())
          .build())
          .collect(Collectors.toList());
      return BasicResponse.<EventDetailsResponse>builder()
          .message("Event data fetched successfully!!!")
          .data(bookingResponses)
          .build();
    }

    @Override
    public BasicResponse<EventDetailsResponse> createEvent(EventDetailsRequest menuRequest) {
        // TODO Auto-generated method stub
        var book = EventDetails.builder()
        .eventid(menuRequest.getEventId())
        .eventCategory(menuRequest.getEventcategory())
        .location(menuRequest.getLocation())
        .time(menuRequest.getTime())
        .requirements(menuRequest.getRequirement())
        .build();
    eventsrepo.save(book);
    return BasicResponse.<EventDetailsResponse>builder()
        .message("Success")
        .build();
    }

    @Override
    public BasicResponse<EventDetailsResponse> deleteEvent(String menuId) {
        // TODO Auto-generated method stub
        if (eventsrepo.existsById(menuId)) {
            eventsrepo.deleteById(menuId);
            return BasicResponse.<EventDetailsResponse>builder()
                .message("Event deleted successfully")
                .build();
        } else {
            return BasicResponse.<EventDetailsResponse>builder()
                .message("Event not found with ID: " + menuId)
                .build();
        }
    }
    

    @Override
    public BasicResponse<EventDetailsResponse> updateEvent(String menuId, EventDetailsRequest bookingRequest) {
        // TODO Auto-generated method stub
        EventDetails existingMenu = eventsrepo.findById(menuId)
    .orElseThrow(() -> new RuntimeException("Event not found with id: " + menuId));

// Update the menu details
existingMenu.setEventid(bookingRequest.getEventId());
existingMenu.setAvailableslots(bookingRequest.getAvailableslots());
existingMenu.setCateringDetails(bookingRequest.getCateringdetails());
existingMenu.setEventCategory(bookingRequest.getEventcategory());
existingMenu.setLocation(bookingRequest.getEventId());
existingMenu.setRequirements(bookingRequest.getEventId());
existingMenu.setTime(bookingRequest.getTime());
existingMenu.setVenue(bookingRequest.getVenues());

// Save the updated menu to the repository
eventsrepo.save(existingMenu);

// Construct and return the response
EventDetailsResponse updatedMenuResponse = mapToEventsResponse(existingMenu);
return BasicResponse.<EventDetailsResponse>builder()
    .message("Event updated successfully")
    .data(List.of(updatedMenuResponse)) // Pass a list containing a single updated menu response
    .build();
    }
    private EventDetailsResponse mapToEventsResponse(EventDetails existingMenu) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'mapToMenuResponse'");
    }
}
