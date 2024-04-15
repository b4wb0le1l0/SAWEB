package org.spring.main.Requests;

import lombok.Data;

@Data
public class JwtAuthentication {
    private String token;
    private String refreshToken;
}
