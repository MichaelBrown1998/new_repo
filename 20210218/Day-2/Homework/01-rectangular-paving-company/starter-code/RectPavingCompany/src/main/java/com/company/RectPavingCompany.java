package com.company;
import java.util.Scanner;

public class RectPavingCompany {

    public static void main(String[] args) {
        Scanner scanner = new Scanner (System.in);

        System.out.println("What is the width of your driveway?");
                int width = Integer.parseInt(scanner.nextLine());

        System.out.println("what is the length of your driveway? ");
                int length = Integer.parseInt(scanner.nextLine());

        int area = (width * length);
        System.out.println("the area is " + area + ".");

        int perimeter = (2 * width) + (2 * length);
        System.out.println("the perimeter is " + perimeter + ".");

        double CementCostPerSquareFoot = 12.5;
        double FramingCostPer = 8.25;
        double totalCementCost = CementCostPerSquareFoot * area;
        double totalFramingCost = FramingCostPer * perimeter;

        System.out.format("The total cost of the cement will be %.2f " , totalCementCost);
        System.out.format("The total cost of the framing/footers will be %.2f " , totalFramingCost);



    }
}
