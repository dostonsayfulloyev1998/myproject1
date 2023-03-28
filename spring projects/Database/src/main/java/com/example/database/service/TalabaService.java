package com.example.database.service;

import com.example.database.model.Talaba;
import com.example.database.repository.TalabaRepository;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class TalabaService {

    private TalabaRepository repository;

    public TalabaService(TalabaRepository repository) {
        this.repository = repository;
    }

    public List<Talaba> getData(){
        return repository.getAll(1);
    }

    public List<Talaba> store(Talaba talaba){
        return Collections.singletonList(repository.save(talaba));
    }

    public List<Talaba> update(Talaba talaba){
        return Collections.singletonList(repository.save(talaba));
    }


}
