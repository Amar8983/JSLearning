let professor = {
    professorName: "DHIRAJ",
    employeeID: 2233,
    subject:"WEB DEVELOPMENT",
    Address: "PUNE",
    state: "MAHARASHTRA",
    degrees: {
        graduation:"ENGGINERING",
        postGraduation:"CSC",
        doctrade:"PHD",
        programingCertificate:"Adv Computing",
        extraCertification: "WEB DEVELOPMENT",
        getDegrees: function(){

            console.log(`Professor Degrees : ${this.graduation},${this.postGraduation},${this.doctrade},${this.programingCertificate},${this.extraCertification}`);
        }

    },
    certificates : ["Hacker Rank particiation","Certificate in IFE course","Certification in Advance Programming"]
}
professor.degrees.getDegrees();

 professor.totalExperiance = "14Years";

console.log(professor);
