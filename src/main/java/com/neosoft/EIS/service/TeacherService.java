package com.neosoft.EIS.service;

import com.neosoft.EIS.collection.Teacher;
import com.neosoft.EIS.repository.TeacherRepository;
import org.bson.Document;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.*;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeacherService {

    final private TeacherRepository teacherRepository;
    final  private MongoTemplate mongoTemplate;


    public TeacherService(TeacherRepository teacherRepository, MongoTemplate mongoTemplate) {
        this.teacherRepository = teacherRepository;
        this.mongoTemplate = mongoTemplate;
    }

    public Teacher saveTeacher(Teacher teacher) {
        return teacherRepository.save(teacher);
    }

    public Teacher searchTeacherWithEcNumber(String ecNumber) {
        return  teacherRepository.findBy_idIgnoreCase(ecNumber);
    }

    public List<Teacher> searchTeacherByQualificationType(String type) {
        return teacherRepository.findByQualificationsType(type);
    }

    public List<Teacher> searchTeacherBySubjectTaught(String subjectTaught) {
        return teacherRepository.findBySubjectTaughtSubjectIgnoreCase(subjectTaught);
    }

    public List<Teacher> getTeacherBySchool(String currentSchool) {
        return  teacherRepository.findByCurrentSchoolSchoolNameIgnoreCase(currentSchool);
    }

    public List<Teacher> getAllTeachers() {
        return teacherRepository.findAll();
    }

    public List<Document> getTeachersBySchool() {
        UnwindOperation unwindOperation = Aggregation.unwind("currentSchool");
        GroupOperation groupOperation = Aggregation.group("currentSchool._id").count().as("count");
        ProjectionOperation projectionOperation = Aggregation.project()
                .andExpression("_id").as("id")
                .andExpression("count").as("count")
                .andExclude("_id");
        SortOperation sortOperation = Aggregation.sort(Sort.Direction.ASC,"id");
        Aggregation aggregation = Aggregation.newAggregation(unwindOperation,groupOperation,projectionOperation,sortOperation);
        List<Document> result = mongoTemplate.aggregate(aggregation,Teacher.class,Document.class).getMappedResults();
        return  result;
    }
}
