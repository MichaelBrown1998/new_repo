## Debugging Activity

## Instructions

1. Open the starter code included on this page.
2. Open up the supplied version of DebuggingPractice.
3. Set a breakpoint on the first System.out.println() executable statement (click in the gutter margin to see the orange bullet-point icon appear in the gutter area indicating a set breakpoint).
4. Start the program in debug mode.
5. Notice what the IDE looks like when the breakpoint is hit.
   - Notice how the Debugger window opens up at the bottom of the screen
   - Notice the variables window.
   - Notice the Frames window on the left
   - Notice the series of arrow icons in the toolbar section of the Debugger window—these processing icons will allow you to step through the program in various ways that will be discussed in further detail in future lessons.
6. Make note of what you see at this first breakpoint.
   - We can only see the results of code that has executed up to the first breakpoint.
   - More variables become visible in the variable window as you execute more statements.
   - Set another breakpoint at the last System.out.println() execution statement (last line of code).
7. Hover your mouse cursor over the processing icons in the Debugger toolbar to see the name and associated shortcut for each processing arrow icon.
   - Click the Step-Into icon - notice that the program stops at the next line of code even though there is no breakpoint set on that line.
   - The Step-Into arrow will run the program one line at a time regardless of whether or not a breakpoint is set.
   - Now click the Step-Out arrow. Notice that the code runs to the next breakpoint which in this case is the last print statement.
   - The Step-Out arrow will run the program from one breakpoint until the next breakpoint
8. Finally, Click “Continue Execution Green Arrow Button” icon on the left-side of the screen
   - This execution button will also step the debugger to the next breakpoint and following the last breakpoint will run the debugger to completion of the program.