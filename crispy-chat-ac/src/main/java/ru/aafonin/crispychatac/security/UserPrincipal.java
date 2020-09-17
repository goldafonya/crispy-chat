package ru.aafonin.crispychatac.security;

import lombok.SneakyThrows;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import ru.aafonin.crispychatac.entities.User;

import javax.naming.NamingException;
import java.util.*;

public class UserPrincipal implements UserDetails {
    private User user;

    public UserPrincipal(User user) {
        this.user = user;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        ArrayList<GrantedAuthority> roles = new ArrayList<GrantedAuthority>();
        roles.add(new RoleAuth(this.user.getRole()));
        return roles;
    }

    @Override
    public String getPassword() {
        return this.user.getPassword();
    }

    @Override
    public String getUsername() {
        return this.user.getUsername();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public static class RoleAuth implements GrantedAuthority {
        public String role;


        public RoleAuth(String role) {
            this.role = role;
        }

        public String getRole() {
            return String.format("ROLE_%s", role.toUpperCase());
        }

        @Override
        public String getAuthority() {
            return getRole();
        }
    }
}
