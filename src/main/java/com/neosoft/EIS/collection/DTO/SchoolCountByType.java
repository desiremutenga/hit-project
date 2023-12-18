package com.neosoft.EIS.collection.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SchoolCountByType {
    private String _id;
    private String province;
    private String schoolType;
    private long count;
}
