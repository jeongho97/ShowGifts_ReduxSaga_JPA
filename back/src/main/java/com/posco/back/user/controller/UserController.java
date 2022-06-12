package com.posco.back.user.controller;

import com.posco.back.aspect.TokenRequired;
import com.posco.back.config.SecurityService;
import com.posco.back.user.model.UserDto;
import com.posco.back.user.service.UserServiceImpl;
import io.swagger.v3.oas.annotations.Operation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("user")
@Slf4j
@TokenRequired
public class UserController {
    @Autowired
    UserServiceImpl userService;
    @Autowired
    UserDto userDto;
    @Autowired
    SecurityService securityService;

    @GetMapping("/")
    public List<UserDto> getUser(){
        return userService.findUser();
    }
    @PostMapping("/login")
    @Operation(description = "로그인")
    public Map Login(@RequestBody UserDto userDto){
        UserDto loginUser=userService.serviceLogin(userDto);
        String token=securityService.createToken(loginUser.getId().toString());
        Map<String,Object>map=new HashMap<>();
        map.put("token",token);
        map.put("name",loginUser.getName());
        map.put("img",loginUser.getImg());
        map.put("pcnt",loginUser.getPcnt());
        return map;
    }
    @GetMapping("/token")
    public String getToken(){
        ServletRequestAttributes requestAttributes=
                (ServletRequestAttributes) RequestContextHolder.currentRequestAttributes();
        HttpServletRequest request= requestAttributes.getRequest();

        String tokenBearer=request.getHeader("Authorization");
        String subject= securityService.getSubject(tokenBearer);
        return subject;
    }
}
