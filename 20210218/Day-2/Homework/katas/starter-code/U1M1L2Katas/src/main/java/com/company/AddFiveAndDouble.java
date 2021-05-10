package com.company;

import java.util.Scanner;

public class AddFiveAndDouble {

    public static void main(String[] args) {
        Scanner scanner = new Scanner (System.in);

        int addfive = Integer.parseInt( scanner.nextLine() + 5);

        System.out.println(addfive * 2);
    }
}
