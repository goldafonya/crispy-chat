package ru.aafonin.crispychatac.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import ru.aafonin.crispychatac.entities.User;
import ru.aafonin.crispychatac.repositories.UserRepository;

import java.security.Principal;
import java.util.List;

@RestController
public class UserController {
    UserRepository userRepository;
    PasswordEncoder passwordEncoder;

    UserController(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    //    @Secured("ROLE_ADMIN")
    @GetMapping("/user/create")
    public List<User> createUser(
            @RequestParam String login,
            @RequestParam String password,
            @RequestParam String role
    ) {
        User user = new User();
        user.setUsername(login);
        user.setPassword(passwordEncoder.encode(password));
        user.setRole(role);

        userRepository.save(user);

        return userRepository.findAll();
    }

    @Secured({"ROLE_USER", "ROLE_ADMIN"})
    @GetMapping("/user/getAll")
    public List<User> getAllUser() {
        return userRepository.findAll();
    }

    @Secured({"ROLE_USER", "ROLE_ADMIN"})
    @GetMapping("/user/getProfile")
    public Principal getProfile(Principal principal) {
        return principal;
    }
}
