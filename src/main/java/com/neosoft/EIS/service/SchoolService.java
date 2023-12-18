package com.neosoft.EIS.service;

import com.neosoft.EIS.collection.DTO.SchoolCountByType;
import com.neosoft.EIS.collection.DTO.SchoolDto;
import com.neosoft.EIS.collection.School;
import com.neosoft.EIS.repository.SchoolRepository;
import org.bson.Document;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.*;
import org.springframework.data.mongodb.core.query.Criteria;
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
    public List<Document> getSchoolTotal(){
        GroupOperation groupOperation = Aggregation.group("schoolType").count().as("count");
        ProjectionOperation projectionOperation = Aggregation.project()
                .andExpression("_id").as("schoolType")
                .andExpression("count").as("count")
                .andExclude("_id");
        SortOperation sortOperation = Aggregation.sort(Sort.Direction.DESC,"schoolType");

        Aggregation aggregation = Aggregation.newAggregation(groupOperation,projectionOperation,sortOperation);

        List<Document> total = mongoTemplate.aggregate(aggregation,School.class,Document.class).getMappedResults();
        return total;
    }

    public List<School> getAllSchoolTypeInProvince(String province,String schoolType) {
       return schoolRepository.getAllSchoolTypeInProvince(province,schoolType);
    }

    public List<SchoolCountByType> countSchoolsByTypeAndProvince(String province) {
            MatchOperation matchOperation = Aggregation.match(Criteria.where("province").is(province));
            GroupOperation groupOperation = Aggregation.group("province","schoolType").count().as("count");
            ProjectionOperation projectionOperation = Aggregation.project()
                .andExpression("province").as("province")
                .andExpression("schoolType").as("schoolType")
                .andExpression("count").as("count")
                .andExclude("_id");

            SortOperation sortOperation = Aggregation.sort(Sort.Direction.DESC,"schoolType");

            Aggregation aggregation = Aggregation.newAggregation(matchOperation, groupOperation,projectionOperation,sortOperation);

            AggregationResults<SchoolCountByType> result =
                    mongoTemplate.aggregate(aggregation, "school", SchoolCountByType.class);

            return result.getMappedResults();

    }
}
