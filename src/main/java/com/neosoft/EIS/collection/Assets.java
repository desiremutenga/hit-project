package com.neosoft.EIS.collection;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.DBRef;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Assets {
    private int totalComputers;
    private int totalClassrooms;

    private Boolean hasLibrary;
    private int totalLabs;
    private int noOfVehicles;
    private int totalBooks;
    private Furniture furniture;
}
