package parameters;

public class Time {
	private String start;
	private String end;
	private int start_time;
	private int end_time;
	
	public Time( start, String end) {
		 start_time = Integer.parseInt(start);
		 end_time = Integer.parseInt(end);
	}
	
	public void setStart(String start) {
		start_time = Integer.parseInt(start);
	}
	
	public void setEnd(String end) {
		end_time = Integer.parseInt(end);
	}
	
	public Integer getStart() {
		return start_time;
	}
	
	public Integer getEnd() {
		return end_time;
	}
	
	
}
