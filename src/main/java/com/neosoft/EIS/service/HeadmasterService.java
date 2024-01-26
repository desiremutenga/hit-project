package com.neosoft.EIS.service;

import com.neosoft.EIS.collection.Headmaster;
import com.neosoft.EIS.repository.HeadmasterRepository;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
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
        Pageable pageable = PageRequest.of(0,3,Sort.by("firstName").ascending()
                .and(Sort.by("lastName")));
        return headmasterRepository.findAll(pageable).getContent();
    }

    public Headmaster getHeadmasterById(String id) {
    return headmasterRepository.findById(id).get();
    }

    public List<Headmaster> findHeadmasterStartsWithEcNumber(String ecNumber) {
    return  headmasterRepository.findBy_idStartsWithIgnoreCase(ecNumber);
    }
}
