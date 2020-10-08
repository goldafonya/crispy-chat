package ru.aafonin.crispychatac.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.aafonin.crispychatac.entities.Message;

@Repository
public interface MessageRepository extends JpaRepository<Message, String> {

}
