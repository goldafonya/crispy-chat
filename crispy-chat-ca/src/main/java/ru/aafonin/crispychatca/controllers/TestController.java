package ru.aafonin.crispychatca.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController()
public class TestController {

    @RequestMapping("/test/1")
    public String test1() {

        return "Hello from /test/1";
    }

    @RequestMapping("/test/2")
    public String test2() {

        return "Hello from /test/2";
    }
}
