package org.spring.main.Service;

import org.spring.main.Model.Hit;
import org.spring.main.Requests.AddHit;

import java.util.ArrayList;
import java.util.Optional;

public interface AddHitService {
    Hit addHit(String token, AddHit addHitRequest);
    ArrayList<Optional<Hit>> getAll(String token);
}
