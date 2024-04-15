package org.spring.main.Service;

import org.spring.main.Model.User;
import org.spring.main.Requests.JwtAuthentication;
import org.spring.main.Requests.RefreshToken;
import org.spring.main.Requests.SignIn;
import org.spring.main.Requests.SignUp;

public interface AuthenticationService {
    User signup(SignUp signUpRequest);
    JwtAuthentication signin(SignIn signInRequest);
    JwtAuthentication refreshToken(RefreshToken refreshTokenRequest);
}
