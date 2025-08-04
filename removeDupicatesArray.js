// function removeDuplicate(arr) {
//     let newArray = [];
//     for (let item of arr) {
//         if (!newArray.includes(item)) {
//             newArray.push(item);
//         }
//     }
//     return newArray;
// };
// let array = [1, 2, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7];
// console.log(removeDuplicate(array));


function removeDuplicate(org_arr) {
    let newArr = [];

    for (let item of org_arr) {
        if (!newArr.includes(item)) {
            newArr.push(item)
        }
    }
    return newArr
};
// const array = [1,1,1,1,1]
console.log(removeDuplicate([1,1,1, 2,2,3,4,5,6,7,8,9,9,9,9]));