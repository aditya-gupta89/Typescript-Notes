// Map Polyfill 

Array.prototype.myMap = function(callback){
    let arr =[];
    for(let i=0;i<this.length;i++)
    {
        arr.push(callback(this[i],i,this));
    }
    return arr;
}

let arr = [1,2,4,5,6,7,4,2,3];

console.log(arr.myMap((item)=>item*2));


Array.prototype.myFilter = function(callback){
    let arr = [];
    for(let i=0;i<this.length;i++){
        if(callback(this[i],i,this))
            arr.push(this[i]);
    }
    return arr;
}

console.log(arr.myFilter((item)=>item>4));

// reduce method 
arr = [1,2,3,4,5]
console.log(arr.reduce((acc,curr)=>acc+curr,0));

Array.prototype.myReducer = function(callback,initialValue){
    let acc=initialValue;
    for( i=0;i<this.length;i++){
        acc = acc!==undefined ?callback(acc,this[i],this):this[0];
    }
    return acc;
}

console.log("polyfill  :-   ",arr.myReducer((acc,curr)=>acc+curr));
