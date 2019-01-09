/********************************************************************* * WEB222 SSA – Assignment 01
* I declare that this assignment is my own work in accordance with
* Seneca Academic Policy. No part of this assignment has been
* copied manually or electronically from any other source
*(including web sites) or distributed to other students.

* Name: Edward Vuong Student ID: 120246186 Date: Sept 24, 2018 
*********************************************************************/ 


function displayStudentInfo (name, program, courses, hasJob) {

	function checkCourse (a) {
		if (a === 1) {
			return " course"; 
		}
		return " courses";
	}

	function checkJob (b) {
		if (b) {
			return "do";
		}
		return "don't";
	}		

	console.log("My name is " + name + " and I'm in the " + program + " program. I'm taking " + courses + checkCourse (courses) + " this semester, and I " + checkJob (hasJob) + " have a part-time job.");

}





function calculateAgeStats (birthDate) {
	
	function hours (date) {
		var time = (Date.now() - dob)/(1000*60*60);
		return Math.trunc(time);
	}

	console.log("You were born on " + birthDate.toDateString() + " and have been alive for approximately " + hours (birthDate) + " hours.");

}





function convertTempFrom(value, scale) {
	
	if (scale === "F" || scale === "f") {
		console.log ((value-32)/1.8 + " C");
		
	}

	else if (scale === "C" || scale === "c" || scale === undefined) {
		console.log (value*1.8+32 + " F");
	}

	else {
		console.log ("ERROR: Unknown Scale - " + scale);
	}

}





function displayOddEven(rangeStart, rangeEnd) {

	for (i = rangeStart; i <= rangeEnd; i++) {
		if (i % 2 == 0) {
			console.log(i + " is even");
		}
		else {
			console.log(i + " is odd");
		}
	}

}





var findLargest = function (...nums) {
	console.log(Math.max(...nums));
};





function calculateAverage (...nums) {
	var sum = 0; 
	for (var i = 0; i < nums.length; i++) {
		sum += nums[i];
	}
	console.log(sum / nums.length);
	
}





function formatGrades (...nums) {
	var letters = [];

	for (var i = 0; i < nums.length; i++) {
		var letterFromScore = function (nums) {
			if (nums >= 50 && nums <= 60) {
				return 'D';
			}
			else if (nums >= 60 && nums <= 70) {
				return 'C';
			}
			else if (nums >= 70 && nums < 80) {
				return 'B';
			}
			else if (nums >= 80 && nums < 90) {
				return 'A';
			}
			else if (nums >= 90 && nums <= 100) {
				return 'A+';
			}
		};
		letters.push (letterFromScore(nums[i]));
	}
	console.log(letters);
}

