package com.company;
import java.util.Scanner;
public class LuxuryTaxCalculator {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        int teamSpendingLimit = 40000000;

        double luxuryTaxRate = .18;
        double taxesPayable;

        System.out.println("In this program we will determine your luxury tax payable based on the three" +
                "salaries you enter here.");

        System.out.println("Please enter the first salary.");
        int firstSalary = Integer.parseInt(scanner.nextLine());

        System.out.println("Please enter the second salary.");
        int secondSalary = Integer.parseInt(scanner.nextLine());

        System.out.println("Please enter the third salary.");
        int thirdSalary = Integer.parseInt(scanner.nextLine());

        int totalSalary = firstSalary + secondSalary + thirdSalary;

        System.out.println("The total salary expense for these three players was: " + totalSalary);
        if (totalSalary > teamSpendingLimit) {

            double taxableSalaryPaid = totalSalary - teamSpendingLimit;
            taxesPayable = taxableSalaryPaid * luxuryTaxRate;

            System.out.println("Taxes payable will be " + taxesPayable);
        }
    }
}