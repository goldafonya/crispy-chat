package ru.aafonin.crispychatac.controllers;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import ru.aafonin.crispychatac.entities.Message;
import ru.aafonin.crispychatac.models.MessageDto;
import ru.aafonin.crispychatac.repositories.MessageRepository;

import java.security.Principal;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@RestController
public class ChatController {
    MessageRepository messageRepository;

    public ChatController(MessageRepository messageRepository) {
        this.messageRepository = messageRepository;
    }

    @MessageMapping("/channel/chat")
    @SendTo("/topic/messages")
    public Message send(Principal principal, MessageDto messageDto) {
        String time = new SimpleDateFormat("HH:mm").format(new Date());
        Message msg = new Message(principal.getName(), messageDto.getMessage(), time);
        return messageRepository.save(msg);
    }

    @GetMapping("/history")
    public List<Message> historyList() {

        return messageRepository.findAll();
    }
}
