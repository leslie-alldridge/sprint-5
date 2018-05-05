Exercise One 

var count = 0;
var hash = "#";

while (count < 7){
  console.log(hash);
  hash += "#";
  count ++;
}

Exercise Two 

var count = 1; 

while (count <= 100){
    if (count % 3 == 0 && count % 5 == 0){
        console.log("FizzBuzz");
    }
    else if (count % 5 == 0){
        console.log("Buzz");
    }
    else if (count % 3 == 0){
        console.log("Fizz");
    }
    else {
        console.log(count);
    }
    count ++;
}

Exercise Three

var area = 8;
let empty = "";

for(let n = 1; n <= area; n++) {
 for(let i = 1; i <= area; i++){
  if ((n + i) % 2 == 0){
  empty += " ";
  }
   else {
     empty += "#";
   }
 }
  empty += "\n";
}

console.log(empty);