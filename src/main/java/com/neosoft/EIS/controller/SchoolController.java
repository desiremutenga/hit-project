package com.neosoft.EIS.controller;

import com.neosoft.EIS.collection.DTO.SchoolDto;
import com.neosoft.EIS.collection.School;
import com.neosoft.EIS.service.SchoolService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/eis")
public class SchoolController {

   final private SchoolService schoolService;
    public SchoolController(SchoolService schoolService){
        this.schoolService = schoolService;
    }
    @GetMapping("/schools")
    public List<School> getAllSchools(){
        return schoolService.getAllSchools();
    }
    @PostMapping("/saveSchool")
    public School saveSchool(@RequestBody School school){
        return schoolService.saveSchool(school);
    }
    @GetMapping("/schoolType")
    public List<School> getSpecificSchools(@RequestParam String schoolType){
        return schoolService.getSpecificSchools(schoolType);
    }
    @GetMapping("/province")
    public List<School> findSchoolByProvince(@RequestParam String province){
        return schoolService.findSchoolByProvince(province);
    }
    @GetMapping("/district")
    public List<School> findSchoolByDistrict(@RequestParam String district){
        return schoolService.findSchoolByDistrict(district);
    }
    @GetMapping("/school")
    public List<School> findSchoolByName(@RequestParam String schoolName){ // display schools as you type
        return schoolService.findSchoolByName(schoolName);
    }
    @GetMapping("/schoolCoordinates")
    public List<SchoolDto> findSchoolsByCoordinates(){
        return  schoolService.findAllSchoolsCoordinates();
    }
}
