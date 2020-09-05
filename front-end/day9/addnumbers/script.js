function addNumbers(numberOne,numberTwo){
    return numberOne  +  numberTwo
}



 const addBtn = document.getElementById('add-btn')

 
addBtn.onclick = () => {
    const numberOneInput = document.getElementById('num1').value
    const numberTwoInput = document.getElementById('num2').value
    const sum = addNumbers(+numberOneInput, +numberTwoInput)
    
    document.getElementById('output').innerHTML = ` ${numberOneInput} + ${numberTwoInput} = ${sum}`
}

console.log(numberOneInput);
console.log(numberTwoInput);


// myFunction()
// myFunctionTwo();
// function myFunctionTwo() {
//     console.log('from my function two');   
// }

// myFunction = () => {
// console.log("from my function");
// }

