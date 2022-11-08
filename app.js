// // sonning kattasi chiqaradigan funksiya;
// let arr = [2, 1, 14, 1122, 89, 148, 1011, 46, 12, 112, 2];
// function max(arr) {
//   let son = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > son) {
//       son = arr[i];
//     }
//   }
//   return son;
// }
// console.log(max(arr));

// // Map methodini for orqali yasalishi;
// const massiv = [12, 21, 48, 45, 8, 78, 101, 2];
// let b = 10;
// let arr  = [];
// for(let i of massiv) {
//     i = b + i; 
//     let result = arr.push(i);
// }
// console.log(arr);


// let arr = ["I", "got", "Javascript", "right", "door"];
// let newarr = arr.splice();
// let arr2 = arr
// console.log(newarr);


// let arr = "salom dunyo";
// let newarr = arr.split("").reverse().join("");
// console.log(newarr);



let arr = [1, 2, 3, 4, 5, 6, 7];
let newarr = []
for(let i of arr) {
    if(i == 3){
        continue
        
    }
    newarr.push(i)
}
console.log(newarr);













