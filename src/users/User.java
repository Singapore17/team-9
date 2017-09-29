package users;

public class User {
    private String name;
    private String contact;
    private String x;
    private String y;
    private String time;
    private String service;

    public User(String username, String password, String name, String contact) {
      this.name = name;
      this.contact = contact;
        this.time = getTime();
        this.service = getService();
    }
   
    public String getTime() {
 	   return time;
 	 }
 	 
 	 public String getService() {
 		   return service;
 	 }   
    
	 
	 public int getX() {
		 int ans = Integer.parseInt(x);
	   return ans;
	 }
	 
	 public int getY() {
		 int ans = Integer.parseInt(y);  
		 return ans;
	 }   
    
    public void printName() {
      System.out.println(this.name);
    }

    public void printContact() {
  System.out.println(this.contact);
}

    
}