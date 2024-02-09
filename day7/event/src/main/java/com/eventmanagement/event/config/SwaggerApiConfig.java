package com.eventmanagement.event.config;

import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.eventmanagement.event.utils.MyConstant;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;
import io.swagger.v3.oas.models.security.SecurityScheme.Type;
import io.swagger.v3.oas.models.servers.Server;

@Configuration
public class SwaggerApiConfig {
    @Bean
    public OpenAPI openAPI(){
        return new OpenAPI().servers(List.of(new Server().url(MyConstant.SWAGGER_LOCALHOST_URL)))
        .addSecurityItem(new SecurityRequirement().addList(MyConstant.SWAGGER_SECURITY_SCHEME_Name))
        .components(new Components().addSecuritySchemes(MyConstant.SWAGGER_SECURITY_SCHEME_Name, new SecurityScheme().name(MyConstant.SWAGGER_SECURITY_SCHEME_Name)
        .type(Type.HTTP)
        .scheme(MyConstant.SWAGGER_SCHEME)
        .description(MyConstant.SWAGGER_DESCRIPTION)
        .bearerFormat(MyConstant.SWAGGER_BEARER_FORMAT)));
    }
}
