const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const beep = function() {
  process.stdout.write('\x07');
};
  
// delay is expected in seconds
const scheduleBeep = function(delay) {
  delay = Number(delay);
  if (!isNaN(delay) && delay > 0) {
    setTimeout(beep, delay * 1000);
  }
};

let inputNumbers = [];
rl.on('line', function(line) {
    if(line === '\u0003'){
        console.log('Thanks for using me, ciao!');
    }
    else if(line === 'b'){
        process.stdout.write('\x07');
    } else if (line >= 1 && line <= 9) { 
        console.log(`setting timer for ${line} seconds.`);
        scheduleBeep(line);
    } 
    else{
        console.log('Invalid key')
    }
  
});
 
rl.on('close', function() {
  console.log(inputNumbers);
});
        
  