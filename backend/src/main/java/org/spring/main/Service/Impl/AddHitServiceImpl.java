package org.spring.main.Service.Impl;

import org.spring.main.Model.Hit;
import org.spring.main.Model.User;
import org.spring.main.InterfaceRepos.HitRepository;
import org.spring.main.InterfaceRepos.UserRepository;
import org.spring.main.Service.AddHitService;
import org.spring.main.Service.JwtService;
import org.spring.main.Requests.AddHit;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AddHitServiceImpl implements AddHitService {

    private final HitRepository hitRepository;

    private final UserRepository userRepository;

    private final JwtService jwtService;

    public Hit addHit(String token, AddHit addHitRequest){
        var jwt = token.substring(7);
        String email = jwtService.extractUserName(jwt);
        User user = userRepository.findByEmail(email).get();
        Hit hit = new Hit();
        hit.setEntry(isPointOnGraph(addHitRequest.getR(), addHitRequest.getX(), addHitRequest.getY()));
        hit.setR(addHitRequest.getR());
        hit.setX(addHitRequest.getX());
        hit.setY(addHitRequest.getY());
        hit.setUser(user);
        hit.setTimeOfCreated(LocalDateTime.now());
        hitRepository.save(hit);
        return hit;
    }

    public ArrayList<Optional<Hit>> getAll(String token){
        var jwt = token.substring(7);
        String email = jwtService.extractUserName(jwt);
        User user = userRepository.findByEmail(email).get();
        return hitRepository.findAllByUserOrderByTimeOfCreatedDesc(user);
    }

    public boolean isPointOnGraph(double radius, double x, double y) {
        boolean inRectangle = x <= radius && x >= 0 && y <= radius / 2 && y >= 0;
        boolean inCircle = x <= 0 && y >= 0 && x * x + y * y <= radius * radius;
        boolean inTriangle = x >= 0 && y <= 0 && y >= -radius / 2 && x <= radius - y;
        return inRectangle || inCircle || inTriangle;
    }
}
