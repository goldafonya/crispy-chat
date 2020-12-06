package ru.aafonin.crispychatac.configs;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.ChannelRegistration;
import org.springframework.messaging.support.ChannelInterceptorAdapter;
import org.springframework.security.config.annotation.web.messaging.MessageSecurityMetadataSourceRegistry;
import org.springframework.security.config.annotation.web.socket.AbstractSecurityWebSocketMessageBrokerConfigurer;

@Configuration
public class WebSocketSecurityConfig
        extends AbstractSecurityWebSocketMessageBrokerConfigurer {

    protected void configureInbound(MessageSecurityMetadataSourceRegistry messages) {
        messages
                .simpDestMatchers("/**").authenticated();
    }

    protected void customizeClientInboundChannel(ChannelRegistration registration) {
        registration.interceptors(new TopicSubscriptionInterceptor());
    }

    @Override
    protected boolean sameOriginDisabled() {
        return true;
    }
}
