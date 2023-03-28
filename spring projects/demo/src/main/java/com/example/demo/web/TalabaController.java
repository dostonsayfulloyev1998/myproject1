package com.example.demo.web;

import com.example.demo.model.Talaba;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
public class TalabaController {

    @GetMapping("/talabalar")
    public ResponseEntity talabalar(){



        return ResponseEntity.ok(getAllData());
    }

    @GetMapping("/talaba/{id}/{name}/{surname}")
    public ResponseEntity talaba(@PathVariable Long id,@PathVariable String name, @PathVariable String surname){



        return ResponseEntity.ok("");
    }



    @GetMapping("/add-talaba")
    public ResponseEntity getTalaba(@RequestParam Long id, @RequestParam String name, @RequestParam String surname){

        ArrayList<Talaba> list1=new ArrayList<>();
       list1.add(new Talaba(id,name,surname));

          return ResponseEntity.ok(list1);
    }

    @PostMapping("/insert-data")
    public ResponseEntity postData(@RequestBody Talaba talaba){

        return ResponseEntity.ok(talaba);
    }

    private ArrayList<Talaba> getAllData(ArrayList<Talaba> arr){
        ArrayList<Talaba> list = new ArrayList<>();
        list.add(new Talaba(1L,"ALi","valiyev"));
        list.add(new Talaba(1L,"sheraLi","valiyev"));
        list.add(new Talaba(1L,"vali","valiyev"));
        list.add(new Talaba(1L,"ALi","valiyev"));
        list.add(new Talaba(1L,"ALi","valiyev"));

        return list;
    }
}





