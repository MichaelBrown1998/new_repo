package com.cognizant.securitypractice.util;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Scanner;

public class PasswordUtility {
    public static void main(String[] args) {
        // creating a new instance of an password encoder.
        PasswordEncoder enc = new BCryptPasswordEncoder();
        // creating a new instance of a scanner.
        Scanner scanner = new Scanner(System.in);
        do {
            // do run the "enter a string to encode" on a loop
            System.out.println("Enter a string to encode: ");
            // enters a string (password) to get the encoded version
            String stringToEncode = scanner.nextLine();
            // after the string is entered, the scanner moves to the next part of the input.
            String encodedPassword = enc.encode(stringToEncode);
            //encodes the password you just typed in the beginning of the do loop.
            System.out.println("An encoded version of " + stringToEncode + " is " + encodedPassword);
            // prints out the encoded string
        } while (true);
        // if the statement is true, run the loop. If it's not true, the loop stops.
    }
}
