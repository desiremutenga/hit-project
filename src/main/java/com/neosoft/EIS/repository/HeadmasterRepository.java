package com.neosoft.EIS.repository;

import com.neosoft.EIS.collection.Headmaster;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HeadmasterRepository extends MongoRepository<Headmaster,String> {
}
