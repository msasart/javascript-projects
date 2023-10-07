function reverse(str) {
    let reversed = '';

    for (let i = 0; i < str.length; i++) {
        reversed = str[i] + reversed;
    }

    return reversed;
}

//Example 1 - Write a function makeLine(size) that returns a line with exactly size hashes.
function makeLine(size){
    let line = '';
    for (let i = 0; i < size; i++){
        line += "#";
    }
return(line);
}
console.log(makeLine(5));

console.log("");

//Example 2
function createSquare(size) {
  let square = '';
  for (let i = 0; i < size; i++) {
    square += (makeLine(size)+'\n'); 
  }
return square.slice(0,-1);
}
console.log(createSquare(5));

console.log("");

//Example 3
function makeRectangle(width, height) {
    let rectangle = '';
      for (let i = 0; i < height; i++) {
        rectangle += (makeLine(width)+'\n');
      }
  return rectangle.slice(0, -1);
  }
  console.log(makeRectangle(5, 3));

  console.log("");

//Example 4
  function makeDownwardStairs(height){
      let stairs = '';
      for (let i = 0; i < height; i++){
          stairs += (makeLine(i+1) + '\n');
      }
      return stairs.slice(0, -1);
  }
  console.log(makeDownwardStairs(5));
  console.log("");
//Example 5 
  function makeSpaceLine(numSpaces, numChars){
    let spaceLine = '';
    for (let i = 0; i < numSpaces; i++){
        spaceLine += " ";
    }
    let chars = makeLine(numChars);

    return `${spaceLine}${chars}${spaceLine}`;
}
console.log(makeSpaceLine(3, 5));
console.log("");
//Example 6

function makeIsoscelesTriangle(height) {
    let triangle = '';
    for (let i = 0; i < height; i++) {
      triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
    }
    return triangle.slice(0, -1);
  }
  console.log (makeIsoscelesTriangle(5));
  console.log("");

  //Example 7
function makeDiamond(height) {
    let top = makeIsoscelesTriangle(height);
    let bottom = reverse(top);

    return`${top}\n${bottom}`;

    }
console.log(makeDiamond(5));