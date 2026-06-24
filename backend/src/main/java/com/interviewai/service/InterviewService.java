package com.interviewai.service;

import com.interviewai.dto.InterviewRequest;
import com.interviewai.entity.Interview;
import com.interviewai.repository.InterviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class InterviewService {

    @Autowired
    private InterviewRepository interviewRepository;

    public String startInterview(InterviewRequest request) {

        Interview interview = new Interview();

        interview.setRole(request.getRole());
        interview.setInterviewDate(LocalDateTime.now());
        interview.setOverallScore(0.0);

        interviewRepository.save(interview);

        return "Interview Started Successfully";
    }
}