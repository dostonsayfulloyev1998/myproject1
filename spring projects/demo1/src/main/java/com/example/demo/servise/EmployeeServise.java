package com.example.demo.servise;

import com.example.demo.model.Employee;
import com.example.demo.repository.EmployeeRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeServise {

    private EmployeeRepository repository;

    public EmployeeServise(EmployeeRepository repository) {
        this.repository = repository;
    }


    public List<Employee> all_data(){
      List<Employee> list   =  repository.findAll();

      return list;
    }

//    public List<Employee> getById(Long id){
//
//        return  (List<Employee>)repository.findById(id).get();
//    }
//
//    public List<Employee> saveData(Employee employee){
//        List<Employee> list = (List<Employee>) repository.save(employee);
//        return list;
//    }
//
//
//    public List<Employee> updateData(Employee employee){
//        List<Employee> list = (List<Employee>) repository.save(employee);
//        return list;
//    }
//
//    public boolean deleteData(Long id){
//        repository.deleteById(id);
//        return true;
//    }
}
