package ru.aafonin.crispychatac.security;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import ru.aafonin.crispychatac.entities.User;
import ru.aafonin.crispychatac.repositories.UserRepository;

@Component
@AllArgsConstructor
@Slf4j
public class AuthenticationProviderCustom implements AuthenticationProvider {
    PasswordEncoder passwordEncoder;
    UserRepository userRepository;


    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        try {
            String username = authentication.getName();
            String password = authentication.getCredentials().toString();
            User user = userRepository.findByUsername(username);
            if (user == null) {
                user = new User();
                user.setUsername(username);
                user.setPassword(passwordEncoder.encode(password));
                user.setRole("user");
                userRepository.save(user);
            }

            if (passwordEncoder.matches(password, user.getPassword())) {

                UserPrincipal userPrincipal = new UserPrincipal(user);

                return new UsernamePasswordAuthenticationToken(username, password, userPrincipal.getAuthorities());
            } else {
                throw new BadCredentialsException("Неправильный логин или пароль");
            }
        } catch (NullPointerException e) {
            return null;
        }
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return authentication.equals(UsernamePasswordAuthenticationToken.class);
    }
}
