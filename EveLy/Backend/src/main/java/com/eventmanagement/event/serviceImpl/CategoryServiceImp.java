// package com.eventmanagement.event.serviceImpl;

// import java.util.List;
// import java.util.stream.Collectors;

// import org.springframework.stereotype.Service;

// import com.eventmanagement.event.dto.request.MenuRequest;
// import com.eventmanagement.event.models.Category;
// import com.eventmanagement.event.models.Menu;
// import com.eventmanagement.event.repository.CategoryRepo;
// import com.eventmanagement.event.repository.MenuRepo;
// import com.eventmanagement.event.response.BasicResponse;
// import com.eventmanagement.event.response.CategoryResponse;
// import com.eventmanagement.event.response.MenuResponse;
// import com.eventmanagement.event.service.MenuService;

// import lombok.RequiredArgsConstructor;

// @Service
// @RequiredArgsConstructor
// public class CategoryServiceImp implements MenuService {
//     private final CategoryRepo categoryRepository;
//     @Override
//     public BasicResponse<MenuResponse> getAllMenu() {
//         // TODO Auto-generated method stub
//         List<Category> bookings = categoryRepository.findAll();
//         List<CategoryResponse> bookingResponses = bookings.stream().map(booking-> CategoryResponse.builder()
//           .menuId(booking.getMenuId())
//           .menuName(booking.getMenuName())
//           .foods(booking.getFoods())
//           .typeofFood(booking.getTypesOfFoods())
//           .build())
//           .collect(Collectors.toList());
//       return BasicResponse.<CategoryResponse>builder()
//           .message("Course data fetched successfully!!!")
//           .data(bookingResponses)
//           .build();
//     }
//     @Override
//     public BasicResponse<MenuResponse> createMenu(MenuRequest menuRequest) {
//         // TODO Auto-generated method stub
//         var book = Menu.builder()
//         .menuId(menuRequest.getMenuId())
//         .menuName(menuRequest.getMenuName())
//         .foods(menuRequest.getFoods())
//         .typesOfFoods(menuRequest.getTypeofFood())
//         .build();
//     menuRepository.save(book);
//     return BasicResponse.<MenuResponse>builder()
//         .message("Success")
//         .build();
//     }
//     @Override
//     public BasicResponse<MenuResponse> deleteMenu(String menuId) {
//         // TODO Auto-generated method stub
//         if (menuRepository.existsById(menuId)) {
//             menuRepository.deleteById(menuId);
//             return BasicResponse.<MenuResponse>builder()
//                 .message("Booking deleted successfully")
//                 .build();
//         } else {
//             return BasicResponse.<MenuResponse>builder()
//                 .message("Booking not found with ID: " + menuId)
//                 .build();
//         }
//     }
//     private MenuResponse mapToBookingResponse(Menu existingBooking) {
//         // TODO Auto-generated method stub
//         throw new UnsupportedOperationException("Unimplemented method 'mapToBookingResponse'");
//     }



// private MenuResponse mapToMenuResponse(Menu existingMenu) {
//     // TODO Auto-generated method stub
//     throw new UnsupportedOperationException("Unimplemented method 'mapToMenuResponse'");
// }

// @Override
// public BasicResponse<MenuResponse> updateMenu(String menuId, MenuRequest menuRequest) {
//     // TODO Auto-generated method stub
//     Menu existingMenu = menuRepository.findById(menuId)
//     .orElseThrow(() -> new RuntimeException("Menu not found with id: " + menuId));

// // Update the menu details
// existingMenu.setMenuName(menuRequest.getMenuName());
// existingMenu.setFoods(menuRequest.getFoods());
// existingMenu.setTypesOfFoods(menuRequest.getTypeofFood());

// // Save the updated menu to the repository
// menuRepository.save(existingMenu);

// // Construct and return the response
// MenuResponse updatedMenuResponse = mapToMenuResponse(existingMenu);
// return BasicResponse.<MenuResponse>builder()
//     .message("Menu updated successfully")
//     .data(List.of(updatedMenuResponse)) // Pass a list containing a single updated menu response
//     .build();
// }
// }