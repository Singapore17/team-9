package users;

public class User {
    private String name;
    private String contact;
	private String time;
	private String location;
	private String service;

    public User(String username, String password, String name, String contact) {
    		this.name = name;
    		this.contact = contact;
        this.location = getLocation();
        this.time = getTime();
        this.service = getService();
    }
    
    public void setLocation(String location) {
		this.location = location;
	}
	
	public String getLocation() {
			return location;
	}
    
    public void setTime(String start_time, String end_time) {
        int start = Integer.parseInt start_time;
    }

    public String getTime() {
        return time;
    }
    
    public
    
    public void setService(String service) {
    		this.service = service;
    }
    
    public String getService() {
    		return service;
    }
    
    public void printName() {
    		System.out.println(this.name);
    }

    public void printContact() {
		System.out.println(this.contact);
}

    
}
