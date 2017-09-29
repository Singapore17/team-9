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
			
	}

	
}


