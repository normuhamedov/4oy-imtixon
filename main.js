// // -- 5

// let obj1 = {name: "Eshmat" ,age:20 }
// let obj2 = {name: "Toshmat" ,age:30 }
// function fn(item1 , item2) {
//     if(item1.age >= item2.age){
//         console.log(item1.name);  
//     }else{
//         console.log(item2.name);
//     }  
// }
// fn(obj1, obj2);

// // --6

// let arr = [2,4,6,7,true,false,null,undefined];
// let sum = 0;
// for (const i of arr) {
//     sum += i ;
//     console.log(sum);   
// }

// // - 7-

// function fn() {
//     let size = 6
//     const arr = [];
//     function addObject(index) {
//       if (index < size) {
//         let name = prompt(`${index + 1}- so'zni kiriting:`);
//         arr.push({ name });
//         addObject(index + 1);
//       }
//     }
//     addObject(0);
//     return arr.map(item => item.name);
// }
// console.log(fn());

// // --- 8

function users(id, name , email , address) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.address = address;
}
let user1 = new users("1", "Eshmat" , "eshmat@gmail.com" , "Tashkent")
let user2 = new users("2", "Toshmat" , "toshmat@gmail.com" , "Xiva")
let user3 = new users("3", "Bolta" , "bolta@gmail.com" , "Nukus")
console.log(user1);
console.log(user2);
console.log(user3);
