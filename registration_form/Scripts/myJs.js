// set the span tag hidden
let msg = document.getElementById("msg");
msg.style.display = "none";
let msg2 = document.getElementById("msg2");
msg2.style.display = "none";
let msg3 = document.getElementById("msg3");
msg3.style.display = "none";
let msg4 = document.getElementById("msg4");
msg4.style.display = "none";
let msg5 = document.getElementById("msg5");
msg5.style.display = "none";
let msg6 = document.getElementById("msg6");
msg6.style.display = "none";

/*set min date*/
//var date = new date();
//var tdate = date.getdate();
//var month = date.getmonth() + 1;
//if (tdate < 10) {
//    tdate = '0' + tdate;
//}
//if (month < 10) {
//    month = '0' + month;
//}
//var year = date.getfullyear();
//var maxdate = year + "-" + month + "-" + tdate;
//document.getelementbyid("date").setattribute("max", mindate);//set min check-in date
//document.getElementById("date2").setAttribute("min", minDate);//set min check-out date

// first name validation
function validatefName(result) {
    if (!result.match(/^[A-Za-z\s]+$/)) {
        document.getElementById("fname").style.borderColor = "red";
        document.getElementById("fname").style.border = "2px solid red";
        msg.style.display = "block";
        document.getElementById("message").innerHTML = "use only alphabet";
    }
    else {
        document.getElementById("fname").style.border = "none";
        msg.style.display = "none";
    }


}
// valiate lname
function validatelName(result) {
    if (!result.match(/^[A-Za-z\s]+$/)) {
        document.getElementById("lname").style.borderColor = "red";
        document.getElementById("lname").style.border = "2px solid red";
        msg.style.display = "block";
        document.getElementById("message").innerHTML = "use only alphabet";
    }
    else {
        document.getElementById("lname").style.border = "none";
        msg.style.display = "none";
    }


}

//Email validation
function checkEmail(result) {
    var emailRegex = /^[a-zA-z]+[a-zA-Z0-9]+[@@]{1}gmail.com$/;
    if (!emailRegex.test(result.toLowerCase())) {

        document.getElementById("email").style.borderColor = "red";
        document.getElementById("email").style.border = "2px solid red";
        msg2.style.display = "block";
        document.getElementById("message2").innerHTML = "email should be in form details@gmail.com";

    }
    else {
        document.getElementById("email").style.border = "none";
        msg2.style.display = "none";
    }
}
//password validation
function checkPassword(result) {
    let regex = /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{10,16}$/;
    if (!regex.test(result)) {
        document.getElementById("pwd").style.borderColor = "red";
        document.getElementById("pwd").style.border = "2px solid red";
        msg2.style.display = "block";
        document.getElementById("message2").innerHTML = "password should contain one special character one capital letter in it with a length more than 9";

    }
    else {
        document.getElementById("pwd").style.border = "none";
        msg2.style.display = "none";
    }
}
//phone number validation
function checkPnumber(result) {
    if (result.length != 10) {
        document.getElementById("phoneno").style.borderColor = "red";
        document.getElementById("phoneno").style.border = "2px solid red";
        msg3.style.display = "block";
        document.getElementById("message3").innerHTML = "Phone number must be of 10 digits";
    }
    else {
        document.getElementById("phoneno").style.border = "none";
        msg3.style.display = "none";
    }
}

// Aadhar number validation
function checkadhrno(result) {
    if (isNaN(result)) {
        document.getElementById("adharno").style.borderColor = "red";
        document.getElementById("adharno").style.border = "2px solid red";
        msg3.style.display = "block";
        document.getElementById("message3").innerHTML = "Only Numeric allowed";
    }
    if (result.length != 12) {
        document.getElementById("adharno").style.borderColor = "red";
        document.getElementById("adharno").style.border = "2px solid red";
        msg3.style.display = "block";
        document.getElementById("message3").innerHTML = "Aadhar number must be of 12 digits";
    }

    else {
        document.getElementById("adharno").style.border = "none";
        msg3.style.display = "none";
    }
}

