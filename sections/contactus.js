$(document).ready(function () {

    const $contactForm = $('#contact-form');
    const $submitForm = $('#submit-form');

    $contactForm.on('submit', function(e) {
        // e.preventDefault();

        let $userData = {
            usernameValue: $('#name').val(),
            userphoneValue: $('#phone').val(),
            usermessageValue: $('#message').val(),
        };

        // console.log($userData.usernameValue);

        $.post("send.php", {
            name: $userData.usernameValue,
            phone: $userData.userphoneValue,
            message: $userData.usermessageValue,
        });
    });
});

