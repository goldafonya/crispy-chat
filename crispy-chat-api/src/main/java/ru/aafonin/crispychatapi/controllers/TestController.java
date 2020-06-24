package ru.aafonin.crispychatapi.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController()
public class TestController {

    @GetMapping("/test/123")
    public String test() {
        return "response /test/123";
    }
}
