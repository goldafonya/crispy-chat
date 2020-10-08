package ru.aafonin.crispychatac.models;

import lombok.Data;

@Data
public class OutputMessage {
    String time;
    String from;
    String text;

    public OutputMessage(String from, String text, String time) {
        this.time = time;
        this.from = from;
        this.text = text;
    }
}
