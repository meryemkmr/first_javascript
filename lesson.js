// var i = 0;
// var images = ['http://lorempixel.com/400/200/', 'http://lorempixel.com/g/400/200/','http://lorempixel.com/400/200/sports/','http://lorempixel.com/400/200/sports/1/'];
// var duration = 0;
// function slideImg() {
//     document.slide.src = images[i];
//     if(i<images.length-1){
//         i++;

//     } else 
//     { i=0;
//     }
//         setTimeout('slideImg()', duration);
// }
//   window.onload = slideImg;

// var array = ['c++' , 'java', 'pyton'];
// array.push('node');
// alert(array);
// array.pop('java');
// alert(array);

// var myArray = [];

// for ( i= 0; i < 10; i +=2){
//     // myArray.push(i);
// console.log(i)
// }
// // console.log(myArray);
// 


// const getSleep = day => {
//   switch(day){
//     case 'monday':
//       return 8
//       break;
//     case 'tuesday':
//       return 7
//       break;
//     case 'wednesday':
//       return 9
//       break;
//     case 'thursday':
//       return 8
//       break;
//     case 'friday':
//       return 7
//       break;
//     case 'saturday':
//       return 10
//       break;
//     case 'sunday':
//       return 11
//       break;
//       default :
//       return 'error'
//   }
// };


// const getActualSleepHours = () =>
//   getSleep('monday') +
//   getSleep('tuesday') + 
//   getSleep('wednesday') + 
//   getSleep('thursday') + 
//   getSleep('friday') + 
//   getSleep('saturday') + 
//   getSleep('sunday');


//  const getIdealSleepHours = () => {
//    let  idealHours = 8;
//    return idealHours * 7 ;
// };
// console.log(getActualSleepHours());

// console.log(getIdealSleepHours());

// let numberClusters = [[1,2],[3,4],[5,6]];
// const target = numberClusters[2][1];
// console.log(target);


// const countries = ['Japan', 'Denmark', 'Mexico', 'Morocco'];
// countries.shift();
// console.log(countries); 
// countries =  ['England', 'Mozambique', 'Cambodia', 'Peru']; 
// console.log(countries); 


// const myArray = [6, 19, 20];
// const yourArray = [19, 81, 2];
// for (let i = 0; i < myArray.length; i++) {
//   for (let j = 0; j < yourArray.length; j++) {
//     if (myArray[i] === yourArray[j]) {
//       console.log('Both loops have the number: ' + yourArray[j])
//     }
//   }
// };

// let bobsFollowers = ['ayse','fatma','ali', 'ahmet'];
// let tinasFollowers = ['ayse','ali','melike'];
// let mutualFollowers =[];
// for (let i = 0; i<bobsFollowers.length; i++ ){
//   for( let j = 0; j<tinasFollowers.length; j++){
//     if(bobsFollowers[i] === tinasFollowers[j]){
//       console.log(mutualFollowers[i])
//     }
//   }
// }
// let input = 'turpentine and turtles';
// let vowels = ['a','e','i','u','o'];
// let resultArray = [];
// for (let i = 0; i < input.length ;i++){
//   for( let j = 0; j < vowels.length; j++){
//     if(input[i] ==='e'|| input[i]==='u'){
//       console.log(resultArray.push(input[i]));
//     }
//   }
// };
// console.log(resultArray.join('').toUpperCase());

// const timeFuncRuntime = funcParameter => {
//    let t1 = Date.now();
//    funcParameter();
//    let t2 = Date.now();
//    return t2 - t1;
// }

// const addOneToOne = () => 1 + 1;

// timeFuncRuntime(addOneToOne);
// timeFuncRuntime(() => {
//   for (let i = 10; i>0; i--){
//     console.log(i);
//   }
// });

// const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// // Create the secretMessage array below
// const secretMessage = animals.map(animal =>{
//   return animal[0];
// })

// console.log(secretMessage.join(''));

// const bigNumbers = [100, 200, 300, 400, 500];

// // Create the smallNumbers array below
// const smallNumbers = bigNumbers.map(bigNumber =>{ return bigNumber /100;
// } );
// console.log(smallNumbers);



// const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
// const foundAnimal = animals.findIndex(animal =>{
//   return animal==='elephant';
// })

// console.log(foundAnimal);
// const starsWithS = animals.findIndex(animal =>{
//   return animal.charAt(3);
// });

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some (word => {
  return word.length < 6;
}));































