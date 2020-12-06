package ru.aafonin.crispychatac.configs;

import lombok.extern.slf4j.Slf4j;
import org.springframework.context.event.EventListener;
import org.springframework.messaging.support.GenericMessage;
import org.springframework.session.web.socket.events.SessionConnectEvent;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.messaging.SessionConnectedEvent;
import org.springframework.web.socket.messaging.SessionDisconnectEvent;
import org.springframework.web.socket.messaging.SessionSubscribeEvent;
import org.springframework.web.socket.messaging.SessionUnsubscribeEvent;

@Component
@Slf4j
public class WebSocketEventListener {

    @EventListener
    public void handleSubscribeEvent(SessionSubscribeEvent event) {
//        GenericMessage message = (GenericMessage) event.getMessage();
//        String simpDestination = (String) message.getHeaders().get("simpDestination");
//
//        if (simpDestination.startsWith("/topic/group/1")) {
//            // do stuff
//        }
        log.info("Subscription event: " + event);
    }

    @EventListener
    public void handleUnsubscribeEvent(SessionUnsubscribeEvent event) {
        log.info("SessionUnsubscribeEvent event: " + event);
    }
    @EventListener
    public void handleConnectEvent(SessionConnectEvent event) {
        log.info("SessionConnectEvent event: " + event);
    }
    @EventListener
    public void handleConnectedEvent(SessionConnectedEvent event) {
        log.info("SessionConnectedEvent event: " + event);
    }
    @EventListener
    public void handleDisconnectEvent(SessionDisconnectEvent event) {
        log.info("SessionDisconnectEvent event: " + event);
    }
}
