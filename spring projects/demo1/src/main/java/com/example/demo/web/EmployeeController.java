package com.example.demo.web;

import com.example.demo.model.Employee;
import com.example.demo.servise.EmployeeServise;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api")
public class EmployeeController {

    private EmployeeServise servise;

    public EmployeeController(EmployeeServise servise) {
        this.servise = servise;
    }

    @GetMapping("/employee")
    public ResponseEntity getEmployee(){
        List<Employee> list = servise.all_data();


        return ResponseEntity.ok(list);
     }

//     @GetMapping("/employee/{id}")
//    public ResponseEntity getByIdEmployee(@PathVariable Long id){
//
//     }
//
//     @PostMapping("/employee")
//    public ResponseEntity saveEmployee(@RequestBody Employee employee){
//
//
//     }
//
//     @PutMapping("/employee")
//    public ResponseEntity updateEmployee(@RequestBody Employee employee){
//
//     }
//
//     @DeleteMapping("/employee/{id}")
//     public ResponseEntity deleteEmployee(@PathVariable Long id){
//
//
//     }


}
