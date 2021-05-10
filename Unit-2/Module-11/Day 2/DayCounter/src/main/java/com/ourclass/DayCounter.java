package com.ourclass;

public class DayCounter {

    public int findDayCountForYear(int year) {
        if (this.isALeapYear(year)) {
            return 366;
        } else {
            return 365;
        }
    }

    public boolean isALeapYear(int year) {
        if (year % 400 == 0) {
            return true;
        }
        if (year % 100 == 0) {
            return false;
        }
        if (year % 4 == 0) {
            return true;
        }
        return false;
    }

    public int findDayCountForAMonth(int month, int year) {
        // is the month april june september or november? 30
        // is it february?
        // is it a leap year? 29
        // else 28
        return 31;
    }
}
