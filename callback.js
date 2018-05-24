// JS promises

let x = 0;

async function test() {
  x += await 2;
  console.log(x);
}

test()

x += 1;
console.log(x);

// function addExtra(price) {

// return new Promise(function(resolve, reject) {
// if (price > 2) reject('Price cannot exceed 3')

// setTimeout(function() {
// resolve(price + 1)
// }, 1000)
// })
// }

// addExtra(1)
// .then(addExtra)
// .then(addExtra)
// .then(function(newPrice) {
// console.log(newPrice);
// }).catch(function(error) {
// console.log(error);
// })



// Classic callback
// function addExtra(price, cb) {
//   if (price > 2) {
//     cb(false, 'Price cannot exceed 3')
    // return to avoid executing the rest of the function.
  //   return
  // }

//   setTimeout(function() {
//     cb(price + 1)
//   }, 1000)
// }

// addExtra(1, function(newPrice, error) {
//   if (error) {
//     console.log(error)
//     return
//   }
//   addExtra(newPrice, function(newPrice2, error) {
//     if (error) {
//       console.log(error)
//       return
//     }
//     addExtra(newPrice2, function(newPrice3, error) {
//       if (error) {
//         console.log(error)
//         return
//       }
//       console.log(newPrice3)
//     })
//   })
// })
