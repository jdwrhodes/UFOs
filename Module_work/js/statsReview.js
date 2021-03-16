var someVariable = "Hello Everyone!";

console.log(someVariable);

var someArray = [0,1,2,3,4,5,6,7,8,9];

function mean(array){

    var sumOfElements = 0
    var numberOfElements = 0

    for(var i = 0; i < array.length; i++){ // i++ means i = i + 1, this is setting how you wish to interate in the for loop
        debugger;
        sumOfElements = sumOfElements + array[i]
        numberOfElements = numberOfElements + 1
    }
    return (sumOfElements/numberOfElements)
}

console.log(mean(someArray))