function Greedy(){
	/*
	 * To find the biggest set of intervals that dont overlap
	 * 1. Sort the intervals by the end times
	 * 2. Select the intervals whose start tiems are greater than the endtime of the last selected interval
	 * */
	function intervalScheduling(intervalsArray){
		intervalsArray = intervalsArray.sort((a, b)=> a.end - b.end); //n logn
		var intervals = [];
		var lastSelected = intervalsArray[0];
		intervals.push(lastSelected);
		for(let i=1;i < intervalsArray.length;i++){
			if(lastSelected.end <= intervalsArray[i].start){
				intervals.push(intervalsArray[i]);
				lastSelected = intervalsArray[i];
			}
		}
		return intervals;
	}//O(n log n)
    
	
	/*
	 * To find the maximum overlap possible and the time
	 * We are using variables simultaneous, max2 and time2 for no extra space solution
	 * */
	function findMaximumoverlapsAndTime(start, end){
		start = start.sort((a, b)=> a-b);
		end = end.sort((a, b)=> a-b);
		let maximum;
		let merge = [];
		let simultaneous = 0;
		let count = 0;
		let max = -Infinity;
		let max2 = -Infinity;
		let time2;
		let time;
		let i = 0;
		let j= 0;
		for(;i < start.length && j < end.length;){
			if(start[i] <= end[j]){
				
				if(count ==0 )
				merge[count] = 1;
				else
					merge[count] = merge[count-1] + 1;
				
				simultaneous++;
				if(simultaneous > max2){
					max2 = simultaneous;
					time2 = start[i];
				}
				if(merge[count] > max){
					max = merge[count];
					time = start[i];
				}
				i++;
			}else{
				
				if(count ==0 )
				merge[count] = -1;
				else
					merge[count] = merge[count-1] - 1;
				simultaneous--;
				if(simultaneous > max2){
					max2 = simultaneous;
					time2 = start[i];
				}
				if(merge[count] > max){
					max = merge[count];
					time = end[j];
				}
				j++;
			}
			
			count++;
		}
		
		while(i < start.length){
			
			if(count ==0 )
			merge[count] = 1;
			else
				merge[count] = merge[count-1] + 1;
			
			if(merge[count] > max){
				max = merge[count];
				time = start[i];
			}
			simultaneous++;
			if(simultaneous > max2){
				max2 = simultaneous;
				time2 = start[i];
			}
			count++;
			i++;
		}
		
		while(j < end.length){
			if(count ==0 )
			merge[count] = -1;
			else
				merge[count] = merge[count-1] - 1;
			
			if(merge[count] > max){
				max = merge[count];
				time = end[j];
			}
			simultaneous--;
			if(simultaneous > max2){
				max2 = simultaneous;
				time2 = start[i];
			}
			count++;
			j++;
		}
		
		console.log("Max overlap:: ", max," At time: ", time);
		console.log("Max overlap w/o extra space:: ", max2, "at time: ", time2);
		return max2;
	}//O(n log n) no extra space when we use just the simultaneous variable
	
	/*
	 * Function to check of the two intervals overlap
	 * */
	function areOverlaping(interval1, interval2){
		let result = false;
		if(interval1.start >= interval2.start && interval1.start <= interval2.end || interval1.start < interval2.start && interval1.end >= interval2.start){
			result = true;
		}
		if(interval2.start >= interval1.start && interval2.start <= interval1.end || interval2.start < interval1.start && interval2.end >= interval1.start){
			result = true;
		}
		
		return result;
	}
	
	/*
	 * Optimize the classes as per the periods
	 * 1. Get the maxium depth i.e. maximum number of overlap = this given the number of classes required
	 * 2. Sort ther intervals on the basis of the start times
	 * 3. Start entering the classes greedily if there is an overlap then add to the another set or new set accordingly
	 * 4. Since we already know the max overlap so search for not overlaping is fix to d so time complexity is O(n log n) not O(n^2)
	 * */
	function assignIntervalsToClasses(intervals){
		var start = [];
		var end = [];
		for(let i=0;i < intervals.length;i++){
			start.push(intervals[i].start);
		}
		for(let i=0;i < intervals.length;i++){
			end.push(intervals[i].end);
		}
		var depth = findMaximumoverlapsAndTime(start, end);
		var classes = [];
		for(let i=0;i < depth;i++){
			classes.push([]);
		}
		
		//Sort the invervals on the basis on start times
		intervals = intervals.sort((a, b)=> a.start-b.start);
		
		classes[0].push(intervals[0]);//Add 0th element greedily
		//Start greedy processing
		for(i=1;i < intervals.length;i++){
			let j=0;
			for(;j < depth;){
				if(classes[j].length && areOverlaping(intervals[i], classes[j][classes[j].length-1])){
					j++;
				}else{
					break;
				}
			}
			classes[j].push(intervals[i]);
		}//O(n) not O(n^2)
		console.log(classes);
	}//O(n log n)
	
	/*
	 * 1. Given an array of events whose value is the profit it makes and the key is the time
	 * 2. If an event occurs before or on its time then it yields profit
	 * 3. Find a way to maximise the profit. 
	 * */
	/*
	 * 1. Sort the array as per the time
	 * 2. Add the events on that time into a max heap
	 * 3. Delete max
	 * 4. Reduce the time and then push the events associated with that time and so on till the n slots are complete 
	 * */
	
	
	
	
	/**
	To find all the combinations that lead to a sum, brute force
	**/
	var indexArray = [];
        var array = [1,2,3];
        function findSummation(index, sum){
           if(sum ===0){
            console.log(indexArray.slice(0, index));
            return;
          }
           if(sum < 0){
             return;
          }
         for(let i=0;i < array.length;i++){
               if(array[i] <= sum ){
                indexArray[index] = array[i];
                findSummation(index+1, sum - array[i]);
          }
       }
     }
	
	return {
		intervalScheduling,
		findMaximumoverlapsAndTime,
		areOverlaping,
		assignIntervalsToClasses
	};
}
module.exports = {Greedy};
