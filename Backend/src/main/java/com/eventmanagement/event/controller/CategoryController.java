// package com.eventmanagement.event.controller;


// import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;
// import static org.springframework.http.HttpStatus.OK;

// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import com.eventmanagement.event.response.BasicResponse;
// import com.eventmanagement.event.response.CategoryResponse;
// import com.eventmanagement.event.service.CategoryService;
// import com.eventmanagement.event.utils.MyConstant;

// import lombok.RequiredArgsConstructor;

// @RestController
// @RequestMapping(MyConstant.USERS)
// @RequiredArgsConstructor
// public class CategoryController {

//     private final CategoryService categoryService;


//      @GetMapping(MyConstant.CATEGORY)
//         public ResponseEntity<BasicResponse<CategoryResponse>> create() {
//             BasicResponse<CategoryResponse> response = new BasicResponse<>();
//             try {
//                 response = categoryService.getAllCategory();
//                 return new ResponseEntity<>(response, OK);
//             } catch (Exception e) {
//                 response.setMessage("Course :(  !!");
//                 return new ResponseEntity<>(response, EXPECTATION_FAILED);
//             }
//         }

// }