// beep character: process.stdout.write('\x07');
// grabs input numbers from command line
const input = process.argv.slice(2);
// function for timer
const timer = (input) => {
  // iterates through input array
  for (const num of input) {
    // checks if input is a number
    if (num > 0) {
      // timeout function is set for eeach number
      setTimeout(() => {
        // beep character
        process.stdout.write('\x07');
        // schedules for num (input value) * 1000
      }, num * 1000);
      // checks edge cases NaN and undefined
    } else if (!input.isNaN || input === undefined){
      return;
    }

  }

}
// calls the function
timer(input);

