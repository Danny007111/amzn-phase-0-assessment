// 1. Write your functions here

// 1.
let line = function(arr){
    if(arr.length === 0){
        console.log("The line is currently empty.");
        return "The line is currently empty.";
    }else{
        let counter = [];
        for(let i = 0; i < arr.length; i++){
            counter.push(i+1 + ". " + arr[i]);
        }
        console.log("The line is currently: " + counter.join(" "));
        return "The line is currently:" + counter.join(" "); 
    }
};

// 2.
let takeANumber = function(lineOP, name){
    lineOP.push(name);
    console.log(`Welcome, ${name}. You are number ${lineOP.length} in line`);
};

// 3.
let nowServing = function(lineOfPeople){
    if(lineOfPeople.length === 0){
        console.log("There is nobody waiting to be served!");
    }else{
    console.log(`Currently serving ${lineOfPeople[0]}`);
    lineOfPeople.shift();
    
    }
};


// 2. Example Usage

// const katzDeli = ["Danny", "Nayeli"];
// line(katzDeli);

const katzDeli = []

// takeANumber(katzDeli, "Danny");


takeANumber(katzDeli, "Ada") //=> Welcome, Ada. You are number 1 in line.
takeANumber(katzDeli, "Grace") //=> Welcome, Grace. You are number 2 in line.
takeANumber(katzDeli, "Kent") //=> Welcome, Kent. You are number 3 in line.

line(katzDeli) //=> "The line is currently: 1. Ada 2. Grace 3. Kent"

nowServing(katzDeli) //=> "Currently serving Ada."

line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent"

takeANumber(katzDeli, "Matz") //=> Welcome, Matz. You are number 3 in line.

line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent 3. Matz"

nowServing(katzDeli) //=> "Currently serving Grace."

line(katzDeli) //=> "The line is currently: 1. Kent 2. Matz"