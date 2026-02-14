function mincost(arr)
{ 
//write your code here
	if(arr.length <= 1){
		return {message:0}
	};

	let totalMinCost = 0

while(arr.length > 1){
	arr = arr.sort((a,b) => a-b)
	
	let first = arr.shift()
	let second = arr.shift()

	let cost = first + second
	totalMinCost += cost;

	arr.push(cost)
}
// return the min cost

	return {message:totalMinCost};
  
}

module.exports=mincost;
