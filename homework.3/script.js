// 1. Напишите функцию checkString(arg), который принимает аргумент строкового типа.
//  Функция должна вывести в консоль первую букву аргумента.

// 	Пример:
// 	checkString(‘Test’)

// 	Результат:
// 	T
//  1.
// function checkString(arg){
//         return arg[0];
// }
// console.log(checkString("test"));

// 2. Напишите функцию checkMiddleValue(num1,num2), которая получает в качестве аргумента два числовых значения. Функция должна вернуть их среднее значение. 
// * Доп задание. доработайте функцию таким образом, чтобы выводимое значение округлялось до десятой части

// Пример:
// 	let result = checkMiddleValue(10,20)
// console.log(result)

// 	Результат:
// 	15
	// 2.

// function checkMiddleValue(num1,num2){
//      return (num1 + num2) /2

// }
// console.log(checkMiddleValue(10,20));


// 3.Напишите функцию changeValue(arg1, arg2), которая принимает два аргумента (булевый тип, число). Функция, в зависимости от первого аргумента (булевого типа) изменить число по следующему правилу: 
// В случае, если первый аргумент будет true, функция должна вернуть квадрат числа. В противном случае - его корень.

// Пример:
// 	let result = changeValue(false,25)
// console.log(result)

// 	Результат:
// 	5
// 3.
// function changeValue(arg1, arg2){
//     if(arg1 === true){
//        return  arg2 **2
//     } else {
//          return Math.sqrt(arg2)
//     }

// }
// console.log(changeValue(false,25))


// 4. Напишите функцию countString(arg), которая принимает в качестве аргумента строковый тип и возвращает количество букв. Функция должна игнорировать буквы: а, о, у, с
// * Доп задание. доработайте функцию таким образом, чтобы условие включало верхний и нижний регистр (А а, О о, У у, С с)

// Пример:
// 	let result = countString(“строка”)
// console.log(result)

// 	Результат:
// 	3


// 4., 
// function countString(arg) {
//     let count = 0; 
//     for (let i = 0; i < arg.length; i++) { 
//       let letter = arg[i]; 
//       if (
//         letter === "А" ||
//         letter === "а" ||
//         letter === "О" ||
//         letter === "о" ||
//         letter === "У" ||
//         letter === "у" ||
//         letter === "С" ||
//         letter === "с"
//       ) {
//         continue;

//       } else {
//         count++; 
//       }
//     }
//     return count; 
// }
//  console.log(countString("строка"));


// Напишите функцию createQuence(num), которая получает в качестве аргумента числовое значение. 
// Функция должна построить последовательность строк в консоле, количество которых зависит от аргумента по следующему примеру:
// 	createQuence(5)


// function createQuence(num) {
//     for (let i = 1; i <= num; i++) {
//       let str = '';
//       for (let j = 1; j <= i; j++) {
//         str += '*';
//       }
//       console.log(str);
//     }
//   }
//   createQuence(4);