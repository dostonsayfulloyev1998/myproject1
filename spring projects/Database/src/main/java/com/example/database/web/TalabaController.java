package com.example.database.web;

import com.example.database.model.Talaba;
import com.example.database.repository.TalabaRepository;
import com.example.database.service.TalabaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class TalabaController {

    @Autowired
    private TalabaRepository repository;


    @GetMapping("/")
    public ResponseEntity getALl(){
        List<Talaba> talabalar;

        talabalar = repository.getAll(2);

        return ResponseEntity.ok(talabalar);
    }

    @PostMapping("/talaba")
    public ResponseEntity addTalaba(@RequestBody Talaba talaba){
         return ResponseEntity.ok("");
    }

    @PutMapping("/talaba")
    public ResponseEntity update(@RequestBody Talaba talaba){
        return ResponseEntity.ok("");
    }

    @DeleteMapping("/talaba/{id}")
    public ResponseEntity delete(@PathVariable int id){

       int i= repository.deleted(id);

        return ResponseEntity.ok(i);
    }
}

