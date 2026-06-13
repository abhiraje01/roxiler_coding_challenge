package com.storerating.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.storerating.entity.Rating;
import com.storerating.entity.Store;
import com.storerating.entity.User;

public interface RatingRepository extends JpaRepository<Rating, Long> {

    Optional<Rating> findByUserAndStore(User user, Store store);

    List<Rating> findByStore(Store store);

    List<Rating> findByUser(User user);

    long countByStore(Store store);
}