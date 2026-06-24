////package com.interviewai.repository;
////
////import com.interviewai.entity.Answer;
////import org.springframework.data.jpa.repository.JpaRepository;
////
////public interface AnswerRepository extends JpaRepository<Answer, Long> {
////}
//
//package com.interviewai.repository;
//
//import com.interviewai.entity.Answer;
//import org.springframework.data.jpa.repository.JpaRepository;
//
//public interface AnswerRepository
//        extends JpaRepository<Answer, Long> {
//}

package com.interviewai.repository;

import com.interviewai.entity.Answer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AnswerRepository
        extends JpaRepository<Answer, Long> {

    List<Answer> findByQuestionInterviewId(Long interviewId);
}