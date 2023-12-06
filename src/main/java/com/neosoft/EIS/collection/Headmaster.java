package com.neosoft.EIS.collection;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

import java.time.LocalDate;
import java.util.List;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Headmaster {
    @Id
    private String _id;
    private String firstName;
    private String lastName;
    private char gender;
    private List<Qualifications> qualifications;
    private Boolean inService;
    private int enrollmentYear;
    private LocalDate DOB;// populate age on the front end
    private String photo;
}
