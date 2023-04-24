const beep = function() {
    process.stdout.write('\x07');
  }
  
  // delay is expected in seconds
  const scheduleBeep = function(delay) {
    delay = Number(delay);
    if (!isNaN(delay) && delay > 0) {
      setTimeout(beep, delay * 1000);
    }
  }
  
  const numbers = process.argv.slice(2);
  console.log(numbers);
    for (let num = 0; num <= numbers.length; num++){
    scheduleBeep(numbers[num]);
  }
  