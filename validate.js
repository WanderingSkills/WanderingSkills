// Main function to handle all validations.
function validate(params) {
    var errors = [];
    pushError(errors, validateName(params.name));
    pushError(errors, validateEmail(params.email));
    pushError(errors, validateNationalCode(params.nationalcode));
    pushError(errors, validateGender(params.gender));
    pushError(errors, validatePassoword(params.password1, params.password2));
    pushError(errors, validateBio(params.bio));

    if (errors.length > 0) {
        printErrors(errors);
        return false;
    }

    return true;
}


function validateName(field) {
    var error = "";

    if (field.value.length === 0) {
        error = "The name field empty.";
        setFailureStyle(field);
    } else {
        field.style.border = "2px solid green";
        setSuccessStyle(field);
    }

    return error;
}

function validateEmail(field) {
    var error = "";

    if (field.value.indexOf("@") == -1 || field.value.indexOf(".") == -1) {
        error = "Email format is not valid.";
        setFailureStyle(field);
    } else {
        setSuccessStyle(field);
    }

    return error;
}

function validateGender(field) {
    var error = "";

    if (field.value.length == 0) {
        error = "Gender should be selected.";
    }

    return error;
}

function validatePassoword(password1, password2) {
    var error = "";

    if (password1.value.length < 6) {
        error = "Password must be more than 5 characters.";

        setFailureStyle(password1);
        setFailureStyle(password2);
    } else if (password1.value != password2.value) {
        error = "Your passwords are not match.";

        setFailureStyle(password1);
        setFailureStyle(password2);
    } else {
        setSuccessStyle(password1);
        setSuccessStyle(password2);
    }

    return error;
}

function validateBio(field) {
    var error = "";

    if (field.value.length < 15) {
        setFailureStyle(field);
        error = "You should write your bio more than 15 characters.";
    } else {
        setSuccessStyle(field);
    }

    return error;
}

function validateNationalCode(field) {
    var error = "";

    if (field.value.length < 11) {
        error = "National code should have 11 numbers";
        setFailureStyle(field);
    } else {
        setSuccessStyle(field);
    }

    return error;
}

function setSuccessStyle(field) {
    field.style.backgroundColor = "white";
    field.style.border = "2px solid green";
    field.style.color = "black";
}

function setFailureStyle(field) {
    field.style.backgroundColor = "red";
    field.style.color = "white";
}

function pushError(errorsArray, error) {
    if (error != "") {
        errorsArray.push(error);
    }
}

function printErrors(errors) {
    document.getElementById("errors-place").innerHTML = "";

    for (i = 0; i < errors.length; i++) {
        var listItem = document.createElement("li");
        listItem.appendChild(document.createTextNode(errors[i]));
        document.getElementById("errors-place").appendChild(listItem);
    }
}/**
 * Created by Parnaz on 06/04/2016.
 */
