package com.example.database.repository;

import com.example.database.model.Talaba;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;


@Repository
public interface TalabaRepository extends JpaRepository<Talaba,Long> {


    @Query("delete from Talaba t where t.id = :id")
    int deleted(@Param("id") int id);

    @Query("select t from Talaba t where t.id = ?1")
    List<Talaba> getAll(int id);


}
