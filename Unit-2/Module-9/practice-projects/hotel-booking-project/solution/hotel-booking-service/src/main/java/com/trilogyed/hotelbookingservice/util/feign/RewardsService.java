package com.trilogyed.hotelbookingservice.util.feign;

import com.trilogyed.hotelbookingservice.domain.Rewards;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@FeignClient(name = "rewards-service")
public interface RewardsService {
    @RequestMapping(value = "/rewards/type/{roomType}", method = RequestMethod.GET)
    Rewards getRewardsInformationForRoomType(@PathVariable String roomType);
}
