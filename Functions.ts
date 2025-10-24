//

function abcd(name:string, age:number, cb:(arg:string)=>void){
   cb("hey");
}

abcd("Kunal",20,(arg:string)=>{
    
    console.log(arg);
});


// ... rest/spread

function friends(...args:string[]){
    
}

friends("Kunal","shubham","Raj")