/**
 * Prompts the user to enter student marks and validates the input.
 * Ensures the input is a number between 0 and 100.
 * @returns {number} The valid student marks.
 */
function getStudentMarks() {
    let marks;
    
    // Use a do-while loop to repeatedly prompt the user until a valid number is entered.
    do {
        // The 'prompt' function is a browser feature for getting user input.
        const input = prompt("Enter student marks (0-100):");
        
        // Use parseFloat to convert the input string to a number.
        marks = parseFloat(input);

        // Check if the input is not a number (isNaN) or is outside the valid range (0-100).
        if (isNaN(marks) || marks < 0 || marks > 100) {
            // Use 'alert' to provide feedback on invalid input.
            alert("Invalid input! Please enter a number between 0 and 100.");
        }
    } while (isNaN(marks) || marks < 0 || marks > 100);

    // Return the validated marks.
    return marks;
}

/**
 * Calculates the final grade based on the student's marks using a grading scale.
 * @param {number} marks The student's marks.
 * @returns {string} The corresponding letter grade (A, B, C, D, or E).
 */
function calculateGrade(marks) {
    // Use an if-else if-else structure to check the marks against the grading scale.
    // The conditions are checked in descending order for clear, simple logic.
    if (marks > 79) {
        return "A";
    } else if (marks >= 60) {
        // This condition is only checked if marks are 79 or less.
        return "B";
    } else if (marks >= 49) {
        // This condition is only checked if marks are 59 or less.
        return "C";
    } else if (marks >= 40) {
        // This condition is only checked if marks are 49 or less.
        return "D";
    } else {
        // If none of the above conditions are met, the marks must be less than 40.
        return "E";
    }
}

/**
 * The main function to run the grade generator program.
 * It calls the other functions to get input, calculate the grade, and display the result.
 */
function runGradeGenerator() {
    // Get the student's marks from the user.
    const studentMarks = getStudentMarks();
    
    // Calculate the grade based on the marks.
    const grade = calculateGrade(studentMarks);

    // Display the final grade to the user.
    alert(`The student's grade is: ${grade}`);
    
    // Also, log the result to the browser's console for debugging.
    console.log(`Student Marks: ${studentMarks}, Grade: ${grade}`);
}

// Call the main function to start the program.
runGradeGenerator();