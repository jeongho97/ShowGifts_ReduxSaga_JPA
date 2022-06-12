package com.posco.back.user.controller;

import com.posco.back.user.model.UserDto;
import com.posco.back.user.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("user")
public class UserController {
    @Autowired
    UserServiceImpl userService;
    @Autowired
    UserDto userDto;

    @GetMapping("/")
    public List<UserDto> getUser(){
        return userService.findUser();
    }
}
