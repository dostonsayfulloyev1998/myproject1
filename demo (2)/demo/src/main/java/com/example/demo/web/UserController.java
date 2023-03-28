package com.example.demo.web;

import com.example.demo.model.User;
import com.example.demo.repostory.UserRepostory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@RestController
public class UserController {
   @Autowired
    private UserRepostory repostory;


   @GetMapping("/")
    public ResponseEntity allData(){
       List<User> users = repostory.findAll();


       return ResponseEntity.ok(users);
   }

   @PostMapping("/user")
   public ResponseEntity save(@RequestBody User user){
       List<User> list  = Collections.singletonList(repostory.save(user));

       return ResponseEntity.ok(list);
   }

   @GetMapping("/user/{name}")
    public ResponseEntity showId(@PathVariable String name){
        long id = repostory.selectId(name);

        return ResponseEntity.ok(id);
   }

    @GetMapping("/user")
    public ResponseEntity allUser(){
      List<User> users  = repostory.getAllData(1,4);

        return ResponseEntity.ok(users);
    }


    @PutMapping("/user")
    public ResponseEntity update(@RequestBody User user){
        List<User> users  = Collections.singletonList(repostory.save(user));
        return ResponseEntity.ok(users);
    }


}
//200  // 400  // 500