package com.storerating.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.storerating.entity.Store;

public interface StoreRepository extends JpaRepository<Store, Long> {

    List<Store> findByNameContainingIgnoreCase(String name);

    List<Store> findByAddressContainingIgnoreCase(String address);
}