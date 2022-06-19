package com.posco.back.gift.service;

import com.posco.back.gift.entity.GiftEntity;
import com.posco.back.gift.repository.GiftRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class GiftServiceImpl implements GiftService {

    @Autowired
    private final GiftRepository giftRepository;

    @Override
    public List<GiftEntity> findAllGift() {
        return giftRepository.findAll() ;
    }

    @Override
    public List<GiftEntity> findGiftByName(String name) {
        log.info(name);

        return giftRepository.findByNameLike("%"+name+"%");
    }

    @Override
    public Optional<GiftEntity> viewCount(Integer id) {
        Optional<GiftEntity> gift=giftRepository.findById(id);
        gift.ifPresent(selectGift->{
            selectGift.setViews(selectGift.getViews()+1);

            giftRepository.save(selectGift);
        });
        log.info(String.valueOf(gift));
        return gift;
    }

}
