package ru.aafonin.crispychatapi.entities;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import static java.util.UUID.randomUUID;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(generator = "system-uuid")
    @org.hibernate.annotations.GenericGenerator(name = "system-uuid", strategy = "uuid2")
    @Getter
    String id;


    @Getter
    @Setter
    String username;
    @Getter
    @Setter
    String password;
    @Getter
    @Setter
    String email;

    public void setId(String id) {
        if (id == null || id.isEmpty())
            this.id = randomUUID().toString();
        else
            this.id = id;
    }
}
