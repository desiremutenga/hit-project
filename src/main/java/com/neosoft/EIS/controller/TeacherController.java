package com.neosoft.EIS.controller;

import com.neosoft.EIS.collection.Teacher;
import com.neosoft.EIS.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/eis")
public class TeacherController {

    final private TeacherService teacherService;
    public TeacherController(TeacherService teacherService){
        this.teacherService =teacherService;
    }
    @PostMapping("/teacher-save")
    public Teacher saveTeacher(@RequestBody Teacher teacher){
        return  teacherService.saveTeacher(teacher);
    }
    @GetMapping("/searchTeachers")
    public Teacher getTeacherByEcNumber(@RequestParam("_id") String ecNumber){// display schools as you type
        return  teacherService.searchTeacherWithEcNumber(ecNumber);

    }
    @GetMapping("/teacherQualification")
    public List<Teacher> getTeacherByQualificationType(@RequestParam("qualifications") String qualificationsType){ // search when u click drop box
        return  teacherService.searchTeacherByQualificationType(qualificationsType);

    }

    @GetMapping("/subjectTaught")
    public List<Teacher> getTeacherBySubjectTaught(@RequestParam String subjectTaught){ // search when u click drop box
        System.out.println(subjectTaught);
        return  teacherService.searchTeacherBySubjectTaught(subjectTaught);

    }

}
