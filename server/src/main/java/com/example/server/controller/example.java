package com.example.server.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/secured")
@RestController
public class example {

    @GetMapping("/get-data")
    public String get(){
        return "SUPER SECURED DATA";
    }

}
