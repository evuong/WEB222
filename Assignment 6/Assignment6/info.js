window.onload = function() {
    var submit = document.querySelector('#signupForm');
    var error = document.querySelector('#error');
    var errorHead = document.querySelector('#errorHeader');
    var valid = true;

    submit.onsubmit = function() {
        error.innerHTML = '';
        var username = submit.username.value;
        var password = submit.password.value;
        var cpassword = submit.cpassword.value;

        //checking username length
        if (username.length < 6) {
            error.innerHTML += 'Username too short <br>';
            valid = false;
        }

        //checking if username begins with an alphabet
        if (username[0].match(/[a-zA-Z]/) === null) {
            error.innerHTML +=
                'Username needs to begin with an alphebet letter <br>';
            valid = false;
        }

        //checking password lengths
        if (password.length < 6) {
            error.innerHTML += 'Password length too short <br>';
            valid = false;
        }

        //checking if password begins with an alphabet
        if (password[0].match(/[a-zA-Z]/) === null) {
            error.innerHTML +=
                'Password needs to begin with an alphebet letter <br>';
            valid = false;
        }

        //checking if there's a number in password
        if (password.match(/\d+/) === null) {
            error.innerHTML += 'Pasword needs to have at least 1 number <br>';
            valid = false;
        }

        //checking if password has an uppercase letter
        if (password.match(/[A-Z]/) === null) {
            error.innerHTML +=
                'Password needs to have an uppercase letter <br>';
            valid = false;
        }

        //checking if passwords match
        if (!(password === cpassword)) {
            error.innerHTML += 'Passwords need to match <br>';
            valid = false;
        }

        //checking age
        var age = submit.age.value;
        if (age < 18 || age > 60) {
            error.innerHTML += 'Age must be between 18-60' + '<br>';
            valid = false;
        }

        if (valid) {
            errorHead.innerHTML = 'Everything looks good!';
        }
        if (!valid) {
            errorHead.innerHTML = 'Errors:';
            show();
        }
        return valid;
    };

    submit.onreset = function() {
        error.innerHTML = '';
        errorHead.classList.add('hidden');
        valid = true;
    };

    submit.username.onmouseover = function() {
        if (valid) {
            errorHead.innerHTML = 'Format for Username:';
            error.innerHTML = '6+ length <br> Must start with letter character';
            show();
        }
    };

    submit.username.onmouseout = function() {
        if (valid) {
            hide();
        }
    };

    submit.password.onmouseover = function() {
        if (valid) {
            errorHead.innerHTML = 'Format for Password:';
            error.innerHTML =
                '6+ length <br> Must start with letter character <br> 1+ number <br> 1+ uppercase character <br> Both passwords must match';
            show();
        }
    };

    submit.password.onmouseout = function() {
        if (valid) {
            hide();
        }
    };

    submit.cpassword.onmouseover = function() {
        if (valid) {
            errorHead.innerHTML = 'Format for Password:';
            error.innerHTML =
                '6+ length <br> Must start with letter character <br> 1+ number <br> 1+ uppercase character <br> Both passwords must match';
            show();
        }
    };

    submit.cpassword.onmouseout = function() {
        if (valid) {
            hide();
        }
    };

    function hide() {
        errorHead.innerHTML = '';
        error.innerHTML = '';
        errorHead.classList.add('hidden');
        error.classList.add('hidden');
    }

    function show() {
        errorHead.classList.remove('hidden');
        error.classList.remove('hidden');
    }
};
