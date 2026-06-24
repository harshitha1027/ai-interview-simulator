//package com.interviewai.entity;
//
//import jakarta.persistence.*;
//
//@Entity
//@Table(name = "answers")
//public class Answer {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    @Column(columnDefinition = "TEXT")
//    private String answerText;
//
//    private Double score;
//
//    @Column(columnDefinition = "TEXT")
//    private String feedback;
//
//    public Answer() {
//    }
//
//    public Long getId() {
//        return id;
//    }
//
//    public String getAnswerText() {
//        return answerText;
//    }
//
//    public void setAnswerText(String answerText) {
//        this.answerText = answerText;
//    }
//
//    public Double getScore() {
//        return score;
//    }
//
//    public void setScore(Double score) {
//        this.score = score;
//    }

package com.interviewai.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "answers")
public class Answer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(columnDefinition = "TEXT")
    private String answerText;

    private Double score;

    @Column(columnDefinition = "TEXT")
    private String feedback;

//    @ManyToOne
//    @JoinColumn(name = "question_id")
//    private Question question;
    @ManyToOne(optional = true)
    @JoinColumn(name = "question_id", nullable = true)
    private Question question;

    public Answer() {
    }

    public Long getId() {
        return id;
    }

    public String getAnswerText() {
        return answerText;
    }

    public void setAnswerText(String answerText) {
        this.answerText = answerText;
    }

    public Double getScore() {
        return score;
    }

    public void setScore(Double score) {
        this.score = score;
    }

    public String getFeedback() {
        return feedback;
    }

    public void setFeedback(String feedback) {
        this.feedback = feedback;
    }

    public Question getQuestion() {
        return question;
    }

    public void setQuestion(Question question) {
        this.question = question;
    }
}
//
//    public String getFeedback() {
//        return feedback;
//    }
//
//    public void setFeedback(String feedback) {
//        this.feedback = feedback;
//    }
//}