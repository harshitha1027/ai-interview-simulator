package com.interviewai.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GeminiService {

    @Value("${gemini.api.key}")
    private String apiKey;

    public List<String> generateQuestions(String role) {

        System.out.println("Using Gemini Key: " + apiKey);

        if(role.equalsIgnoreCase("Java Developer")) {

            return List.of(
                    "What is Java?",
                    "What is JVM?",
                    "What is OOP?",
                    "What is Inheritance?",
                    "What is Polymorphism?"
            );
        }

        return List.of("No questions available");
    }
}