function selectionSort(arr){
    for(let i = 0; i < arr.length - 1; ++i){
        let minIndex = i;
            for(let j = i + 1; j < arr.length ; ++j){
                if(arr[j] < arr[minIndex]){
                    minIndex = j;
                }
            }
            if(minIndex != i){
                    [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]];

            }
    } return arr;
}

let arr = [5,2,4,1,3]

console.log(selectionSort(arr))