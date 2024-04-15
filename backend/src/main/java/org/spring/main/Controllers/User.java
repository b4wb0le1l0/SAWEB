package org.spring.main.Controllers;

import org.spring.main.Model.Hit;
import org.spring.main.Service.AddHitService;
import org.spring.main.Requests.AddHit;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("api/v1/user")
@RequiredArgsConstructor
public class User {

    private final AddHitService addHitService;

    @GetMapping("/sayHello")
    public ResponseEntity<String> sayHello() {
        return ResponseEntity.ok("Hello user");
    }

    @PostMapping("/add-hit")
    public ResponseEntity<Hit> addHit(@RequestHeader("Authorization") String token, @RequestBody AddHit request){
        return ResponseEntity.ok(addHitService.addHit(token, request));
    }

    @PostMapping("/get-all")
    private ResponseEntity<ArrayList<Optional<Hit>>> getAll(@RequestHeader("Authorization") String token){
        return ResponseEntity.ok(addHitService.getAll(token));
    }
}
