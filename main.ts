// Cho một mảng số nguyên đã được sắp xếp, 
// hãy tìm chỉ số của lần xuất hiện đầu tiên( hoặc cuối cùng) của một số nhất định. 
// Nếu phần tử không có trong mảng, hãy thông báo "Không tìm thấy".


let findFirstOccurrence = (arr: number[], target: number): number | string => {
    let left = 0;
    let right = arr.length - 1;
    ;
    while (left <= right) {
        let midNumber = Math.floor((right + left) / 2);
        if (arr[midNumber] == target) {
            return midNumber;
        }
        else if (arr[midNumber] < target) {
            left = midNumber + 1;
            // tìm cuối:
            // left++; 
            // midNumber = Math.floor((right + left) / 2);
            
        } else {
            right = midNumber - 1;
            // tìm cuối:
            // right -= 1; 
            // midNumber = Math.floor((right + left) / 2);
        }
    }
    return `No number ${target} in the array`;
}

console.log(findFirstOccurrence([2, 5, 5, 5, 6, 6, 8, 9, 9, 9], 5))
