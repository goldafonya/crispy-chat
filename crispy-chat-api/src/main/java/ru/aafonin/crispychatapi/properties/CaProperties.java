package ru.aafonin.crispychatapi.properties;

import lombok.Data;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

@Configuration
@PropertySource("classpath:application.properties")
@Data
public class CaProperties {

//    @Value("${crispy-chat-ca.check-url}")
//    public String checkUrl;
}
