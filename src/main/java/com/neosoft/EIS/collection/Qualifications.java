package com.neosoft.EIS.collection;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Qualifications {
    private String type;// degree or diploma
    private String name;
    private String institute;
    private int year;

}
