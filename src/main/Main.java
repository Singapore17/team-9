package main;

import java.util.Scanner;
import users.*;

/**
 * @author JasmineTan
 */
public class Main {
	
	/**
	 * Requests for user to input username, location, time and service
	 */
	public static void main(String[] args) {
		Scanner input;
		while (true) {
			String delims = "[\\[ \\] ; ]+";
			input = new Scanner(System.in);
			System.out.println("Please select a username: ");
			String username = input.nextLine();
			System.out.println("Please select a password: ");
			String password = input.nextLine();
			System.out.println("What is your name: ");
			String name = input.nextLine();
			System.out.println("What is your phone number: ");
			String contact = input.nextLine();
			try {
				User userA = new User(username, password, name, contact);
				System.out.println("Hi Jasmine, please select your timing and service preferences.");
				String interval_inp = input.nextLine();
				try {
					String valid_interval = CheckInterval.checkInterval(interval_inp);
						String[] interval = valid_interval.split(delims);
						Double start = Double.parseDouble(interval[1]);
						Double end = Double.parseDouble(interval[2]);
						eqn.setInterval(start, end);
				} catch(NotAnIntervalException e) {
					System.out.println(e);
					continue;
				}
				System.out.println("Computing the values of 200 points in the interval" + interval_inp + ". What do you want to do next:");
				System.out.println("a. Solve");
				System.out.println("b. Print values");
				System.out.println("c. Input new equation");
				System.out.println("d. Exit");
				String option = input.nextLine();
				if (option.equals("a")) {
					eqn.solve();
				}
				else if (option.equals("b")) {
					eqn.printValues();
				}
				else if (option.equals("c")) {
					continue;
				}
				else if (option.equals("d")) {
					System.out.println("Exit complete.");
					input.close();
					break;
				}
				else {
					System.out.println("Not a valid option.");
				}
			} catch(NotAnEquationException e) {
				System.out.println(e);
				}
			
		}
	}

	
}


