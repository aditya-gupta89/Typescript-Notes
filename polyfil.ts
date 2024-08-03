let arr:number[] = [2,3,5,6,4,23,3,15,77,56,24,45]

// Polyfill for Filter Method 
let filter = <T>(arr:T[],predictor:(item:T)=>boolean):T[]=>{
    let temp:T[]= [];
   arr.forEach((item:T)=>{
    if(predictor(item))
   temp.push(item);
   })
    return temp;
}

const predictor = (item:number):boolean=> item>15;
console.log(filter(arr,predictor));



export {};

// Polyfill for Map Method 

let map= <T>(arr:T[],modifier:(item:T)=>T):T[]=>{
    let temp:T[]= [];
   arr.forEach((item:T)=>{
   temp.push(modifier(item));
   })
    return temp;
}

const modifier = (item:number):number=> item*2;
console.log(map(arr,modifier));

export {};
