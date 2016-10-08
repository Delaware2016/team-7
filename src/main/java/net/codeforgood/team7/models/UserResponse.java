package net.codeforgood.team7.models;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table
public class UserResponse {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String text;
    private String zipcode;
    private String userFirstName;
    private String userLastName;
    private String Address;


    public UserResponse(String text){
        this.text = text;
        this.setZipcode("19801");
    }
    @Entity
    @Table
    public class Activites {
        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        private Long activitiesID;
        private String activitiesName;
        private Long userID;
        private Long points;
        private Date dateOfActivities;
        private String activityAddress;
        private String activitiesDescription;
        private Boolean userAttendEvent;


        public Long getActivitiesID() {
            return activitiesID;
        }

        public void setActivitiesID(Long activitiesID) {
            this.activitiesID = activitiesID;
        }

        public String getActivitiesName() {
            return activitiesName;
        }

        public void setActivitiesName(String activitiesName) {
            this.activitiesName = activitiesName;
        }

        public Long getUserID() {
            return userID;
        }

        public void setUserID(Long userID) {
            this.userID = userID;
        }

        public Long getPoints() {
            return points;
        }

        public void setPoints(Long points) {
            this.points = points;
        }

        public Date getDateOfActivities() {
            return dateOfActivities;
        }

        public void setDateOfActivities(Date dateOfActivities) {
            this.dateOfActivities = dateOfActivities;
        }

        public String getActivityAddress() {
            return activityAddress;
        }

        public void setActivityAddress(String activityAddress) {
            this.activityAddress = activityAddress;

        }

        public Boolean getUserAttendEvent() {
            return userAttendEvent;
        }

        public void setUserAttendEvent(Boolean userAttendEvent) {
            this.userAttendEvent = userAttendEvent;
        }

        public String getActivitiesDescription() {
            return activitiesDescription;
        }

        public void setActivitiesDescription(String activitiesDescription) {
            this.activitiesDescription = activitiesDescription;
        }
    }

    //response field params --- where is the construct?

    public UserResponse(){
        this.text = "sample";
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getZipcode() {
        return zipcode;
    }

    public void setZipcode(String zipcode) {
        this.zipcode = zipcode;
    }

    public String getUserFirstName() {
        return userFirstName;
    }

    public void setUserFirstName(String userFirstName) {
        this.userFirstName = userFirstName;
    }

    public String getUserLastName() {
        return userLastName;
    }

    public void setUserLastName(String userLastName) {
        this.userLastName = userLastName;
    }

    public String getAddress() {
        return Address;
    }

    public void setAddress(String address) {
        Address = address;
    }
}