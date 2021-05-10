package com.ourclass;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

/***
 *  Leap years are divisible by 4, unless divisible by 100, unless divisible by 400
 *  These are leap years:
 *    2016 2020 2024
 *  These are NOT leap years:
 *    1900 1800 2100
 *  These are leap years:
 *    2000 2400
 */
public class DayCounterTest {
    private DayCounter dayCounter;

    @Before
    public void setup() {
        dayCounter = new DayCounter();
    }

    @Test
    public void shouldReturn365DaysForYearsNotDivisibleBy4() {
        // Assert
        assertEquals(365, dayCounter.findDayCountForYear(2021));
        assertEquals(365, dayCounter.findDayCountForYear(2019));
        assertEquals(365, dayCounter.findDayCountForYear(433));
        assertEquals(365, dayCounter.findDayCountForYear(10238));
        assertEquals(365, dayCounter.findDayCountForYear(2017));
        assertEquals(365, dayCounter.findDayCountForYear(1));
    }

    @Test
    public void shouldReturn366ForYearsDivisibleBy4ButNot100() {
        // Assert
        assertEquals(366, dayCounter.findDayCountForYear(2016));
        assertEquals(366, dayCounter.findDayCountForYear(2020));
        assertEquals(366, dayCounter.findDayCountForYear(1984));
        assertEquals(366, dayCounter.findDayCountForYear(4));
        assertEquals(366, dayCounter.findDayCountForYear(1776));
        assertEquals(366, dayCounter.findDayCountForYear(2312));
    }



    @Test
    public void shouldNotBeALeapYearInYearsDivisibleBy100ButNot400() {
        // Arrange, Act, Assert
        assertFalse(dayCounter.isALeapYear(1900));
        assertFalse(dayCounter.isALeapYear(1800));
    }

    @Test
    public void shouldBeALeapYearForYearsDivisibleBy400() {
        assertTrue(dayCounter.isALeapYear(2000));
        assertTrue(dayCounter.isALeapYear(2400));
        assertTrue(dayCounter.isALeapYear(10000));
    }

    // if I pass in "alpha", 44, ["socks", "shoes", "dogs"], then I should get {student:"Steve", year: 2020}
    public void shouldReturnAppropriateStudentForAlphaCase() {

    }


}