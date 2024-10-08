# Catalog-Hackathon
This repository contains a Node.js script that solves a secret sharing problem using Lagrange interpolation. The script reads input from JSON files, decodes values, and returns the constant term.

## Requirements
- **Node.js**: Ensure Node.js is installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

## Project Structure
- **main.js**: The main JavaScript file that decodes values and calculates the constant term.
- **testcase.json**: A sample JSON file with input data for testing.
- **testcase2.json**: Another JSON file with different input data for testing.

## How to Run the Code

1. **Save the JavaScript Code**:
   Save the provided JavaScript code as `main.js` using a text editor.

2. **Create Test Case Files**:
   Create the required JSON files (`testcase.json` and `testcase2.json`) with input data. Example content for `testcase.json`:
   ```json
   {
       "1": {"base": "10", "value": "2"},
       "2": {"base": "10", "value": "3"},
       "3": {"base": "10", "value": "5"}
   }
3. **Run the Script**:
   ```bash
   # Open terminal or command prompt and navigate to the directory containing main.js
   cd path/to/your/directory

   # Run the Node.js script
   # Mention the testcase you want to test i.e testcase.json or testcase2.json after "node main.js"
   node main.js testcase.json
   
   
4. **View Output**:
   After running the script, the output will be displayed in the terminal/command prompt. Ensure that the `testcase.json` and other necessary files are in the same directory as `main.js`.

