function returnParams<T>(param:T):T{
    return param;
}

returnParams<number>(43);

const params:<T>(param:T)=>T=(param)=>param;

const params2 = function<T>(params:T):T{
    return params;
}

let obj = {
    myParams:<T>(params:T):T=>params
}

let str:string= 'Aditya';
let arr:number[]= [2,3,4,5];

// Generics function decleration

type FirstElement =<T>(arr:T[])=>T;
const firstElement:FirstElement = (arr)=>{
    return arr[0];
}


// type FirstElement<T> = (arr:T[])=>T;
// const firstElement:FirstElement<number> = (arr)=>arr[0];

// console.log(firstElement(arr));


// Generic with constraints with array

type hasLength = {
    length:number;
}

function logLength<T extends hasLength>(item:T){
    console.log(item.length)
}

logLength(arr);
logLength({
    name:'aditya',
    length:23
})


type numberArrayPair<t,s> = {
    key:t;
    value:s;
}

const stringNumberPair:numberArrayPair<string,number[]>= {
    key:'aditya',
    value:[1,2]
}

const numberStringPair:numberArrayPair<number,string[]> ={
    key:12,
    value:['adi']
}

type hasId = {
    id:number
}

// here extends properties is very useful when you don't need what value you will get but centain value you when argument is passing 
function printId<T extends hasId>(id:T){
    id.id;
}

printId<object & hasId>({
    id:12
})

type types = {
    id:number;
   name:string;
   email:string;
}

let objs :keyof types ='name'

type Numeric = {
    [key:number]:string;
}

type Person ={
    name:string;
    age:number;
    address:string;
}

type paritialPerson={
    [k in keyof Person ]:keyof Person|string;
}
let personObj = {
    0:'aditya'
}
personObj[0]