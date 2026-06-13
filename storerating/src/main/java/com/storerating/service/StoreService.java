package com.storerating.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.storerating.entity.Store;
import com.storerating.repository.StoreRepository;

@Service
public class StoreService {

    @Autowired
    private StoreRepository storeRepository;

    public Store addStore(Store store) {
        return storeRepository.save(store);
    }

    public List<Store> getAllStores() {
        return storeRepository.findAll();
    }

    public List<Store> searchByName(String name) {
        return storeRepository.findByNameContainingIgnoreCase(name);
    }

    public List<Store> searchByAddress(String address) {
        return storeRepository.findByAddressContainingIgnoreCase(address);
    }
}