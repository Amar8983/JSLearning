function marriageEligibility(gender,age)
{
    var eligible=(gender==="Male" &&age>=21 || gender==="female" &&age>=18 || gender === "others" && age>= "invalid "  )?`Hey ${gender} youre age is ${age} eligible for Marriage`:`Hey ${gender} youre age is ${age} not eligible for Marriage`;
    // console.log(eligibleMale);
    console.log(eligible);
}
marriageEligibility("Male",17);
marriageEligibility("Male",25);
marriageEligibility("female",28);
marriageEligibility("female",16);
marriageEligibility("others",35);
marriageEligibility("others",41);