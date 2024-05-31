

/**
 * Smooth scrolling for navigation links
 * @param {Event} event - The click event
 */
document.addEventListener("DOMContentLoaded", function () {
    $('.navbar-nav a').on('click', function (event) {
        if (this.hash !== '') {
            event.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });

    /**
 * Navbar collapse toggle effect
 * @param {Event} event - The click event
 */
    $('.navbar-toggler').on('click', function () {
        $('.navbar-collapse').toggleClass('show');
    });

    /**
     * Close navbar when a link is clicked
     * @param {Event} event - The click event
     */
    $('.navbar-nav a').on('click', function () {
        $('.navbar-collapse').removeClass('show');
    });

});




/**
 * Scale effect on hover
 * @param {Event} event - The hover event
 */
$(".quarter").on("mouseleave",function () {
    $(this).css("transform", "scale(1.2)");
}, function () {
    $(this).css("transform", "scale(1)");
});

/**
 * Smooth scroll to booking section
 * @param {Event} event - The click event
 */
$(".smooth-scroll").on('click',function () {
    $('html, body').animate({
        scrollTop: $("#booking").offset().top
    }, 800);
});



/**
 * Form submission handling
 * @param {Event} event - The form submission event
 * @returns {boolean} - Returns false to prevent the default form submission
 */
document.addEventListener("DOMContentLoaded", function() {

    /**
 * Set the minimum date to the current date
 */
var currentDate = new Date();
var day = ("0" + currentDate.getDate()).slice(-2);
var month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
var today = currentDate.getFullYear() + "-" + (month) + "-" + (day);
$('#date').attr('min', today);

    $("#booking-form").submit(function (event) {
        event.preventDefault();
        console.log('Got Here...');
        // Get form values
        var name = $("#name").val().trim();
        var email = $("#email").val().trim();
        var eventType = $("#event-type").val().trim();
        var date = $("#date").val();
        var message = $("#message").val().trim();

        // Check if all fields are filled
        if (name === '' || email === '' || date === '' || message === '') {
            $('#alert').removeClass('success').addClass('error').html('Please fill all the required fields.').fadeIn();
            setTimeout(function () { $('#alert').fadeOut() }, 4000);
            return false;
        }

        // Check if the selected date is in the future
        var currentDate = new Date();
        var selectedDate = new Date(date + 'T00:00:00'); // Reset time to 00:00:00 to avoid timezone issues
        if (selectedDate <= currentDate) {
            $('#alert').removeClass('success').addClass('error').html('Please select a future date.').fadeIn();
            setTimeout(function () { $('#alert').fadeOut() }, 4000);
            return false;
        }

        // Check if the email address is valid
        if (!isValidEmail(email)) {
            $('#alert').removeClass('success').addClass('error').html('Please enter a valid email address.').fadeIn();
            setTimeout(function () { $('#alert').fadeOut() }, 4000);
            return false;
        }

        emailjs.init("Qur9J272yrutlMj77");

        emailjs.send("service_zeodffs", "template_s6rjjmy", {
            sendername: "Soundwave Symphony",
            to: this.email.value,
            subject: "New Booking Request",
            message: "Thank you for booking a project with us. We appreciate your interest in working with us. \n\nYour details are as follows:\n\n" +
                "Name: " + name + "\n" +
                "Email: " + email + "\n" +
                "Event Type: " + eventType + "\n" +
                "Date: " + date + "\n" +
                "Message: " + message + ".\n\n" +
                "We will get back to you soon."
        }).then(function (response) {


            $('#alert').removeClass('error').addClass('success').html('Thank you! We will get back to you soon.').fadeIn();
            $("#name").val('');
            $("#email").val('');
            $("#event-type").val('');
            $("#date").val('');
            $("#message").val('');
            setTimeout(function () { $('#alert').fadeOut() }, 4000);
            // Clear the form
        }, function (error) {
            console.log('FAILED...', error);
            $('#alert').removeClass('success').addClass('error').html('Error: Something went wrong. Please try again.').fadeIn();
            setTimeout(function () { $('#alert').fadeOut() }, 4000);
        });

        return false; // Prevent the default form submission
    });


});
/**
 * Email validation
 * @param {string} email - The email address to validate
 * @returns {boolean} - Returns true if the email is valid, false otherwise
 */
function isValidEmail(email) {
    var emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return emailRegex.test(email);
}

/**
 * Add to cart button click event
 */
$(".add-to-cart").on("click",function () {
    let itemName = $(this).siblings("h3").text();
    showCustomAlert(itemName + " has been added to your cart.");
    // Here you can also add code to actually add the item to a shopping cart
    // For example, updating a cart count, or sending an AJAX request to a server
});

/**
 * Show custom alert message
 * @param {string} message - The message to display in the alert
 */
function showCustomAlert(message) {
    $(".shopping-custom-alert").text(message).fadeIn();
    setTimeout(function () {
        $(".shopping-custom-alert").fadeOut();
    }, 3000); // The alert will disappear after 3 seconds
}

/**
 * Initialize Materialize components on DOMContentLoaded event
 */
document.addEventListener("DOMContentLoaded", function () {
    $(".collapsible").collapsible();
    $(".tooltipped").tooltip();
    $("select").formSelect();
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems, {
        format: "dd mmmm, yyyy",
        yearRange: 3,
        showClearBtn: true,
        i18n: {
            done: "Select"
        },
        onOpen: function () {
            var datepicker = document.querySelector('.datepicker-modal');
            if (datepicker) {
                datepicker.classList.add('custom-datepicker-dropdown');
            }

            var modaldatepicker = document.querySelector('.datepicker-modal');
            if (modaldatepicker) {
                modaldatepicker.style.marginTop = '50px'; /* Adjust this value to your needs */
            }
        }

        

    });

             // Initialize Materialize Select
             var elems = document.querySelectorAll('select');
             var instances = M.FormSelect.init(elems, {});
 
             // Prevent duplicate initialization
             for (var i = 0; i < instances.length; i++) {
                 if (!instances[i].classList.contains('initialized')) {
                     instances[i].classList.add('initialized');
                 }
             }

             
             

    validateMaterializeSelect();

 
});

   /**
     * Validates the Materialize select element.
     */
   function validateMaterializeSelect() {
    let classValid = { "border-bottom": "1px solid #4caf50", "box-shadow": "0 1px 0 0 #4caf50" };
    let classInvalid = { "border-bottom": "1px solid #f44336", "box-shadow": "0 1px 0 0 #f44336" };
    if ($("select.validate").prop("required")) {
        $("select.validate").css({ "display": "block", "height": "0", "padding": "0", "width": "0", "position": "absolute" });
    }
    $(".select-wrapper input.select-dropdown").on("focusin", function () {
        $(this).parent(".select-wrapper").on("change", function () {
            if ($(this).children("ul").children("li.selected:not(.disabled)").on("click", function () { })) {
                $(this).children("input").css(classValid);
            }
        });
    }).on("click", function () {
        if ($(this).parent(".select-wrapper").children("ul").children("li.selected:not(.disabled)").css("background-color") === "rgba(0, 0, 0, 0.03)") {
            $(this).parent(".select-wrapper").children("input").css(classValid);
        } else {
            $(".select-wrapper input.select-dropdown").on("focusout", function () {
                if ($(this).parent(".select-wrapper").children("select").prop("required")) {
                    if ($(this).css("border-bottom") != "1px solid rgb(76, 175, 80)") {
                        $(this).parent(".select-wrapper").children("input").css(classInvalid);
                    }
                }
            });
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    // Initialize sidenav when the document is fully loaded
    $('.sidenav').sidenav({
        closeOnClick: true, // Close the sidenav when clicking on a link
        inDuration: 250,  // Duration of the in transition
        outDuration: 200, // Duration of the out transition
        edge: 'right'     // Choose the horizontal origin for the drawer (right or left)
    });

    // Close sidenav when a link is clicked
    $('.sidenav-close-link').on('click', function () {
        var sidenavInstance = M.Sidenav.getInstance($('#mobile-demo'));
        sidenavInstance.close();
    });
});

/**
 * Smooth scrolling for links with hashes
 * @param {Event} event - The click event
 */
$('a[href*="#"]').on('click', function (event) {
    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function () {
            window.location.hash = hash;
        });
    }
});
