package com.neosoft.EIS.repository;

import com.neosoft.EIS.collection.School;
import org.springframework.data.mongodb.core.geo.GeoJsonPoint;
import org.springframework.data.mongodb.repository.Aggregation;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.sql.Array;
import java.util.List;

@Repository
public interface SchoolRepository extends MongoRepository<School,String> {
    public List<School> findBySchoolType(String schoolType);
    public List<School> findByProvince(String province);
    public List<School> findByDistrict(String district);
    public List<School> findBySchoolNameIgnoreCase(String name);
    @Aggregation(pipeline = {
            "{$project: { 'coordinates': 1 }}"
    })
     List<GeoJsonPoint> findSchoolsCoordinates();
}
