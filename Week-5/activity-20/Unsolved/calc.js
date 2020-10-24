// first, make buttons work
//number buttons should have onclick event to have a function
    //function should have the number shown in result card
    //if-else statements to determine whether first number or second number(?)
// variable for array set up to do if-else for the numbers    
var firstNumber = ""
var secondNumber = ""
var operator = ""
var result = ""

$('.btn').on('click', function(){
    //function separately to call out at the beginning of click listener
        //if there is no operator, concat number
        //
    if (this.classList.contains('number'))
    {
        //return $('.btn').value;
        //console.log(this.value);

        if (operator.length)
        {
            //add another digit
            secondNumber = secondNumber + this.value
        }
        else 
        {
            //this considered the first number
            firstNumber = firstNumber + this.value
        }

        //print in "first-number" of result card
        console.log(firstNumber,secondNumber);
        
    }

// print first number in "first-number"    
// if there is an existing input after clicking first number button,
    // print second number selected in "second-number"


    else if (this.classList.contains('operator'))
    {
        operator=this.value;
        console.log($(this).text())
        op= $(this).text()
    }

    else if (this.classList.contains('equal'))
    {

        if (operator == "plus")
        {
            var result = parseInt(firstNumber) + parseInt(secondNumber);
            console.log(result);
            $("#result").html(result); //equivalent to document.getElementById().innerHTML
        } 
        else if (operator == "minus")
        {
            var result = parseInt(firstNumber) - parseInt(secondNumber);
            console.log(result);
            $("#result").html(result);
        }
        else if (operator == "times")
        {
            var result = parseInt(firstNumber) * parseInt(secondNumber);
            console.log(result);
            $("#result").html(result);
        }
        else if (operator == "divide")
        {
            var result = parseInt(firstNumber) / parseInt(secondNumber);
            console.log(result);
            $("#result").html(result);
        }
        else if (operator == "power")
        {
            var result = parseInt(firstNumber) ** parseInt(secondNumber);
            console.log(result);
            $("#result").html(result);
        }
        
    }

    else if (this.classList.contains('clear'))
    {
        firstNumber = "";
        secondNumber = "";
        operator = "";
        op = "";
        result="";
        $("#result").html(result);

    }

    //document.getElementById("first-number").innerHTML = firstNumber;
    //document.getElementById("operator").innerHTML = op;
    //document.getElementById("second-number").innerHTML = secondNumber;

    $("#first-number").html(firstNumber);
    $("#operator").html(op);
    $("#second-number").html(secondNumber);
    
})
// variables for onclick events for number buttons
// variables for +. -. *. etc
// create onclick event for equal button to show output under result card.
// create functions for multiplication/subtraction/addition/etc

