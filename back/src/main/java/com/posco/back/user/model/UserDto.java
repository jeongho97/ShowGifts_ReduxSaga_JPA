package com.posco.back.user.model;

import lombok.Data;
import org.springframework.stereotype.Component;

@Data
@Component
public class UserDto {
    private Integer id;
    private String userId;
    private String name;
    private String img;
    private Integer pcnt;


}
