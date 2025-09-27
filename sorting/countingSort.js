function counting_sort(arr){
    const length = arr.length;
  let max = Math.max(...arr);//9
  let min = Math.min(... arr);//5
  let range = max - min + 1;//5
  let countingArray = new Array(range).fill(0);
  

  for(const item of arr){
    countingArray[item - min]++;
  }

  //[3,1,3,3,2]
    for (let i = 1; i < countingArray.length; ++i) {
    countingArray[i] += countingArray[i - 1];
  }
  //[3,4,7,10,12]

  const newArray = new Array(length).fill(0);

  for (let i = length - 1; i >= 0; --i) {
    const elem = arr[i]; 

    const idx = countingArray[elem - min] - 1;
    newArray[idx] = elem;
    countingArray[elem - min]--;
  }
  //[0,0,0,0,0,0,0,0,0,0,0,0]
  return newArray;
}


console.log(counting_sort([5,7,6,8,5,7,8,9,5,8,9,7]));

console.log([5,7,6,8,5,7,8,9,5,8,9,7].length)