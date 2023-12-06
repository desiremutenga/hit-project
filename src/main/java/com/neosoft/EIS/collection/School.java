package com.neosoft.EIS.collection;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.geo.GeoJsonPoint;
import org.springframework.data.mongodb.core.index.GeoSpatialIndexed;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document
@Data
@AllArgsConstructor
@NoArgsConstructor
public class School {
    @Id
    private String _id = "RSP01";
    @GeoSpatialIndexed
    private GeoJsonPoint co_ordinates;
    private String schoolName;
    @DBRef
    private Headmaster headmaster;

    private String schoolType;
    private String province;
    private String district;
    private Assets assets;
    private Students students;

}
