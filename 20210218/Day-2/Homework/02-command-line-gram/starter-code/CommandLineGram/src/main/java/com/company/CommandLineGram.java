package com.company;

import java.util.Scanner;

public class CommandLineGram {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("What is your first name?" );
        String firstname = scanner.nextLine();

        System.out.println("What is your last name?");
        String lastname = scanner.nextLine();

        System.out.println("What is your email?");
        String email = scanner.nextLine();

        System.out.println("What is your Twitter Handle?");
        String twitterhandle = scanner.nextLine();

        System.out.println("What is your age?");
        int age = Integer.parseInt(scanner.nextLine());

        System.out.println("What country are you live in?");
        String country = scanner.nextLine();

        System.out.println("What profession are you in?");
        String profession = scanner.nextLine();

        System.out.println("What is your favorite operating system?");
        String system = scanner.nextLine();

        System.out.println("What is your favorite programming language? ");
        String language = scanner.nextLine();

        System.out.println("Who is your favorite computer scientist?");
        String scientist = scanner.nextLine();

        System.out.println("What is your favorite keyboard shortcut?");
        String shortcut = scanner.nextLine();

        System.out.println("Have you ever built your own computer software?");
        String software = scanner.nextLine();

        System.out.println("If you could be any superhero, who would it be?");
        String hero = scanner.nextLine();

    }
}
