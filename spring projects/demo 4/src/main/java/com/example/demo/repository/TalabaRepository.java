package com.example.demo.repository;

import com.example.demo.domain.Talaba;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TalabaRepository extends JpaRepository<Talaba,Long> {
    List<Talaba> findByName(String name);
}

