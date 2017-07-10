// This for loop will count from 1-100 in the console.
for (var i = 1; i <= 100; i++) {
	if (i%3 === 0) {  
		if (i%5 === 0) {
			console.log("fizzbuzz"); // If the number is a multiple of both 3 and 5 log "fizzbuzz".
		}else {
			console.log("fizz"); // If the number is a multiple of only 3 log "fizz".
		}	
	}else if (i%5 === 0) {
		console.log("buzz") // If the number is a multiple of only 5 log "buzz".
	}else {
		console.log(i) // If the number is not a multiple of 3 or 5 log the value of i.
	}
}