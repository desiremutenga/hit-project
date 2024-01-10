package com.neosoft.EIS.collection.DTO;

import org.springframework.data.mongodb.core.geo.GeoJsonPoint;

public interface SchoolDto {

        String get_id();
        String getSchoolName();
        GeoJsonPoint getCo_ordinates();
        String getSchoolType();
        String getProvince();
        String getDistrict();
        String getAssets();
        // Other getter methods...
    }