// date validation
function checkDate(result) {
    console.log(result);
    let date_input = result;
    let entered_date = new Date(date_input);
    let min_date = new Date("1900-01-01");
    let max_date = new Date();
    if (entered_date > max_date) {
        msg4.style.display = "block";
        document.getElementById("message4").innerHTML = "please enter date between 1900 to today's date.";
        return false;
    }
    else if (entered_date > min_date && entered_date < max_date) {
        msg4.style.display = "none";
        return true;
    }
    else if (entered_date < min_date) {
        msg4.style.display = "block";
        document.getElementById("message4").innerHTML = 'please enter date greater than 1900';
        return false;
    }

    //let max_date = new Date(1900 - 01 - 01);
    //var today = new Date();
    //var validMinDate = new Date(
    //    today.getFullYear() - 18,
    //    today.getMonth(),
    //    today.getDate(),
    //    today.getHours(),
    //    today.getMinutes()
    //);
    //if (date_input > validMinDate) {
    //    msg4.style.display = "block";
    //    document.getElementById("message4").innerHTML = "please enter date between 1900 to today's date.";
    //    return false;
    //}
    //else if (date_input < max_date) {
    //    msg4.style.display = "none";
    //    return true;
    //}
    //else {
    //    msg4.style.display = "block";
    //    document.getElementById("message4").innerHTML = 'please enter date greater than 1900';
    //    return false;
    //}



}

//function checkRadio() {
//    var getSelectedValue = document.querySelector('input[name="inlineRadioOptions"]:checked');
//    if (getSelectedValue == null || getSelectedValue == undefined || getSelectedValue == "") {
//        var radioButtons = document.getElementsByName("inlineRadioOptions");
//        msg6.style.display = "block";
//        document.getElementById("message6").innerHTML = 'please select courses first';
//        return false;
//    }
//    else {
//        msg6.style.display = "none";
//    }
//}

//dropdown validation
function checkDropdown(result) {
    if (result === "") {
        document.getElementById("select").style.borderColor = "red";
        document.getElementById("select").style.border = "2px solid red";
        msg5.style.display = "block";
        document.getElementById("message5").innerHTML = "Please select room type";
    }
    else {
        document.getElementById("select").style.border = "none";
        msg5.style.display = "none";
    }
}

//for on submit validation add 'required' to every field


function checksum() {
     var getSelectedValue = document.querySelector('input[name="inlineRadioOptions"]:checked');
    if (document.getElementById("fname").value == "") {
        msg.style.display = "block";
        document.getElementById("message").innerHTML = "please fill first name";
    }
    else if (document.getElementById("lname").value == "") {
        msg.style.display = "block";
        document.getElementById("message").innerHTML = "please fill last name";
    }
    else if (document.getElementById("email").value == "") {
        msg2.style.display = "block";
        document.getElementById("message2").innerHTML = "please fill email";
    }
    else if (document.getElementById("pwd").value == "") {
        msg2.style.display = "block";
        document.getElementById("message2").innerHTML = "please fill password";
    }
    else if (document.getElementById("phoneno").value == "") {
        msg3.style.display = "block";
        document.getElementById("message3").innerHTML = "please fill phone no";
    }
    else if (document.getElementById("adharno").value == "") {
        msg3.style.display = "block";
        document.getElementById("message3").innerHTML = "please fill Aadhar no ";
    }

     //else if (getSelectedValue == null || getSelectedValue == undefined || getSelectedValue == "") {
     //   var radioButtons = document.getElementsByName("inlineRadioOptions");
     //   msg6.style.display = "block";
     //   document.getElementById("message6").innerHTML = 'please select courses first';
     //   return false;
     //       }
    
     else if (document.getElementById("date").value == "") {
        msg4.style.display = "block";
        document.getElementById("message4").innerHTML = "please fill check-in date";
    }
    else if (document.getElementById("select").value == "") {
        msg5.style.display = "block";
        document.getElementById("message5").innerHTML = "please select room type";
    }
}

