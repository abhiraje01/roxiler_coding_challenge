package com.storerating.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.storerating.entity.Rating;
import com.storerating.service.RatingService;

@RestController
@RequestMapping("/owner")
public class StoreOwnerController {

    @Autowired
    private RatingService ratingService;

    @GetMapping("/ratings")
    public List<Rating> getAllRatings() {
        return ratingService.getAllRatings();
    }
}