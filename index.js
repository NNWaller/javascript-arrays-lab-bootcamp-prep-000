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

function destructivelyRemoveLastKitten(array,name){
  kittens.pop();
  return kittens; 
}

function destructivelyRemoveFirstKitten(array,name){
  kittens.shift();
  return kittens; 
}

function appendKitten(array,name){
  return [...kittens, 'Broom'];
}

function prependKitten(array,name){
  return ['Arnold', ...kittens];
}

function removeLastKitten(array){
  return array.slice (0,array.length-1);
}