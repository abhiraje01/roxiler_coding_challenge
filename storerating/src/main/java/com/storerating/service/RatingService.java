package com.storerating.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.storerating.entity.Rating;
import com.storerating.repository.RatingRepository;

@Service
public class RatingService {

    @Autowired
    private RatingRepository ratingRepository;

    public Rating addRating(Rating rating) {
        return ratingRepository.save(rating);
    }

    public List<Rating> getAllRatings() {
        return ratingRepository.findAll();
    }

    public Rating updateRating(Long id, Rating newRating) {

        Rating rating = ratingRepository.findById(id).orElse(null);

        if (rating != null) {
            rating.setRating(newRating.getRating());
            return ratingRepository.save(rating);
        }

        return null;
    }
}