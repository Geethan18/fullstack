package com.eventmanagement.event.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MenuRequest {
    private String menuId;
    private String menuName;
    private List<String> foods;
    private String typeofFood;

}
