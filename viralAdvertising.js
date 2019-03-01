// HackerLand Enterprise is adopting a new viral advertising strategy. When they launch a new product, they advertise it to exactly  people on social media.

// On the first day, half of those  people (i.e., ) like the advertisement and each shares it with  of their friends. At the beginning of the second day,  people receive the advertisement.

// Each day,  of the recipients like the advertisement and will share it with  friends on the following day. Assuming nobody receives the advertisement twice, determine how many people have liked the ad by the end of a given day, beginning with launch day as day .

// For example, assume you want to know how many have liked the ad by the end of the  day.

// Day Shared Liked Cumulative
// 1      5     2       2
// 2      6     3       5
// 3      9     4       9
// 4     12     6      15
// 5     18     9      24

function viralAdvertising(n) {
let totalLikes=0;
let totalPpl=5;
	for(let i=0;i<n;i++){
		let likes = Math.floor(totalPpl/2);
		totalLikes +=likes;
		totalPpl =likes*3;
	}
return totalLikes;
}
console.log(viralAdvertising(5))