"use strict";

const isPrimeNumber = (number) => {
    let isPrime = (number < 2) ? false: true;  // set default return value
    for (let i = 2; i < number; i++) {
        if ( number % i === 0 ) {
            isPrime = false;
            break;
        }
    }
    return isPrime;
};

$(document).ready( () => {
    
    $("#calculate").click( () => {
        const number = parseInt( $("#number").val() );
        if ( isNaN(number) ) {
            $("#message").text( "Please enter a number." );
        } else {
            let str = "";
            for(let i = 0; i <= number; i++)
            {
                if(isPrimeNumber(i))
                {
                    str += i;
                    str += " ";
                }
            }
            $("#message").text(str);
        }
        $("#number").focus();
        $("#number").select();
    });
    
    $("#number").focus();
});