package ru.aafonin.crispychatca.security;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.config.annotation.configurers.ClientDetailsServiceConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configuration.AuthorizationServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerEndpointsConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerSecurityConfigurer;
import org.springframework.stereotype.Component;

@Component
public class CustomAuthorizationServerConfigurer extends AuthorizationServerConfigurerAdapter {

    AuthenticationManager authenticationManager;
    PasswordEncoder passwordEncoder;

    public CustomAuthorizationServerConfigurer(AuthenticationConfiguration authenticationConfiguration, PasswordEncoder passwordEncoder) throws Exception {
        this.authenticationManager = authenticationConfiguration.getAuthenticationManager();
        this.passwordEncoder = passwordEncoder;
    }

    public void configure(ClientDetailsServiceConfigurer clients) throws Exception {
        clients
                .inMemory()
                .withClient("first-client")
                .secret(passwordEncoder.encode("noonewilleverguess"))
                .scopes("any")
                .authorizedGrantTypes("refresh_token", "password")
                .accessTokenValiditySeconds(40)
                .refreshTokenValiditySeconds(2000);
    }

    @Override
    public void configure(AuthorizationServerEndpointsConfigurer endpoints) {
        endpoints.authenticationManager(authenticationManager);
    }

    @Override
    public void configure(AuthorizationServerSecurityConfigurer oauthServer) throws Exception {
        oauthServer.tokenKeyAccess("permitAll()")
                .checkTokenAccess("isAuthenticated()");
    }
}
