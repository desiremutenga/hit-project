package com.neosoft.EIS.service;

import com.neosoft.EIS.collection.Teacher;
import com.neosoft.EIS.repository.TeacherRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeacherService {

    final private TeacherRepository teacherRepository;

    public TeacherService(TeacherRepository teacherRepository) {
        this.teacherRepository = teacherRepository;
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
}
