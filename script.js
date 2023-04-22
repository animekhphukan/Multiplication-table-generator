//Multiplication Table Generator

var readlineSync = require("readline-sync");
var question = ("Which table do you want?\n->  ");
var number = readlineSync.question(question);

var numbers=['1','2','3','4','5','6','7','8','9','10'];



if(number===numbers[0])
{console.log("This is the multiplication table of",number);
  for(i=1;i<=10;i++)
  {
    console.log(numbers[0],'*',i,'=',numbers[0]*i);
  }
}
if(number===numbers[1]) 
{console.log("This is the multiplication table of",number);
  for(i=1;i<=10;i++)
  {
    console.log(numbers[1],'*',i,'=',numbers[1]*i);
  }
}

if(number===numbers[2]) 
{console.log("This is the multiplication table of",number);
  for(i=1;i<=10;i++)
  {
    console.log(numbers[2],'*',i,'=',numbers[2]*i);
  }
}

if(number===numbers[3]) 
{console.log("This is the multiplication table of",number);
  for(i=1;i<=10;i++)
  {
    console.log(numbers[3],'*',i,'=',numbers[3]*i);
  }
}

if(number===numbers[4]) 
{console.log("This is the multiplication table of",number);
  for(i=1;i<=10;i++)
  {
    console.log(numbers[4],'*',i,'=',numbers[4]*i);
  }
}

if(number===numbers[5]) 
{console.log("This is the multiplication table of",number);
  for(i=1;i<=10;i++)
  {
    console.log(numbers[5],'*',i,'=',numbers[5]*i);
  }
}

if(number===numbers[6]) 
{console.log("This is the multiplication table of",number);
  for(i=1;i<=10;i++)
  {
    console.log(numbers[6],'*',i,'=',numbers[6]*i);
  }
}

if(number===numbers[7]) 
{console.log("This is the multiplication table of",number);
  for(i=1;i<=10;i++)
  {
    console.log(numbers[7],'*',i,'=',numbers[7]*i);
  }
}

if(number===numbers[8]) 
{console.log("This is the multiplication table of",number);
  for(i=1;i<=10;i++)
  {
    console.log(numbers[8],'*',i,'=',numbers[8]*i);
  }
}

if(number===numbers[9]) 
{console.log("This is the multiplication table of",number);
  for(i=1;i<=10;i++)
  {
    console.log(numbers[9],'*',i,'=',numbers[9]*i);
  }
}

if(number===numbers[10]) 
{console.log("This is the multiplication table of",number);
  for(i=1;i<=10;i++)
  {
    console.log(numbers[10],'*',i,'=',numbers[10]*i);
  }
}
else
{
console.log("It can show table upto 10");  
}
