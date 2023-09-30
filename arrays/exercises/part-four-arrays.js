let holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];
let holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];
let concat = [];
let slice = [];
let reverse = [];
let reverse2 = [];
let sort = [];
//Explore the methods concat, slice, reverse, and sort to determine which ones alter the original array.
concat = holdCabinet1.concat(holdCabinet2);
console.log(concat); //this combines the arrays.

slice = holdCabinet1.slice(holdCabinet2);
console.log(slice); // this does not print holdCabinet2.

reverse = holdCabinet1.reverse();
reverse2 = holdCabinet2.reverse();
console.log(reverse);
console.log(reverse2); //this reverses the order of the arrays

sort = holdCabinet1.sort();
sort = holdCabinet2.sort();
console.log(sort);
//1) Print the result of using concat on the two arrays. Does concat alter the original arrays? Verify this by printing holdCabinet1 after using the method.

//2) Print a slice of two elements from each array. Does slice alter the original arrays?

//3) reverse the first array, and sort the second. What is the difference between these two methods? Do the methods alter the original arrays?
