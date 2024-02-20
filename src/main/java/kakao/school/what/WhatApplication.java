package kakao.school.what;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication
@EnableJpaRepositories
public class WhatApplication {
    @RequestMapping("/")
    String home(){
        return "HelloWorld!";
    }

    public static void main(String[] args) {
        SpringApplication.run(WhatApplication.class, args);
    }

}
