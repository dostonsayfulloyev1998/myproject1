package com.example.demo;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
public class StudentController {

    @GetMapping("/student")

    public ResponseEntity getData(){
        ArrayList<Student> list = new ArrayList<>();
        list.add(new Student(1,"ALi","Valiyev"));
        list.add(new Student(2,"ALi","Valiyev"));
        list.add(new Student(3,"ALi","Valiyev"));
        list.add(new Student(4,"ALi","Valiyev"));
        list.add(new Student(5,"ALi","Valiyev"));

        return ResponseEntity.ok(list);
    }

    @GetMapping("/student/{id}")
    public ResponseEntity getById(@PathVariable int id){
        ArrayList<Student> list = new ArrayList<>();
        list.add(new Student(1,"ALi","Valiyev"));
        list.add(new Student(2,"ALi","Valiyev"));
        list.add(new Student(3,"ALi","Valiyev"));
        list.add(new Student(4,"ALi","Valiyev"));
        list.add(new Student(5,"ALi","Valiyev"));

        for(Student st : list){
            if (st.getId()==id){
                return ResponseEntity.ok(st);
            }
        }

        return ResponseEntity.ok("");
    }

    @GetMapping("/student/{name}/{surname}")
    public ResponseEntity getName(@PathVariable String name, @PathVariable String surname){

        return ResponseEntity.ok(name+" "+surname);
    }

    @GetMapping("/students")
    public ResponseEntity data(@RequestParam int id,
       @RequestParam String name, @RequestParam String surname){

        ArrayList<Student> list = new ArrayList<>();
        list.add(new Student(id,name,surname));
        return ResponseEntity.ok(list);
    }

    @PostMapping("/student")
    public ResponseEntity postData(@RequestBody Student student){
        return ResponseEntity.ok(student);
    }

    @PutMapping("student/{id}")
    public ResponseEntity putData(@PathVariable int id,@RequestBody Student student){

        return ResponseEntity.ok("updated");
    }

    @DeleteMapping("student/{id}")
    public ResponseEntity deleteData(@PathVariable int id){
        return ResponseEntity.ok(id);
    }



}
