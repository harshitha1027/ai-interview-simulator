package com.interviewai.service;

import com.interviewai.entity.Interview;
import com.interviewai.entity.Question;
import com.interviewai.repository.InterviewRepository;
import com.interviewai.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.ArrayList;
@Service
public class QuestionService {

    @Autowired
    private QuestionRepository questionRepository;

    @Autowired
    private InterviewRepository interviewRepository;

    @Autowired
    private GeminiService geminiService;

    public List<Question> generateQuestions(
            Long interviewId,
            String role) {

        Interview interview =
                interviewRepository.findById(interviewId)
                        .orElseThrow();

//        List<String> questions =
//                geminiService.generateQuestions(role);
//
//        for (String q : questions) {
//
//            Question question = new Question();
//
//            question.setQuestionText(q);
//            question.setDifficulty("Beginner");
//            question.setInterview(interview);
//
//            questionRepository.save(question);
//        }
//
//        return questions;
        List<String> generatedQuestions =
                geminiService.generateQuestions(role);

        List<Question> savedQuestions = new ArrayList<>();

        for (String q : generatedQuestions) {

            Question question = new Question();

            question.setQuestionText(q);
            question.setDifficulty("Beginner");
            question.setInterview(interview);

            Question savedQuestion =
                    questionRepository.save(question);

            savedQuestions.add(savedQuestion);
        }

        return savedQuestions;
    }
}