package com.neosoft.EIS.collection.DTO;

import org.springframework.data.mongodb.core.geo.GeoJsonPoint;

public interface SchoolDto {

        String get_id();
        GeoJsonPoint getCo_ordinates();
        String getSchoolType();
        String getProvince();
        String getDistrict();
        // Other getter methods...
    }


