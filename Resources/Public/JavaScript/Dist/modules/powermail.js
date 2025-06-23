export function powermailTweaks () {
    // POWERMAIL FOCUS CLASS
    // vanilla js es 6

    const powermailFocus = ( fieldwraps ) => { 

        fieldwraps.forEach(function (fieldwrap) {
            var field = fieldwrap.querySelector('input, textarea');
            if (!field) { return; }
            
            field.addEventListener('focus', function (event) {
                fieldwrap.classList.add('focus');
            });

            field.addEventListener('blur', function (event) {
                if (field.value == "") {
                    fieldwrap.classList.remove('focus');
                }
            });
        });
    }


    document.addEventListener("DOMContentLoaded", function () {
        let fieldwraps = document.querySelectorAll('.powermail_fieldwrap_type_captcha, .powermail_fieldwrap_type_input, .powermail_fieldwrap_type_textarea , .powermail_fieldwrap_telefon, .powermail_fieldwrap_email');
        powermailFocus( fieldwraps );
    });

}