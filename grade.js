//var A = 90; 
//var B = 80;
//var C = 70;
//var D = 60;
//var F = 59;
//var student= 79

//if( student > 89){
//    console.log("Your Grade Is An A" );

//} else if(student > 79 && student < 90){
//    console.log(" Your Grade Is B" );
//}else if(student > 69 && student < 80){
//    console.log("Your Grade Is C" );
//}else if(student > 60 && student < 70){
//    console.log("Your Grade Is D" );
//}else if(student < 59){
//    console.log("You Got A F" );
//}


 //   var gradeScale = function(grade) {
 //       if (grade > 99) {
 //           console.log("A+")
 //       } else if(grade < 99 && grade > 90) {
 //           console.log("A")
//        } else if (grade === 90) {
//            console.log("A-")
//        } else if (grade > 79 && grade < 90) {
//            console.log("B")
//        } else if (grade > 69 && grade < 80) {
//            console.log("C")
//        } else if (grade > 60 && grade < 70) {
//            console.log("D")
//        } else {
//            console.log("F")
//        }
//    }

//    gradeScale(50)
//    gradeScale(60)
//    gradeScale(45)
//    gradeScale(75)
//    gradeScale(100)

var gradeScale = function(grade) {

        if(typeof grade !== "number") {
           return ("ERRROR YOU ARE BREAKING THINGS");
        }

    
        if (grade > 99) {
            console.log("A+")
        } else if(grade < 99 && grade > 90) {
            console.log("A")
        } else if (grade === 90) {
            console.log("A-")
        } else if (grade > 79 && grade < 90) {
            console.log("B")
        } else if (grade > 69 && grade < 80) {
            console.log("C")
        } else if (grade > 60 && grade < 70) {
            console.log("D")
        } else {
            console.log("F")
        }
    }
    
    console.log(gradeScale("90"));
    console.log(gradeScale(90));