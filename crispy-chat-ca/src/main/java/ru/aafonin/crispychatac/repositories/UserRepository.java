package ru.aafonin.crispychatac.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.aafonin.crispychatac.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, String> {

    public User findByUsername(String username);
}
