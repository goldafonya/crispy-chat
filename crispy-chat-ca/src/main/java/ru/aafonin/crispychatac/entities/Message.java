package ru.aafonin.crispychatac.entities;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "messages")
@Data
public class Message implements Serializable {

    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid2")
    String id;

    String time;
    String author;
    String message;

    public Message(String author, String message, String time) {
        this.author = author;
        this.message = message;
        this.time = time;
    }

    public Message() {

    }
}
