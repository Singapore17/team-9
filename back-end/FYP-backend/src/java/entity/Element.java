/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entity;

/**
 *
 * @author Teh Ming Yi
 */
public class Element {
    Property distance;
    Property duration;
    String status;

    public Property getDistance() {
        return distance;
    }

    public void setDistance(Property distance) {
        this.distance = distance;
    }

    public Property getDuration() {
        return duration;
    }

    public void setDuration(Property duration) {
        this.duration = duration;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
    
    
}
