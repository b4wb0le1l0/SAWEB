package org.spring.main.Controllers;

import org.spring.main.Model.User;
import org.spring.main.Service.AuthenticationService;
import org.spring.main.Requests.JwtAuthentication;
import org.spring.main.Requests.RefreshToken;
import org.spring.main.Requests.SignIn;
import org.spring.main.Requests.SignUp;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/v1/auth")
@RequiredArgsConstructor
public class Authentication {

    private final AuthenticationService authenticationService;

    @PostMapping("/signup")
    public ResponseEntity<User> signup(
            @RequestBody SignUp signUpRequest
            )
    {
        return ResponseEntity.ok(authenticationService.signup(signUpRequest));
    }

    @PostMapping("/signin")
    public ResponseEntity<JwtAuthentication> signin(@RequestBody SignIn signInRequest){
        return ResponseEntity.ok(authenticationService.signin(signInRequest));
    }

    @PostMapping("/refresh")
    public ResponseEntity<JwtAuthentication> refresh
            (@RequestBody RefreshToken refreshTokenRequest){
        return ResponseEntity.ok(authenticationService.refreshToken(refreshTokenRequest));
    }
}