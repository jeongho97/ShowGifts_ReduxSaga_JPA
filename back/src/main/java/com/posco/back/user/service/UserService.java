package com.posco.back.user.service;

import com.posco.back.user.model.UserDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {
    List<UserDto> findUser();
}
