package com.neosoft.EIS.service;

import com.neosoft.EIS.collection.School;
import com.neosoft.EIS.repository.SchoolRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.geo.GeoJsonPoint;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SchoolService {
    private final SchoolRepository schoolRepository;
    public SchoolService(SchoolRepository schoolRepository){
        this.schoolRepository = schoolRepository;
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

    public List<School> findSchoolByName(String name) {
        return schoolRepository.findBySchoolNameIgnoreCase(name);
    }

    public List<GeoJsonPoint> findAllSchoolsCoordinates() {
        return schoolRepository.findSchoolsCoordinates();
    }
}
