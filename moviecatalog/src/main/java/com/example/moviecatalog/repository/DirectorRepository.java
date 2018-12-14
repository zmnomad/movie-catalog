package com.example.moviecatalog.repository;

import com.example.moviecatalog.model.Director;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DirectorRepository extends JpaRepository<Director, Long> {
    List<Director> findByNameContainingIgnoreCase(String term);
}
