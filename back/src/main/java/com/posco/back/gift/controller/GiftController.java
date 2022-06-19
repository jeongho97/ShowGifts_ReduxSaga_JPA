package com.posco.back.gift.controller;

import com.posco.back.gift.entity.GiftEntity;
import com.posco.back.gift.service.GiftService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@EnableAutoConfiguration
@RequestMapping(value="/gift")
@Slf4j
public class GiftController {

    @Autowired
    GiftService giftService;


    @GetMapping("/")
    public List<GiftEntity> getAllGift(){
        return giftService.findAllGift();
    }

    @GetMapping("/search/{name}")
    public List<GiftEntity> getGiftByName(@PathVariable String name){
        log.info(name);
        return giftService.findGiftByName(name);
    }
    @PutMapping("/{id}")
    public Optional<GiftEntity> updateGiftView(
            @PathVariable String id
    ) {
        return giftService.viewCount(Integer.valueOf(id));
    }
}
