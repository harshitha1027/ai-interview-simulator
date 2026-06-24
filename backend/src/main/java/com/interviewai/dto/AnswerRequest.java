//package com.interviewai.dto;
//
//public class AnswerRequest {
//
//    private String question;
//    private String answer;
//
//    public AnswerRequest() {
//    }
//
////    public String getQuestion() {
////        return question;
////    }
////
////    public void setQuestion(String question) {
////        this.question = question;
////    }
//
//    
//    @ManyToOne
//    @JoinColumn(name = "question_id")
//    private Question question;
//
//    public Question getQuestion() {
//        return question;
//    }
//
//    public void setQuestion(Question question) {
//        this.question = question;
//    }
//    
//    public String getAnswer() {
//        return answer;
//    }
//
//    public void setAnswer(String answer) {
//        this.answer = answer;
//    }
//}

package com.interviewai.dto;

public class AnswerRequest {

    private Long questionId;
    private String answer;

    public AnswerRequest() {
    }

    public Long getQuestionId() {
        return questionId;
    }

    public void setQuestionId(Long questionId) {
        this.questionId = questionId;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }
}