package com.interviewai.service;

import org.springframework.stereotype.Service;

@Service
public class EvaluationService {

    public double evaluateAnswer(String answer) {

        if(answer.length() > 50) {
            return 8.0;
        }

        return 5.0;
    }
}