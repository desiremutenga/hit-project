package com.neosoft.EIS.service;

import com.neosoft.EIS.collection.Headmaster;
import com.neosoft.EIS.repository.HeadmasterRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HeadmasterService {

final private HeadmasterRepository headmasterRepository;

public HeadmasterService(HeadmasterRepository headmasterRepository) {
        this.headmasterRepository = headmasterRepository;
    }
public Headmaster saveHeadmaster(Headmaster headmaster){
        return headmasterRepository.save(headmaster);
    }

    public List<Headmaster> getHeadmasters() {
        return headmasterRepository.findAll();
    }
}
