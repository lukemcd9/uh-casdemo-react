package edu.hawaii.its.casdemo.repository;

import edu.hawaii.its.casdemo.type.Campus;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface CampusRepository extends JpaRepository<Campus, Integer> {

    @Override
    Optional<Campus> findById(Integer id);

    List<Campus> findAllByActual(String actual, Sort sort);

}
