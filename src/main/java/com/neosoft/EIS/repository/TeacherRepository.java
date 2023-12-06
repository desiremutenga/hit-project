package com.neosoft.EIS.repository;

import com.neosoft.EIS.collection.School;
import com.neosoft.EIS.collection.Teacher;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TeacherRepository extends MongoRepository<Teacher, String> {
    public Teacher findBy_idIgnoreCase(String ec_number);
    public List<Teacher> findByQualificationsType(String type);
    public List<Teacher>findBySubjectTaughtSubjectIgnoreCase(String subject);

}
