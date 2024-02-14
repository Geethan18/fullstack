package com.eventmanagement.event.service;

import com.eventmanagement.event.dto.request.BookingRequest;
import com.eventmanagement.event.dto.request.MenuRequest;
import com.eventmanagement.event.response.BasicResponse;
import com.eventmanagement.event.response.MenuResponse;


public interface MenuService {
    BasicResponse<MenuResponse> getAllMenu();
     BasicResponse<MenuResponse> createMenu(MenuRequest menuRequest);
     BasicResponse<MenuResponse>deleteMenu(String menuId);
     BasicResponse<MenuResponse> updateMenu(String menuId, MenuRequest bookingRequest);
}
