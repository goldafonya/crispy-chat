package ru.aafonin.crispychatapi.controllers;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.aafonin.crispychatapi.entities.User;
import ru.aafonin.crispychatapi.properties.CaProperties;
import ru.aafonin.crispychatapi.repositories.UserRepository;

import java.util.List;

@Slf4j
@RestController()
public class TestController {
    @Autowired
    UserRepository userRepository;
    @Autowired
    CaProperties caProperties;

    @GetMapping("/test/123")
    public List<User> test() {
        log.info("call test() method");
        User user = new User();
        user.setUsername("user1");
        user.setPassword("password2");
        user.setEmail("email@email.ru");
        userRepository.save(user);

        return userRepository.findAll();
    }
}
