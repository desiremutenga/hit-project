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
    public List<School> findBy_idIgnoreCase(String id);
    @Query(value = "{}", fields = "{ 'co_ordinates' : 1, 'schoolType' : 1, 'province' : 1, 'district' : 1}")
    public List<SchoolDto> findSchoolsCoordinates();
    @Query(value = "{'province':?0}", fields = "{ 'co_ordinates' : 1, 'schoolType' : 1, 'province' : 1, 'district' : 1}")
    public List<SchoolDto> findProvinceSchoolsCoordinates(String province);
}
