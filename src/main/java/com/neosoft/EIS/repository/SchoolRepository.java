package com.neosoft.EIS.repository;

import com.neosoft.EIS.collection.DTO.SchoolDto;
import com.neosoft.EIS.collection.School;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SchoolRepository extends MongoRepository<School,String> {
    public List<School> findBySchoolType(String schoolType);
    public List<School> findByProvince(String province);
    public List<School> findByDistrict(String district);
    public List<School> findBySchoolNameIgnoreCase(String name);
    @Query(value = "{}", fields = "{ 'co_ordinates' : 1}")
    public List<SchoolDto> findSchoolsCoordinates();
}
