package com.neosoft.EIS.controller;

import com.neosoft.EIS.collection.Headmaster;
import com.neosoft.EIS.service.HeadmasterService;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/eis")
public class HeadmasterController {

    final private HeadmasterService headmasterService;
    public HeadmasterController(HeadmasterService headmasterService) {
        this.headmasterService = headmasterService;
    }

    @PostMapping("/headmasters")
    public Headmaster saveHeadmasters(@RequestBody Headmaster headmaster, @RequestParam MultipartFile photo){
        return headmasterService.saveHeadmaster(headmaster,photo);
    }
    @GetMapping("/headmasters")
    public List<Headmaster> getHeadmasters(){
        return headmasterService.getHeadmasters();
    }
}
