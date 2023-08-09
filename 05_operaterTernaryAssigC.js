function maleMarriageEligibility(gender,age,boyName)
{
    var eligibleMale=(gender==="Male" &&age>=21)?`Hey ${boyName} you are eligible for Marriage`:`Hey ${boyName} you are not eligible for Marriage`;
    // console.log(eligibleMale);
    return eligibleMale;
}
var male1 =maleMarriageEligibility("Male",22,"Bill Gates");
 var male2=maleMarriageEligibility("Male",17,"Steve jobs");

 console.log(male1);
 console.log(male2);

 console.log('======================================================================');
 function femaleMarriageEligibility(gender,age,girlName)
 {
     var eligibleFemale=(gender==="Female" &&age>=18)?`Hey ${girlName} you are eligible for Marriage`:`Hey ${girlName} you are not eligible for Marriage`;
     // console.log(eligibleFemale);
     return eligibleFemale;
 }
 var female1 =femaleMarriageEligibility("Female",16,"Jenifer");
  var female2=femaleMarriageEligibility("Female",27,"Malinda Gates");
 
  console.log(female1);
  console.log(female2);