function partition(arr, low, high) {
    const pivot = arr[high];
    let i = low;
    for (let j = low; j < high; ++j) {   
        if (arr[j] < pivot) {
            [arr[i], arr[j]] = [arr[j], arr[i]]; 
            i++;
        }
    }
    [arr[i], arr[high]] = [arr[high], arr[i]]; 
    return i;
}

function quickSort(arr, low, high) {
    if (low < high) {
        const pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);    
        quickSort(arr, pi + 1, high);   
    }
}

let arr = [22, 32, 4, 56, 76, 78, 12];
quickSort(arr, 0, arr.length - 1);
console.log(arr); 


function isSorted(arr){
    for(let i = 0; i < arr.length; ++i){
        if(arr[i] > arr[i + 1]) return false;
    }
        return true;
}

console.log(isSorted([1,2,3,4,5,6]));