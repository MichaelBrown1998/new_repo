package com.company;

import java.util.Scanner;

public class AverageThree {

    public static void main(String[] args) {

        Scanner scanner = new Scanner (System.in);

        System.out.println("Input the first number: ");
        double firstNumber = Integer.parseInt(scanner.nextLine());

        System.out.println("Input the second number: ");
        double secondNumber = Integer.parseInt(scanner.nextLine());

        System.out.println("Input the third number: ");
        double thirdNumber = Integer.parseInt(scanner.nextLine());

        double sum = firstNumber + secondNumber + thirdNumber;

        System.out.format("The average value is " , sum / 3 );
    }
}
