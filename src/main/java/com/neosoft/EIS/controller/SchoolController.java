package com.neosoft.EIS.controller;

import com.neosoft.EIS.collection.DTO.SchoolCountByType;
import com.neosoft.EIS.collection.DTO.SchoolDto;
import com.neosoft.EIS.collection.School;
import com.neosoft.EIS.service.SchoolService;
import org.bson.Document;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/eis")
@CrossOrigin
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
    public List<School> findSchoolById(@RequestParam String _id){ // display schools as you type
        return schoolService.findSchoolById(_id);
    }
    @GetMapping("/schoolCoordinates") //display all schools in Zimbabwe on the map
    public List<SchoolDto> findSchoolsByCoordinates(){
        return  schoolService.findAllSchoolsCoordinates();
    }
    @GetMapping("/searchedRegexSchools")
    public List<School>findSearchedSchoolRegex(@RequestParam String schoolName){
        return  schoolService.findSearchedSchoolRegex(schoolName);
    }
    @GetMapping("/mappedSchoolsInProvince") // when province from drop box is chosen all schools are displayed
    public List<SchoolDto> findSchoolsByInProvinceCoordinates(@RequestParam String province){
        return  schoolService.findAllProvinceMappedSchools(province);
    }
    @GetMapping("/total")
    public List<Document> getTotal(){
        return schoolService.getSchoolTotal();
    }
    @GetMapping("/schoolTypeByProvince")
    public List<School> getAllSchoolTypeInProvince(@RequestParam String province,@RequestParam String schoolType){
            return schoolService.getAllSchoolTypeInProvince(province,schoolType);
    }
    @GetMapping("/sxool")
    public List<SchoolCountByType> groupedProvinceSchools(@RequestParam String province){
        return  schoolService.countSchoolsByTypeAndProvince(province);
    }
    @GetMapping("/getSchoolsWithTheSameRegexExpression")
    public List<School> getSchoolsStartsWith(@RequestParam String regex){
        return schoolService.getSchoolsStartWithTheSame(regex);
    }
}
