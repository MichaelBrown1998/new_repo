package com.ourclass;

import java.util.*;

public class DaysCounterApp {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
//        System.out.println("Would you like to find the number of days in a (y)ear or a (m)onth?");
//
//        String selection = scanner.nextLine();
//
//        DayCounter dayCounter = new DayCounter();

        int days = 0;
//        if (selection.equalsIgnoreCase("y")) {
//            System.out.println("Which year are you interested in?");
//            Integer year = Integer.parseInt(scanner.nextLine());
//            days = dayCounter.findDayCountForYear(year); // some method to get days in a year
//        } else {
//            System.out.println("Which month are you interested in (1-12)?");
//            Integer month = Integer.parseInt(scanner.nextLine());
//            System.out.println("In which year?");
//            Integer year = Integer.parseInt(scanner.nextLine());
//            days = 0; // some method to get days in a month
//        }

        System.out.println("There are " + days + " in your requested thing.");

        nowDoSomeLoops();
    }

    public static void nowDoSomeLoops() {
        // for - with "i" says the number of times to do something:
        int numberOfTimesToRollADie = 5;  // 0, 1, 2, 3, 4
        Random die = new Random();
        for (int i = 0; i < numberOfTimesToRollADie; i++) {
            int myDieRoll = die.nextInt(6) + 1;
            System.out.println("I just rolled a " + myDieRoll + " on roll number " + i);
        }

        int x = 100;
        // for (initializer (statement); test (some boolean); incrementer (some other statement)) {
//        for (x=30; x < 1000 && x> 22; x+=12) {
//
//        }
        List<String> students = new LinkedList<>();
        students.add("Zaki");
        students.add("Ameer");
        students.add("Fred");
        students.add("Kanmani");

        for (String student : students) {
            System.out.println("There are " + student.length() + " letters in " + student);
            System.out.println("That's why " + student + " is my favorite.");
        }

        System.out.println("-------");
        System.out.println("Adding someone to my list...");
        System.out.println("-------");
        students.add("Kendall");
        for (String student : students) {
            System.out.println(student + " is pretty awesome.");
        }

        // what is the last element in my list
        String lastElementOfList = students.get(students.size() - 1);
//        String alsoTheLastElement = students.peekLast();

        // while and do/while
        // while (boolean condition is true) {
        //    do ;
        //    this;
        //    stuff;
        // }
        int thisNumber = 1000;
        while (thisNumber % 134 != 0) {
            System.out.println("" + thisNumber + " is not divisible by 134!");
            thisNumber++;
        }

        System.out.println("Now, we have a number divisible by 134. It is " +thisNumber);

//        while(userWantsToContinue == true) {
//            // do something
//            // ask the user if they want to continue
//        }
        Scanner scanner = new Scanner(System.in);
//
//        boolean userWantsToKeepGoing = false;
//        do {
//            System.out.println("Hello again!");
//            System.out.println("Shall we keep chatting?");
//            String answer =  scanner.nextLine();
//            if (answer.equals("y")) {
//                userWantsToKeepGoing = true;
//            } else {
//                userWantsToKeepGoing = false;
//            }
//        } while (userWantsToKeepGoing);
//        System.out.println("Fine. I didn't like you anyway.");

//        Set<Integer> integerSet = new HashSet<>();
        Set<Integer> integerSet = new TreeSet<>();
        integerSet.add(4);
        integerSet.add(100);
        integerSet.add(66);
        integerSet.add(19);
        integerSet.add(-100);

        System.out.println("I have " + integerSet.size() + " values in my set.");
        for (Integer myInt : integerSet) {
            System.out.println("Great news everyone, I found this integer: " + myInt);
        }

        Map<Integer, String> myMap = new HashMap<>();
        myMap.put(new Integer(0), "My hero");
        myMap.put(1, "The loneliest number");
        myMap.put(2, "What it takes to make a thing go round");
        myMap.put(3, "z a crowd");

        String theValueAssociatedWith1 = myMap.get(1);
        System.out.println(theValueAssociatedWith1);

        System.out.println("=== Changing 1 ===");
        myMap.put(1, " in a million");
        theValueAssociatedWith1 = myMap.get(1);
        System.out.println(theValueAssociatedWith1);

        Map<Student, List<Integer>> studentGradeMap = new HashMap<>();

        Student student1 = new Student("Josh", "Orlando");
        List<Integer> grades1 = new ArrayList<>();
        grades1.add(100);
        grades1.add(100);
        grades1.add(101);

        studentGradeMap.put(student1, grades1);

        Student student2 = new Student("Daniele", "Atlanta");
        List<Integer> grades2 = new ArrayList<>();
        grades2.add(99);
        grades2.add(103);
        grades2.add(112);

        studentGradeMap.put(student2, grades2);

        System.out.println("--- here's the map! ---");
        System.out.println(studentGradeMap);

        Student theStudentToGrab = new Student("Josh", "Orlando");

        List<Integer> joshGrades = studentGradeMap.get(theStudentToGrab);

        System.out.println(" --- the grades for " + theStudentToGrab + " ---");
        System.out.println(joshGrades);







    }
}
