
function All(){
    function insert(list, index, value){
        let length = list.length;
        index = index - 1;
        for(let i= length - 1;i >= index;i--){
            list[i+1] = list[i];
        }
        list[index] = value;
        return list;
    }// O(n) worse case, average insert of first n+1 will be O(1)

    function deleteOP(list, item){
        let length = list.length;
        let index;
        for(let i=0;i < length;i++){
            if(item == list[i]){
                index = i;
                break;
            }
        }
        if(!index) {
            return list;
        }
        for(let j=index;j < length -1 ;j++){
            list[j] = list[j+1];
        }
        list.pop();
        return list;
    }//O(n)

     //findBiggest in the DS.js



     //Find second largest naive 
     function findSecondLargestElementOfArray(array){
       let max = 0;
       for(let i=0;i < array.length;i++){
           if(array[max] < array[i]){
               max = i;
           }
       }
       let result = -1;
       for(let j=0;j < array.length;j++){
          if(array[j] != array[max]){
            if(result == -1){
                result = j;
            }
            if(array[result] < array[j]){
                result = j;
            }
          }
       }
       return array[result];
     }//O(n)


     //Find the second largest in a single traversal
     function getSecondLargestElement(array){
         let result = -1, largest = 0;
         for(let i=0; i < array.length;i++){
             if(array[largest] < array[i]){
                    result = largest;
                    largest = i;
             }else if(array[i]!=array[largest]){
                  if(result ==-1 || array[i] > array[result]){
                      result = i;
                  }
             }
         }
         return array[result];
     }



     //Check if array is sorted
     function checkIfArrayIsSorted(array){
         let result = true;
         for(let i=0;i < array.length - 1;i++){
             if(array[i] > array[i+1]){
                result = false;
             }
         }
         return result;
     }//O(n)


     //Reverse an Array
     function reverseArray(array){
         let low = 0, high = array.length - 1;
         while(low < high){
             let temp = array[low];
             array[low] = array[high];
             array[high] = temp;
             low++;
             high--;
         }
         return array;
     }//O(n) in time and constant space


     //Remove duplicate elements in a Sorted Array
     function removeDuplicates(array){
         let current = 1;
         for(let i=1;i < array.length;i++){
             if(array[i] != array[current-1]) {
                 array[current] = array[i];
                 current++;
             }
         }
         return {array, length: current};
     }//O(n) in time and O(1) in space extra


    //[10,8,0,0,12,0] -> [10,8,12,0,0]
     function moveZerosToTheEnd(array){
         let nonZeroCount = 0;
         for(let i=0;i < array.length;i++){
             if(array[i]!=0){
                let temp = array[i];
                array[i] = array[nonZeroCount];
                array[nonZeroCount] = temp;
                nonZeroCount++;
             }
         }
         return array;
     }


     function leftRotateArrayByOne(array){
      let temp = array[0], length = array.length;
      for(let i=1;i < length;i++){
          array[i-1] = array[i];
      }
      array[length - 1] = temp;
      return array;
     }

     function leftRotateByDInExtraSpace(array, D){
       D = D % array.length;  //If D is greater than the array length
       let length = array.length;
       for(let i=0;i < D;i++){
           let temp = [];
           for(let i=0;i < D;i++){
               temp[i] = array[i];
           }
           for(let i=D;i < length;i++){
               array[i - D] = array[i];
           }

           for(let i=0;i < D ;i++){
               array[length - D +i] = temp[i];
           }
           return array;
       }
     }//O(N) in time, theta(d) in space


     function reverseDItemsInEfficientWay(array, D){
        function reverseArrayInner(array, low, high){
            while(low < high){
                let temp = array[low];
                array[low] = array[high];
                array[high] = temp;
                low++;
                high--;
            }
        }
        reverseArrayInner(array, 0, D-1);
        reverseArrayInner(array, D, array.length-1);
        reverseArrayInner(array, 0, array.length-1);
        return array;
     }


     //[7,10,4,3,6,5,2] -> [10,6,5,2], the element shall be biggest amongst the right side elements
     //Last element is always a leader as there is nothing on the right side of it.
     function leadersInArray(array){
        let length = array.length - 1;
        let currentLeader = array[length];
        let leaderArray = [];
        leaderArray.push(currentLeader);
        for(let i=length-1;i >=0 ;i--){
             if(currentLeader < array[i]){
                 currentLeader = array[i];
                 leaderArray.push(currentLeader);
             }
        }
        return leaderArray;
     }//O(n)\
     
     function leaderInArrayBruteForce(array){
        let length = array.length;
        for(let i=0;i < length;i++){
            let flag = true;
            for(let j=i+1;j < length;j++){
                if(array[j] >= array[i]){
                    flag = false;
                    break;
                }
            }
            if(flag){
                console.log(array[i]);
            }
        }
     }

    // array[i] - array[j], j > i
    function findMaxDifferenceBetweenElementofArrayBruteForce(array){
        let length = array.length;
        let maxDiff = -Infinity;
        for(let i=0;i < length;i++){
            for(let j=i+1;j < length;j++){
                 if(maxDiff < array[j] - array[i]){
                     maxDiff = array[j] - array[i];
                 }
            }
        }
        return maxDiff;
    }


    function maxDiffEfficient(array){
       //Keep track of the min element and the max difference
       let length = array.length;
       let diff = array[1] - array[0];
       let minElement = Math.min(array[0], array[1]);

       for(let j=1;j < length;j++){
          diff = Math.max(diff, array[j] - minElement);
          minElement = Math.min(minElement, array[j]);
       }
        return diff;
    }//Theta(n), Theta(1) aux space



    function findFrequencyOfElementsInSorteArray(array){
        let frequency = 1;
        let i = 1;
        let length = array.length;
        while(i < length){
             while(i < n && a[i] == a[i-1]) {
                 frequency++;
                 i++;
             }
             console.log(array[i-1], " : ", frequency);
             frequency = 1;
             i++;
        }
        if(length ==1 || array[length-1] != array[length-2]){
            console.log(array[length-1], " : ", 1);
        }
    }//Theta(n) as i is always incremented


    //Array element is the price and the index is the day
    //The buy and sell can be done many times
    function stockPriceBuyAndSell(array){
       let result = 0;
       for(let i=1;i < array.length;i++){
           if(array[i] > array[i-1]){
            result  = result + array[i] - array[i-1];
           }
       }
       return result;
    }

    //Maximum sum in a circular array


    //Majority element brute force
    function mojorityElementBruteForce(array){
        let length = array.length;
        
        for(let i=0;i < length ;i++){
            let count = 0;
            for(let j=i+1;j < length;j++){
                if(array[i]==array[j]){
                  count++;
                }
           }
           if(count > length/2){
               return length;
           }
        }
        return -1;
    }

    //Majotity element efificient
    //assume that 0th element is the majority element
    //match it and increment the count else decrement,when the count becomes zero
    //make the majority element as the ith i.e. the last element that caused the count to become 0
    //the element will be the majority element and then make sure that it having a count value of > n/2
    function majorityElementEfficient(array){
        let result = 0, count = 1, length = array.length;
        for(let i=1;i < length;i++){
            if(array[result]==array[i]){
                count++;
            }else{
                count--;
            }
            if(count == 0){
                result = i;
                count = 1;
            }
        }
        count = 0;
        for(let j=0; j<length;j++){
            if(array[result] == array[j]){
                count++;
            }
        }
        if(count > length/2){
            return result;
        }
        else{
            return -1;
        }
    }//Theta(n) in time



    function maxSumArray(array){
        let currentMax = array[0];
        let result = array[0];
        for(let j=1;j < array.length;j++){
            currentMax = Math.max(array[j], array[j] + currentMax);
            result = Math.max(currentMax, result);
        }
        return result;
    }


    function waterTrap(array){
        let leftMax = [], length = array.length;
        leftMax[0] = array[0];
        for(let i=1;i < length;i++){
           leftMax[i] = Math.max(leftMax[i-1], array[i]);
        }
        let rightMax = [];
        rightMax[length-1] = array[length-1];
        for(let j=length-2;j >=0;j--){
            rightMax[j] = Math.max(array[j], rightMax[j+1]);
        }
        let result = 0;
        for(let k=1;k< length-1;k++){ //we can only take the elements between 0 th and last items
            result = result + (Math.min(leftMax[k], rightMax[k]) - array[k]);
        }
        return result;
    }//Theta(n), [5, 0, 6,2 3]



    function slidingWindowTechnique(array, W){
        let sum = 0, result = 0;
        let length = array.length;
        for(let i=0;i < W;i++){
            sum = sum + array[i];
        }
        result = sum;
        for(let j=W;j < length;j++){ //j is the last index in the window
            sum = sum + array[j] - array[j-W];
            result = Math.max(result, sum);
        }
        return result;
    }//Theta(n) in time, O(1) in auxiliary space


    function printFirstNegativeNumberInWindow(array, W){
        let firstNegativeIndex = -1;
        for(let i=0;i < W;i++){
            if(array[i] < 0){
                firstNegativeIndex = i;
                break;
            }
        }
        console.log(firstNegativeIndex);

        for(let i=W;i < array.length;i++){
            firstNegativeIndex = -1; 
            for(let j= i- W + 1;j <= i;j++){
                 if(array[j] < 0 ){
                    firstNegativeIndex = j;
                    break;
                 }
             }
             console.log(firstNegativeIndex);
        }
    }

    function findFirstNegativeNumberInWindowEfficient(array, W){
        var {
            enQueue,
            deQueue,
            front,
            size,
            isEmpty
        } = require('./QueueADT').QueueADT();
        let j=0;
        let i=0;
        debugger;
        while(j < array.length){
            if(array[j] < 0){
                enQueue(array[j]);
            }
            if(j - i + 1 == W){
                if(size()!=0){
                    console.log(front());
                }else{
                    console.log(-1);
                }
                if(array[i]==front()){
                    deQueue();
                }
                i++; //Window size is reached so please upudate the i to the next item
                j++;
            }else{
                j++; //Window size is not reached to only increment the j
            }
            
        }

    }//Theta(n) in time and O(n) in memory based how many are negative that are saved in the Queue actually


    function findNumberOfAnagrams(stringMain, targetString){
        let aMap = {};
        for(let i=0;i < targetString.length;i++){
            if(aMap[targetString[i]] != undefined){
                aMap[targetString[i]] = aMap[targetString[i]] + 1;
            }else{
                aMap[targetString[i]] = 1;
            }
        }
        let j=0;
        let i = 0;
        let count = Object.keys(aMap).length;
        let answer = 0;
        while(j < stringMain.length){
            if(aMap[stringMain[j]] != undefined){
                aMap[stringMain[j]] = aMap[stringMain[j]] - 1;
                if(aMap[stringMain[j]] == 0){
                    count--;
                }
            }
            if(j - i + 1 == targetString.length){
              if(count == 0){
                answer++;
              }
              if(aMap[stringMain[i]] != undefined){
                aMap[stringMain[i]] = aMap[stringMain[i]] + 1;
                if(aMap[stringMain[i]] == 1){
                    count++;
                }
              }
              i++;
              j++;
            }else{
                j++;
            }
        }
        console.log(answer);
    }//Theta(n1 + n2) in time,  O(n2)

    function slidingWindoWWithBruteForce(array, W){
        let length = array.length;
        let result = 0;
        for(let i=0;i < length-W + 1 ;i++){
           let windowSum = 0;
            for(let j=i;j < i+W;j++){
                windowSum = windowSum + array[j];
           }
           result = Math.max(windowSum, result);
        }
        return result;
    }


    //Return as soon we get the given sum.
    function subArrayWithaGIvenSumBruteForce(array, SUM){
        let length = array.length;
        for(let i=0;i < length;i++){
            let localSum = 0;
            for(let j=i;j < length;j++){
                localSum = localSum + array[j];
                if(localSum == SUM){
                    return true;
                }
            }
        }
        return false;
    }//O(n^2) when the SUM is not even found

    function subArrayWithAGivenSumTweeked(array, SUM){
        let start = 0, end = 0;
        let runningSum = array[start];
        let length = array.length;
        while(end < length-1 ){
            
            if(runningSum < SUM) {
                end++;
                runningSum = runningSum + array[end];
            }else if(runningSum > SUM) {
                runningSum = runningSum - array[start];
                start++;
            } 
            if(runningSum == SUM){
                return true;
            }
            console.log(runningSum, start, end);
          
        }
        return false;
    }



    function subArrayGivenSum(array, SUM){
         let start = 0, length = array.length;
         let runningSum = 0;
         for(let j=0;j < length;j++){
            runningSum = runningSum + array[j];
            while(SUM < runningSum){
                runningSum = runningSum - array[start];
                start ++; 
            }
            if(runningSum == SUM){
                return true;
            }
         }
         return false;
    }//O(n) in time, space O(1) constant subArrayWithAGivenSumTweeked([4,8,12,5],0);


    function getSumPrefix(array, start, end){
        let result = 0;
        for(let i=start; i <= end; i++){
            result = result + array[i]
        }
        return result;
    }//Theta(sned - start + 1), O(n) when start is 0 and end is length-1


    function getSumPrefixEfficient(array, start, end){
        function prepareSumArray(array){
            let sumArray = [];
            let length = array.length;
            sumArray.push(array[0]);
            for(let j=1;j < length;j++){
                sumArray.push(sumArray[j-1] + array[j]);
            }
            return sumArray;
        }

        function findGetSum(sumArray, start, end){
             if(start == 0){
                 return sumArray[end];
             } else{
                 return sumArray[end] - sumArray[start-1];
             }
        }
        return {getSumPrefixEfficient, findGetSum};
    }//Theta(1), Theta(n) in space only once 


    function equilibriumBruteForce(array){
        //Eqilibrium element is the element whose
        //Right elements sum is equal to the left elements sum
        let length = array.length;
        for(let j=0; j< length ;j++){
            let leftSum = 0;
            for(let i=0;i < j;i++){
                leftSum = leftSum + array[i];
            }
            let rightSum = 0;
            for(let k=j+1;k < length;k++){
                rightSum = rightSum + array[k];
            }
            if(leftSum == rightSum){
                return j;
            }
        }
        return -1;
    }

    function equilibriumEfficient(array){
        /*
        Discussion - 
        we can have the prepopulated prefix prefArray and suffix array suffixArray
        then traverse the given array and for every non extreme element check if the
        prefixArray[i-1] == suffixArray[i+1]
        for the left most element check if the suffixArray[1] == 0
        for the right most element check if the prefixArray[length - 2] == 0

        OR - 
        //Calculate the prefix array on the go and find the suffix sum via substracting the element repeatedly
        */
       let runningPerfixValue = 0, runningSuffixValue = 0, arraySum = 0, length = array.length;
       for(let i=0;i < length;i++){
        runningSuffixValue = runningSuffixValue + array[i];
       }
       
       for(let j=0;j < length;j++){
           runningSuffixValue = runningSuffixValue - array[j];
           if(runningPerfixValue == runningSuffixValue){
               return array[j];
           }
           runningPerfixValue = runningPerfixValue + array[j];
       }
       return false;
    }//O(n), theta(n), space is constant [3,4,8,-9,9,7]- returns index of element 8 i.e. 2


    function findArrayPartitionInThreeEqualSumParts(array){
        let pos1 = -1;//last index of the first partition
        let pos2 = -1;//first index of the third partition
        let prefixArray = [];
        let length = array.length;
        prefixArray.push(array[0]);
        for(let i=1;i < length;i++){
            prefixArray.push(array[i] + prefixArray[i-1]);
        }
        let suffixArray = [];
        let lastSum = 0;
        for(let j=length-1;j >=0 ;j--){
            lastSum = lastSum + array[j];
            suffixArray[j] = lastSum;
            
        }
        let i = 0, j = length -1;
        let totalsum = 0;
        let exists = false;
        for(let i=0;i < length;i++){
            totalsum = totalsum + array[i];
        }
        console.log(prefixArray, suffixArray);
        totalsum = totalsum/3;
        while(i < j - 1){//to make sure that there is atleast one element left afte the prefix and suffix sum match
            if(prefixArray[i] == totalsum){
                pos1 = i;
            }
            if(suffixArray[j] == totalsum){
                pos2 = j;
            }

            if(pos1 != -1 && pos2 != -1){//try and check if the remaining part of the array has the sum/3 value
               if(suffixArray[pos1+1] - suffixArray[pos2] == totalsum){
                exists = true;
               } else{
                exists = false;
               }
            }
            if(prefixArray[i] > suffixArray[j]){
                j--
            } else{
                i++;
            }
        }

        if(exists){
            console.log('partition 1');
            for(let i=0;i <= pos1;i++){
                console.log(i);
            }
            console.log('partition 2');
            for(let i=pos1+1;i < pos2;i++){
                console.log(i);
            }
            console.log('partition 3');
            for(let i=pos2;i < length;i++){
                console.log(i);
            }
        }
    }

    //Maxumim appearing element
    /**
     * two range arrays are given [1, 2, 4], [4, 5, 7]
     * => [1,2,3,4], [2,3,4,5], [4,5,6,7];
     * ****/
    function getMaxAppearingElementBruteForce(arrayLeft, arrayRight){
        let length = arrayLeft.length;
        let frequency = [];
        let maxIndex = -Infinity;
        for(let i=0;i < length;i++){
            for(let j=arrayLeft[i];j <= arrayRight[i];j++){
                  if(maxIndex < j){
                    maxIndex = j;
                  }
                  if(!frequency[j]){
                    frequency[j] = 1;
                  } else{
                    frequency[j] = 1 + frequency[j];
                  }
            }
        }
        let result = 0;
        for(let i=0;i < maxIndex;i++){
            if(!frequency[result]){
                frequency[result] = 0;
            }
            if((frequency[i] > frequency[result])){
                result = i;
            }
        }
        return result;
    }


    function maxAppearingElementEfficient(leftArray, rightArray){
        let length = leftArray.length;
        let frequency = [];
        let maxIndex = 0;
        for(let i=0;i < length;i++){
            if(frequency[leftArray[i]] == undefined){
                frequency[leftArray[i]] = 1;
            } else {
                frequency[leftArray[i]] = frequency[leftArray[i]] + 1;
            }

            if(frequency[rightArray[i] + 1] == undefined){
                frequency[rightArray[i] + 1] = - 1;
            } else {
                frequency[rightArray[i] + 1] = frequency[rightArray[i]] - 1;
            }
            if(maxIndex < rightArray[i]){
                maxIndex = rightArray[i];
            }
        }
        let runningLeft = 0;
        let prefixArray = [];
        for(let i=0;i < maxIndex;i++){
            if(frequency[i] == undefined){
                frequency[i] = 0;
            }
            runningLeft = runningLeft  + frequency[i];
            prefixArray[i] = runningLeft;
        }
        console.log(prefixArray);


        let result = 0;
        for(let i=0;i < maxIndex;i++){
            if(prefixArray[result] < prefixArray[i]){
                result = i;
            }
        }
        return result;
    }



    return {
        insert,
        deleteOP,
        removeDuplicates,
        leftRotateByDInExtraSpace,
        findSecondLargestElementOfArray,
        getSecondLargestElement,
        leftRotateArrayByOne,
        reverseArray,
        reverseDItemsInEfficientWay,
        leadersInArray,
        leaderInArrayBruteForce,
        maxDiffEfficient,
        findFrequencyOfElementsInSorteArray,
        maxSumArray,
        stockPriceBuyAndSell,
        waterTrap,
        slidingWindowTechnique,
        slidingWindoWWithBruteForce,
        subArrayGivenSum,
        subArrayWithAGivenSumTweeked,
        getSumPrefixEfficient,
        equilibriumEfficient,
        findArrayPartitionInThreeEqualSumParts,
        getMaxAppearingElementBruteForce,
        findFirstNegativeNumberInWindowEfficient
    };
}
module.exports =  All;
