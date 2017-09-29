package parameters;

public class Time {
	private String start;
	private String end;
	private int start_time;
	private int end_time;
	
	public Time(String start, String end) {
		 start_time = Integer.parseInt(start);
		 end_time = Integer.parseInt(end);
	}
	
	public void setStart(String start) {
		start_time = Integer.parseInt(start);
	}
	
	public void setEnd(String end) {
		end_time = Integer.parseInt(end);
	}
	
	public void setStart(int start) {
		start_time = start;
	}
	
	public void setEnd(int end) {
		end_time = end;
	}
	
	
	public Integer getStart() {
		return start_time;
	}
	
	public Integer getEnd() {
		return end_time;
	}
	
	public boolean timeDiff(String startA, String endA, String startB, String endB) {
		int start_timeA = Integer.parseInt(startA);
		int end_timeA = Integer.parseInt(endA);
		int start_timeB = Integer.parseInt(startB);
		int end_timeB = Integer.parseInt(endB);
		if(start_timeA >= start_timeB && end_timeA <= end_timeB) {
			return true;
		}
		return false;
		
	}
	
	
}
