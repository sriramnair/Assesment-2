console.log('Welcome to password validator tool')

const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.question("Please Enter a password ", function(num) {
    if(num.length > 10 && num.includes('@') && num[0].toUpperCase()){
        console.log('Success!')
        reader.close()
    }
    else if(num.length > 10 && num.includes('$') && num[0].toUpperCase()){
        console.log('Success!')
        reader.close()
    }
    else if(num.length > 10 && num.includes('%') && num[0].toUpperCase()){
        console.log('Success!')
        reader.close()
    }
    else{
        console.log('failure')
        reader.close()
    }
  });
