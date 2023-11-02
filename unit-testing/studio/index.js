
let launchcode = {
  organization: "nonprofit",
  executiveDirector: "Jeff",
  programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
  percentageCoolEmployees: 100,
  launchOutput: function (num){
    let parts = {
      2: "Launch",
      3: "Code",
      5:"Rocks"
    };
    let result = "";
    for(let modulus in parts) {
    if (num % Number(modulus) === 0) {
        if (modulus == 5 && result.length > 0){
          result += " ";
        }
      result += parts[modulus];
    } 
  //   if (num % 3 === 0) {
  //   result += "Code";
  //   } 
  //  if (num % 5 === 0) {
  //     if (result.length > 0){
  //       result += " ";
  //     }
  //   result += "Rocks";
  }
    if (result.length === 0){
      result = "Rutabagas! That doesn't work.";
    
    } else {
    result += "!";
}
    if (result === "Launch Rocks!"){
      result += "(CRASH!!!!)";
    }
    return result;
    }
};

module.exports = launchcode;

