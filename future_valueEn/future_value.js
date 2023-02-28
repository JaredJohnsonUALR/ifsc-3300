"use strict";

const $ = selector => document.querySelector(selector);

const getNaNErrorMsg = lbl => `${lbl} must be a valid number.`;
const getNegativeErrorMsg = lbl => `${lbl} must be a number greater than zero.`;
const getMaxErrorMsg = (lbl,max) => `${lbl} has a max of ${max}.`;

const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
};

const calculateFV = (investment,rate,years) => 
{
    // calulate future value
    let futureValue = investment;
    for (let i = 1; i <= years; i++ ) {
        let interest = futureValue * rate / 100
        futureValue = futureValue + interest;
    }
    return futureValue.toFixed(2);
};

/*
const processEntries = () => {
    const investment = parseFloat($("#investment").value);
    const rate = parseFloat($("#rate").value);
    const years = parseInt($("#years").value);

    if(isNaN(investment))
    {
        alert(getNaNErrorMsg("Investment"));
        focusAndSelect("#investment");
    }
    else if(isNaN(rate))
    {
        alert(getNaNErrorMsg("Rate"));
        focusAndSelect("#rate");
    }
    else if(isNaN(years))
    {
        alert(getNaNErrorMsg("Years"));
        focusAndSelect("#years");
    }
    else if (investment <= 0)
    {
        alert(getNegativeErrorMsg("Investment"));
        focusAndSelect("#investment");
    }
    else if (rate <= 0)
    {
        alert(getNegativeErrorMsg("Rate"));
        focusAndSelect("#rate");
    }
    else if (years <= 0)
    {
        alert(getNegativeErrorMsg("Years"));
        focusAndSelect("#years");
    }
    else if (investment > 100000)
    {
        alert(getMaxErrorMsg("Investment", "100,000"));
        focusAndSelect("#investment");
    }
    else if (rate > 15)
    {
        alert(getMaxErrorMsg("Rate", "15"));
        focusAndSelect("#rate");
    }
    else if (years > 50)
    {
        alert(getMaxErrorMsg("years", "50"));
        focusAndSelect("#years");
    }
    else 
    {
        $("#future_value").value = calculateFV(investment,rate,years);
    }
};
*/

document.addEventListener("DOMContentLoaded", () => 
{
    $("#calculate").addEventListener("click", () => {
        const investment = parseFloat($("#investment").value);
        const rate = parseFloat($("#rate").value);
        const years = parseInt($("#years").value);

        if(isNaN(investment))
        {
            alert(getNaNErrorMsg("Investment"));
            focusAndSelect("#investment");
        }
        else if(isNaN(rate))
        {
            alert(getNaNErrorMsg("Rate"));
            focusAndSelect("#rate");
        }
        else if(isNaN(years))
        {
            alert(getNaNErrorMsg("Years"));
            focusAndSelect("#years");
        }
        else if (investment <= 0)
        {
            alert(getNegativeErrorMsg("Investment"));
            focusAndSelect("#investment");
        }
        else if (rate <= 0)
        {
            alert(getNegativeErrorMsg("Rate"));
            focusAndSelect("#rate");
        }
        else if (years <= 0)
        {
            alert(getNegativeErrorMsg("Years"));
            focusAndSelect("#years");
        }
        else if (investment > 100000)
        {
            alert(getMaxErrorMsg("Investment", "100,000"));
            focusAndSelect("#investment");
        }
        else if (rate > 15)
        {
            alert(getMaxErrorMsg("Rate", "15"));
            focusAndSelect("#rate");
        }
        else if (years > 50)
        {
            alert(getMaxErrorMsg("years", "50"));
            focusAndSelect("#years");
        }
        else 
        {
            $("#future_value").value = calculateFV(investment,rate,years);
        }
    });
    $("#investment").focus();
});
