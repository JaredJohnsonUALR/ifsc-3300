"use strict";

const getRandomNumber = max => {
    let rand = null;
    if (!isNaN(max)) {
        rand = Math.random();
        rand = Math.floor(rand * max);
        rand = rand + 1;
    }
    return rand;
};

const calculateFutureValue = (investment, rate, years) => {
    let futureValue = investment;
    for (let i = 1; i <= years; i++ ) {
        futureValue += futureValue * rate / 100;
        if (futureValue == Infinity)
        {
            alert("Future value = Infinity\n i = " + i)
            i = years; 
        }
    }
    //alert("Max value of javascript number is: " + Number.MAX_VALUE)
    futureValue = futureValue.toFixed(2);
    //futureValue = formatFutureValue(futureValue);
    return futureValue;
};

const formatFutureValue = futureValue => 
{
    let decimal = futureValue.indexOf(".")
    let formatted = "$";

    //if only hundreds place
    if (decimal < 4)
    {
        formatted += futureValue;
    }
    //if thousands place
    else if(decimal < 7)
    {
        formatted += futureValue.substring(0,decimal-3);
        formatted += ",";
        formatted += futureValue.substring(decimal-3);
    }
    //if millions place
    else
    {
        formatted += futureValue.substring(0,decimal-6);
        formatted += ",";
        formatted += futureValue.substring(decimal-6,decimal-3);
        formatted += ",";
        formatted += futureValue.substring(decimal-3);
    }

    return formatted;
};

const getDate = () =>
{
    const currentDate = new Date();

    let date = "Today is ";

    if (currentDate.getMonth()+1 < 10) date += "0";
    date += currentDate.getMonth()+1;
    date += "/";
    if (currentDate.getDate() < 10) date += "0";
    date += currentDate.getDate();
    date += "/" ;
    date += currentDate.getFullYear();
    date += " at ";
    date += currentDate.getHours();
    date += ":";
    date += currentDate.getMinutes();

    return date;
};

$(document).ready( () => {
    $("#calculate").click( () => {
        //const investment = parseFloat($("#investment").val());
        //const rate = parseFloat($("#rate").val());
        //const years = parseFloat($("#years").val());

        investment = getRandomNumber(50000);
        $("#investment").val(investment);

        rate = getRandomNumber(15);
        $("#rate").val(rate);

        years = getRandomNumber(50);
        $("#years").val(years);

        let isValid = true;
        if (isNaN(investment) || investment <= 0) {
            $("#investment").next().text("Must be a valid number greater than 0.");
            isValid = false;
        } else {
            $("#investment").next().text("");
        }

        if (isNaN(rate) || rate <= 0) {
            $("#rate").next().text("Must be a valid number greater than 0.");
            isValid = false;
        } else {
            $("#rate").next().text("");
        }

        if (isNaN(years) || years <= 0) {
            $("#years").next().text("Must be a valid number greater than 0.");
            isValid = false;
        } else {
            $("#years").next().text("");
        }

        if (isValid) {
            const usCurrency = new Intl.NumberFormat("en-us", {style:"currency", currency:"USD"});
            $("#future_value").val(usCurrency.format(calculateFutureValue(investment, rate, years)));
        }
    });
    $("#date").text(getDate());
    $("#investment").focus();
});