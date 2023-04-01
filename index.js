// write a function find Multificatin take a Number(4) as the input secondNumber is 3 multiplication done firstNumber.then addition operator thirdnumber 10 adds.then fourthNumber 2 Divided and a reminder fifthNumber 5 subtraction.that should be returned.
function mindGame(inputNumber) {

    const firstNumber = 3;
    const secondNumber = 10;
    const thirdNumber = 2;
    const fourthNumber = 5;

    const multiplication = inputNumber * firstNumber;

    const sum = multiplication + secondNumber;

    const divided = sum / thirdNumber;

    const subtraction = divided - fourthNumber;
    return subtraction;

}

//2 write a function where input a string, then string lengths convert to a number,if number is divisible by 2 with no  remainder,it is even.in the case, number divide by 2 equals to 1,hence, the number is odd.that should be returned //
function evenOdd(string) {
    const length = string.length;
    const firstname = length % 2;
    if (firstname === 0) {
        return ('even');
    }
    else {
        return ('odd');
    }
}
// 3 give a function isLGSeven then seattle inputnumber and get a number 7 .if substraction more then 7 count 2 or return substraction//

function isLGSeven(isLessOrGreaterthanSeven) {
    const substraction = isLessOrGreaterthanSeven - 7;
    if (substraction < 7) {
        return substraction
    }
    const result = isLessOrGreaterthanSeven * 2
    return result;
}

// 4 show numbers less than zero  is baddata using the function and show big number is good data.that should be returned//
function findingBadData(numbers) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        if (element < 0) {
            count = count + 1;
        }
    }
    return count;
}
//5 using the function match all three friends jems must be added and if james above 1000.2000 must be deducted that should be returned//

function gemsToDiamond(firstfriend, secondfriend, thirdriend) {
    const firstgems = 21;
    const secondgems = 32;
    const thirdgems = 43;
    const multiplyone = firstfriend * firstgems;
    const multiplytwo = secondfriend * secondgems;
    const multiplythree = thirdriend * thirdgems;
    const sum = multiplyone + multiplytwo + multiplythree;
    if (sum < 1000) {
        return sum;
    }
    const result = 2000 - sum;
    return result;
}



