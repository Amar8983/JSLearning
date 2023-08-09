var interviewEligibility = function(gradScore, hscScore, sscScore, candidateName ){
    var result = gradScore>=70 || hscScore>= 80 || sscScore >=90 
     ? `Congrats ${candidateName} you are eligible for TCS interview.`
     :  `Unfortunately ${candidateName} you are not eligible for interview.`;
     console.log(result);
 }
 
 interviewEligibility(80, 86, 90, 'Amar');
 interviewEligibility(70, 65, 55, 'Akash');
 interviewEligibility(60, 79, 88, 'Sager');


