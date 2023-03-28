package com.example.web;

import com.example.model.Student;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
public class StudentController{
    @GetMapping("/students")
    public ResponseEntity allTalaba(){

     return ResponseEntity.ok("sdfdsfds");
    }


    @GetMapping("/student/{id}/{name}")
    public ResponseEntity getStudent(@PathVariable long id,@PathVariable String name){

        return ResponseEntity.ok(id);
    }

    @GetMapping("/any-student")
    public ResponseEntity getAllStudent(@RequestParam long id, @RequestParam String name, @RequestParam String surname){
        ArrayList<Student> list = new ArrayList<>();
        list.add(new Student(id,name,surname));

        return ResponseEntity.ok(list);
    }

    @PostMapping("/add-student")
    public ResponseEntity postData(@RequestBody Student student){
        ArrayList<Student> list = new ArrayList<>();
        list.add(student);
        return ResponseEntity.ok("");
    }

    @PostMapping("/students")
    public ResponseEntity postData(){

        return ResponseEntity.ok("malumot qo`shildi");
    }

    @PutMapping("/edit-data")
    public ResponseEntity editData(){

        return ResponseEntity.ok("malumot almashdi");
    }

    @DeleteMapping("/deleting")
    public ResponseEntity delete(){

        return ResponseEntity.ok("malumot o`chirildi");
    }



}
