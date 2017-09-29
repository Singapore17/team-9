package users;

public class GroupA {
    
    private String ID;
    private String name;
    private String contact;
 

    public GroupA(String ID, String name, String contact) {
        this.ID = ID;
        this.name = name;
        this.contact = contact;
        this.location = getLocation();
        this.time = getTime();
        this.service = getService();
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }
    
    public String getLocation() {
    		
    }

    

}

