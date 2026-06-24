//package com.interviewai.dto;
//
//public class ReportResponse {
//
//    private Long interviewId;
//    private Double averageScore;
//    private int totalQuestions;
//    private String rating;
//
//    public Long getInterviewId() {
//        return interviewId;
//    }
//
//    public void setInterviewId(Long interviewId) {
//        this.interviewId = interviewId;
//    }
//
//    public Double getAverageScore() {
//        return averageScore;
//    }
//
//    public void setAverageScore(Double averageScore) {
//        this.averageScore = averageScore;
//    }
//
//    public int getTotalQuestions() {
//        return totalQuestions;
//    }
//
//    public void setTotalQuestions(int totalQuestions) {
//        this.totalQuestions = totalQuestions;
//    }
//
//    public String getRating() {
//        return rating;
//    }
//
//    public void setRating(String rating) {
//        this.rating = rating;
//    }
//}

package com.interviewai.dto;

public class ReportResponse {

    private int totalQuestions;
    private double averageScore;
    private String finalFeedback;

    public ReportResponse() {}

    public int getTotalQuestions() {
        return totalQuestions;
    }

    public void setTotalQuestions(int totalQuestions) {
        this.totalQuestions = totalQuestions;
    }

    public double getAverageScore() {
        return averageScore;
    }

    public void setAverageScore(double averageScore) {
        this.averageScore = averageScore;
    }

    public String getFinalFeedback() {
        return finalFeedback;
    }

    public void setFinalFeedback(String finalFeedback) {
        this.finalFeedback = finalFeedback;
    }
}