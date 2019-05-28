function dayName(date) {
	const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday",
                         "Thursday", "Friday", "Saturday"];
	return daysOfTheWeek[date.getDay()];
}

//Returns a greeting for a given date
function greeting(date){
	return `Hello, world! Happy ${dayName(date)}!!!`;
}