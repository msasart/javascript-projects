// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){
 test("Testing launchcode", function (){
   expect(launchcode.organization).toBe("nonprofit");
 });
 test("Check Executive Director", function(){
   expect (launchcode.executiveDirector).toBe("Jeff");
   });
test ("Checks program", function(){
  expect(launchcode.programsOffered).toContain("Web Development")
  expect(launchcode.programsOffered).toContain("Data Analysis")
  expect(launchcode.programsOffered).toContain("Liftoff")
  expect(launchcode.programsOffered.length).toBe(3);
  });
test("Check percentage of Cool Employees", function(){
  expect(launchcode.percentageCoolEmployees).toBe(100);
  });

   
//1
test("When passed a number that is ONLY divisible by 2", function(){
  expect(launchcode.launchOutput(2)).toBe("Launch!")});
//2
test("Check if number are divisible by 3", function(){
  expect(launchcode.launchOutput(3)).toBe("Code!")});
//3
test("When passed a number that is ONLY divisible by 5", function(){
  expect(launchcode.launchOutput(5)).toBe("Rocks!")});
//4
test("When passed a number that is divisible by 2 AND 3", function(){
  expect(launchcode.launchOutput(6)).toBe("LaunchCode!")});
//5
test("When passed a number that is divisible by 3 AND 5", function(){
  expect(launchcode.launchOutput(15)).toBe("Code Rocks!")});
//6
test("When passed a number that is divisible by 2 AND 5", function(){
  expect(launchcode.launchOutput(10)).toBe("Launch Rocks!(CRASH!!!!)")});
//7
test("When passed a number that is divisible by 2, 3, AND 5", function(){
    expect(launchcode.launchOutput(30)).toBe("LaunchCode Rocks!")});
//8
test("When passed a number that is NOT divisible by 2, 3, or 5", function(){
  expect(launchcode.launchOutput(1)).toBe("Rutabagas! That doesn't work.")});

 });
  // Write your unit tests here!