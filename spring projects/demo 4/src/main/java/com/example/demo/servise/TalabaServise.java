package com.example.demo.servise;

import com.example.demo.domain.Talaba;
import com.example.demo.repository.TalabaRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TalabaServise {
    private final TalabaRepository talabaRepository;

    public TalabaServise(TalabaRepository talabaRepository) {
        this.talabaRepository = talabaRepository;
    }

    public Talaba save(Talaba talaba){
        return talabaRepository.save(talaba);
    }

    public List<Talaba>  findAll(){
        return talabaRepository.findAll();
    }


    public Talaba findById(Long id){
        return talabaRepository.findById(id).get();
    }

    public List<Talaba> findByName(String name){
        return talabaRepository.findByName(name);
    }

    public void delete(Long id) {
      Talaba talaba = talabaRepository.getOne(id);

      talabaRepository.delete(talaba);
    }
}
