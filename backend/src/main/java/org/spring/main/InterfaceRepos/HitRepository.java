package org.spring.main.InterfaceRepos;

import org.spring.main.Model.Hit;
import org.spring.main.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.ArrayList;
import java.util.Optional;

public interface HitRepository extends JpaRepository<Hit, Long> {

    ArrayList<Optional<Hit>> findAllByUserOrderByTimeOfCreatedDesc(User user);
}
