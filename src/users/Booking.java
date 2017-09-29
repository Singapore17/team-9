/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entity;

/**
 * @author Jasmine Tan
 */
public class Booking {
	
    private String BookingID;
    private String AID;
    private String BID;
    private String status;
    private String date;
    private String service;
    private double longitude;
    private double latitude;
 
	public void setLocation(double longitude, double latitude) {
	  this.longitude = longitude;
	  this.latitude = latitude;
	 };

    public double getLongitude() {
        return longitude;
    }
    
    public double getLatitude() {
        return latitude;
    }
    
    public Boolean distanceDiff(User userA, User userB) {
      double longitudeDiff = Math.abs(userA.getX() - userB.getX());
      double latitudeDiff = Math.abs(userA.getY() - userB.getY());
      
      if (longitudeDiff < 10 && latitudeDiff < 10) {
       return true;
      }
      else 
       return false;
    }
    
    public void setTime(String starttime, String endtime) {
      this.starttime = starttime;
      this.endtime = endtime;
    }
    
    public int getStartTime() {
      return Integer.parseInt(starttime);
    }
    
    public int getEndTime() {
      return Integer.parseInt(endtime);
    }
    
    public Boolean timeDiff(User userA, User userB) {
  double startTimeDiff = userA.getStartTime - userB.getStartTime;
  double endTimeDiff = userB.getStartTime - userA.getStartTime;
  
  if (startTimeDiff >= 0 && endTimeDiff >= 0) {
   return true;
  }
  else 
   return false;
} 

    public void setService(String service) {
  this.service = service;
}

 public String getService() {
   return service;
 }
 
 public Boolean serviceDiff(User userA, User userB) {
  if (userA.service == userB.service) {
   return true;
  }
  else
   return false;
 }
    
}