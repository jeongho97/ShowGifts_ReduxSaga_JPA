package com.posco.back.gift.service;

import com.posco.back.gift.entity.GiftEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface GiftService {
    List<GiftEntity> findAllGift();
    List<GiftEntity> findGiftByName(String name);

    Optional<GiftEntity> viewCount(Integer id);
}
