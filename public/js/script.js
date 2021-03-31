// =============================================
// faundation default
// =============================================
$(document).foundation();
// =============================================


// =============================================
// GLOBAL SCOPES
let fieldCheck;
let guardianFieldCheck;
let isMinor;
let guardianDetailsSection = document.querySelector("#guardianDetailsSection");
let guardianRequiredError = document.querySelector("#guardianRequiredError");

    // questions and answers for skill test + math random to pick one question and answer ffrom the array of objects
    let questionAndAnswers = [
        {question: "Is drinking raw milk good for you?", answer: "yes"},
        {question: "Is it legal to sell raw milk cheese in Ontario?", answer: "yes"},
        {question: "How much milk per day for adults(732ml)", answer: "3"},
        {question: "Does milk have sugar?", answer: "NO"},
        {question: "Milk and milk products are the best source of", answer: "Calcium"},
    ];

    let randomNumBw0to4 = Math.floor(Math.random()* 5);

    let question = questionAndAnswers[randomNumBw0to4].question;

    let answer = questionAndAnswers[randomNumBw0to4].answer;

    skillTest.innerText = question;

// =============================================
// =============================================


// =============================================
// function to check name fields using regex
function hasCharsCheck(dataToCheck) {
    let pattern = /^[A-Z]+|[a-z]+$/;
    if (pattern.test(dataToCheck.field.value)) {
        return true;
    }
    return false;
}
// =============================================
// =============================================


// =============================================
// function to check email field using regex
function hasEmailCheck(dataToCheck) {
    let pattern = /^[a-zA-Z0-9]{2,}[._-]?[a-zA-Z0-9]+[@]{1}[a-zA-Z]{2,}[-]?[a-zA-Z]+[.]{1}[a-zA-Z]{2,}$/;
    if (pattern.test(dataToCheck.field.value)) {
        return true;
    } else {
        return false;
    }
}
// =============================================
// =============================================


// =============================================
// function to check phone number field using regex
function hasPhoneCheck(dataToCheck) {
    // validate 
    let phoneNumber = /^[(]?[0-9]{3}[)]?[-. ]?[0-9]{3}[-. ]?[0-9]{4}$/;
    if (phoneNumber.test(dataToCheck.field.value)) {
        return true;
    } else {
        return false;
    }
}
// =============================================
// =============================================


// =============================================
// function to check date of birth
function hasDateCheck(dataToCheck) {
    let datePattern = /^[0-9]{4}[-][0-9]{2}[-][0-9]{2}$/;
    if (datePattern.test(dataToCheck.field.value)) {

        // validate YYYY-MM-DD to above 16
        let dateSpliter = dataToCheck.field.value.split("-");
        let 
        today = new Date(),
        dd = today.getDate(),
        mm = today.getMonth(), 
        yyyy = today.getFullYear();
        mm++;

        if (yyyy - dateSpliter[0] > 16) {
            isMinor = false;
            guardianDetailsSection.style.display = "none";
        } else if (yyyy - dateSpliter[0] == 16 && mm - dateSpliter[1] >= 0 && dd - dateSpliter[2] >= 0) {
            isMinor = false;
            guardianDetailsSection.style.display = "none";
        } else {
            isMinor = true;
            guardianDetailsSection.style.display = "block";
            guardianRequiredError.innerText = "Please fill up guardian details";
        }
        return true;
    } else {
        return false;
    }
    
}
// =============================================
// =============================================


// =============================================
// function to check checkbox
function hasEntryCheck() {
    if (termsAndConditions.checked) {
        return true;
    } else {
        return false;
    }
}
// =============================================
// =============================================


// =============================================
// function to check address
function hasAddressCheck() {
    if (homeAddress.value != "") {
        return true;
    } else {
        return false;
    }
}
// =============================================
// =============================================


// =============================================
// function to check postal code
function hasPostalCheck(dataToCheck) {
    // validate 
    let postalCode = /^[a-zA-Z]{1}[0-9]{1}[a-zA-Z]{1}[ -]?[0-9]{1}[a-zA-Z]{1}[0-9]{1}$/;
    if (postalCode.test(dataToCheck.field.value)) {
        return true;
    } else {
        return false;
    }
}
// =============================================
// =============================================



// =============================================
// function to check question and answer
function hasQnACheck(dataToCheck) {
    if( dataToCheck.field.value.toLowerCase() == answer.toLowerCase()) {
        return true;
    } else {
        return false;
    }
}
// =============================================
// =============================================


// function to reset fields upon error
function errorsReset() {
    fieldCheck.forEach((inputField) => {
        inputField.error.innerText = "";
    });
    if(isMinor == true) {
        guardianFieldCheck.forEach((inputField) => {
            inputField.error.innerText = "";
        });
    }
}
// =============================================
// =============================================


// =============================================
// a function to run when Submit button clicked
function formChecker(e) {
    // prevent button from reloading the page
    e.preventDefault();

    let errorsDetected = 0;
    // reset all errors upon mistake
    errorsReset();

    // automated error check
    fieldCheck.forEach((inputField) => {
        if (inputField.checker(inputField) == false) {
            inputField.error.innerText = inputField.msg;
            inputField.error.style.visibility = "visible";
            inputField.field.focus();
            errorsDetected += 1;
        }
    });

    if(isMinor == true) {
        guardianFieldCheck.forEach((inputField) => {
            if (inputField.checker(inputField) == false) {
                inputField.error.innerText = inputField.msg;
                inputField.error.style.visibility = "visible";
                inputField.field.focus();
                errorsDetected += 1;
            } else {
                dateOfBirthError.innerText = "";
                guardianRequiredError.innerText = "";
            }
        });
    }

    // check form
    if (errorsDetected > 0) {
    } else {
        $("#successRevealBtn").trigger('click');
    }
}
// =============================================
// =============================================


