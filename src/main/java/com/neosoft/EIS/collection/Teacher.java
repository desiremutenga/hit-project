package com.neosoft.EIS.collection;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
import java.util.List;

@Data
@Document
@AllArgsConstructor
@NoArgsConstructor
public class Teacher {
    @Id
    private String _id;//ec number
    private String firstName;
    private String lastName;
    private char gender;
    private List<Subject> subjectTaught;
    private List<Qualifications> qualifications;
    private School currentSchool;
    private Boolean inService;
    private int enrollmentYear;
    private LocalDate DOB; // populate age on the front end
    private byte[] photo;



}
