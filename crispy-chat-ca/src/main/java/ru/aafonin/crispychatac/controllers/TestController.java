package ru.aafonin.crispychatac.controllers;

import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class TestController {

    @Secured("ROLE_USER1")
    @GetMapping(path = "/test/1")
    public Map test1() {
        Map<String, String> map = new HashMap<>();
        map.put("test", "1");
        return map;
    }

    @GetMapping(path = "/test/2")
    public Map test2() {
        Map<String, String> map = new HashMap<>();
        map.put("test", "2");
        return map;
    }

}
