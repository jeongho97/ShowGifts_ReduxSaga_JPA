package com.posco.back.user.service;

import com.posco.back.user.model.UserDto;
import com.posco.back.user.repository.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserMapper userMapper;

    @Override
    public List<UserDto> findUser() {
        return userMapper.getUser();
    }

    @Override
    public UserDto serviceLogin(UserDto userDto) {
        return userMapper.getUserByUserIdAndPassword(userDto);
    }
}
