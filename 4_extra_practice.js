// Many algorithms have multiple valid solutions.
// If you have time, try coming up with a different approach/solution for reversing an array

// YOUR CODE HERE

var arr = [8,6,7,5,3,0,9];
var newarr = []
var placeholder = 0;
for(var i = 0; i < arr.length; i++){
    placeholder = arr.length - i - 1;
    newarr[i] = arr[placeholder];
}
console.log(newarr);
