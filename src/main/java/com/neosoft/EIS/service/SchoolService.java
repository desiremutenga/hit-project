package com.neosoft.EIS.service;

import com.neosoft.EIS.collection.DTO.SchoolDto;
import com.neosoft.EIS.collection.School;
import com.neosoft.EIS.repository.SchoolRepository;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SchoolService {
    private final SchoolRepository schoolRepository;
    final private MongoTemplate mongoTemplate;
    public SchoolService(SchoolRepository schoolRepository,MongoTemplate mongoTemplate){
        this.schoolRepository = schoolRepository;
        this.mongoTemplate =mongoTemplate;
    }
    public List<School> getAllSchools() {
        School school = new School();
        return schoolRepository.findAll();
    }

    public School saveSchool(School school) {
        return schoolRepository.save(school);
    }

    public List<School> getSpecificSchools(String schoolType) {
        return schoolRepository.findBySchoolType(schoolType);
    }

    public List<School> findSchoolByProvince(String province) {
        return schoolRepository.findByProvince(province);
    }

    public List<School> findSchoolByDistrict(String district) {
        return schoolRepository.findByDistrict(district);
    }

    public List<School> findSchoolById(String id) {
        return schoolRepository.findBy_idIgnoreCase(id);
    }

    public List<SchoolDto> findAllSchoolsCoordinates() {
        return schoolRepository.findSchoolsCoordinates();
    }

    public List<SchoolDto> findAllProvinceMappedSchools(String province) {
        return schoolRepository.findProvinceSchoolsCoordinates(province);
    }
}
