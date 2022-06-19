package com.posco.back.gift.repository;

import com.posco.back.gift.entity.GiftEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface GiftRepository extends JpaRepository<GiftEntity,Integer> {
    public List<GiftEntity> findAll();
    public List<GiftEntity> findByNameLike(String name);

}