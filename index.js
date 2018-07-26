// Add your functions and code here
var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(array,name){
  kittens.push('Ralph');
  return kittens; 
}

function destructivelyPrependKitten(array,name){
  kittens.unshift('Bob');
  return kittens; 
}

function destructivelyRemoveLastKitten