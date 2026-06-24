//package com.interviewai.dto;
//
//public class InterviewRequest {
//
//    private String role;
//
//    public InterviewRequest() {
//    }
//
//    public String getRole() {
//        return role;
//    }
//
//    public void setRole(String role) {
//        this.role = role;
//    }
//}

package com.interviewai.dto;

public class InterviewRequest {

    private Long interviewId;
    private String role;

    public Long getInterviewId() {
        return interviewId;
    }

    public void setInterviewId(Long interviewId) {
        this.interviewId = interviewId;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}