// =============================================
// function to reset form data
function formReset(e) {
    // prevent button from reloading the page
    e.preventDefault();
    guardianDetailsSection.style.display = "none";
    dateOfBirthError.innerText = "";
    dateOfBirthError.innerText = "";

    fieldCheck.forEach((inputField) => {
        inputField.field.value = "";
    });
    if(isMinor == true) {
        guardianFieldCheck.forEach((inputField) => {
            inputField.field.value = "";
        });
    }
}
// =============================================
// =============================================


// =============================================
// function to run upon page load
function initForm() {
    // grabbing our input and error fields
    let firstName = document.querySelector("#firstName");
    let firstNameError = document.querySelector("#firstNameError");

    let lastName = document.querySelector("#lastName");
    let lastNameError = document.querySelector("#lastNameError");

    let dateOfBirth = document.querySelector("#dateOfBirth");
    let dateOfBirthError = document.querySelector("#dateOfBirthError");

    let emailId = document.querySelector("#emailId");
    let emailIdError = document.querySelector("#emailIdError");

    let phoneNum = document.querySelector("#phoneNum");
    let phoneNumError = document.querySelector("#phoneNumError");

    let homeAddress = document.querySelector("#homeAddress");
    let homeAddressError = document.querySelector("#homeAddressError");

    let city = document.querySelector("#city");
    let cityError = document.querySelector("#cityError");

    let postalCode = document.querySelector("#postalCode");
    let postalCodeError = document.querySelector("#postalCodeError");

    let termsAndConditions = document.querySelector("#termsAndConditions");
    let termsAndConditionsError = document.querySelector("#termsAndConditionsError");
    
    let correctMsg = document.querySelector("#correctMessage");

    let guardianFirstName = document.querySelector("#guardianFirstName");
    let guardianFirstNameError = document.querySelector("#guardianFirstNameError");

    let guardianLastName = document.querySelector("#guardianLastName");
    let guardianLastNameError = document.querySelector("#guardianLastNameError");

    let guardianEmailId = document.querySelector("#guardianEmailId");
    let guardianEmailIdError = document.querySelector("#guardianEmailIdError");

    let guardianPhoneNum = document.querySelector("#guardianPhoneNum");
    let guardianPhoneNumError = document.querySelector("#guardianPhoneNumError");
    
    let skillTest = document.querySelector("#skillTest");
    let skillTestInput = document.querySelector("#skillTestInput");
    let skillTestError = document.querySelector("#skillTestError");

    // declaring our data object
    fieldCheck = [
        {field: firstName, checker: hasCharsCheck, error: firstNameError, msg: "Please enter a valid first name"},
        {field: lastName, checker: hasCharsCheck, error: lastNameError, msg: "Please enter a valid last name"},
        {field: dateOfBirth, checker: hasDateCheck, error: dateOfBirthError, msg:"Please enter a valid age"},
        {field: emailId, checker: hasEmailCheck, error: emailIdError, msg: "Please enter a valid email id"},
        {field: phoneNum, checker: hasPhoneCheck, error: phoneNumError, msg: "Please enter a valid phone number"},
        {field: homeAddress, checker: hasAddressCheck, error: homeAddressError, msg:"Please enter a valid address"},
        {field: termsAndConditions, checker: hasEntryCheck, error: termsAndConditionsError, msg:"Please check our rules and regulations"},
        {field: skillTestInput, checker: hasQnACheck, error: skillTestError, msg:"Please enter a valid answer"},
        {field: city, checker: hasCharsCheck, error: cityError, msg:"Please enter a valid city"},
        {field: postalCode, checker: hasPostalCheck, error: postalCodeError, msg:"Please enter a valid postal code"},
    ];

    guardianFieldCheck = [
        {field: guardianFirstName, checker: hasCharsCheck, error: guardianFirstNameError, msg: "Please enter a valid first name"},
        {field: guardianLastName, checker: hasCharsCheck, error: guardianLastNameError, msg: "Please enter a valid last name"},
        {field: guardianEmailId, checker: hasEmailCheck, error: guardianEmailIdError, msg: "Please enter a valid email id"},
        {field: guardianPhoneNum, checker: hasPhoneCheck, error: guardianPhoneNumError, msg: "Please enter a valid phone number"},
    ];
    // target button(s) and event listener
    let formSubmit = document.querySelector("#formSubmit");
    formSubmit.addEventListener("click", formChecker);

    // Cancel button to reset form
    let formCancel = document.querySelector("#formCancel");
    formCancel.addEventListener("click", formReset);
}
// =============================================
// =============================================


// =============================================
// function runs upon page load
document.addEventListener("DOMContentLoaded", () => {
    initForm();
});
// =============================================
// =============================================



// =============================================
// =============================================
// =============================================
// =============================================
// PHOTOBOOTH
// =============================================



// =============================================
