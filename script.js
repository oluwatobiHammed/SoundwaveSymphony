

    // Smooth scrolling for navigation links
    $('.navbar-nav a').on('click', function(event) {
        if (this.hash !== '') {
            event.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });

    // Navbar collapse toggle effect
    $('.navbar-toggler').on('click', function() {
        $('.navbar-collapse').toggleClass('show');
    });

    // Close navbar when a link is clicked
    $('.navbar-nav a').on('click', function() {
        $('.navbar-collapse').removeClass('show');
    });

    //$(document).ready(function(){
      // Animate the quarters on hover
      $(".quarter").hover(function(){
        $(this).css("transform", "scale(1.2)");
    }, function(){
        $(this).css("transform", "scale(1)");
    });
   // });

    //$(document).ready(function(){

            // Smooth scroll to booking section
       $(".smooth-scroll").click(function() {
            $('html, body').animate({
                scrollTop: $("#booking").offset().top
            }, 800);
        });

                // Set the minimum date to the current date
                var currentDate = new Date();
                var day = ("0" + currentDate.getDate()).slice(-2);
                var month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
                var today = currentDate.getFullYear()+"-"+(month)+"-"+(day);
                $('#date').attr('min', today);

        // Form submission handling
        $(".booking-form").submit(function(event) {
            event.preventDefault();

                        // Get form values
                        var name = $("#name").val().trim();
                        var email = $("#email").val().trim();
                        var eventType = $("#event-type").val().trim();
                        var date = $("#date").val();
                        var message = $("#message").val().trim();
            
                        // Check if all fields are filled
                        if (name === '' || email === '' || date === '' || message === '') {
                            $('#alert').removeClass('success').addClass('error').html('Please fill all the required fields.').fadeIn();
                            setTimeout(function(){ $('#alert').fadeOut() }, 4000);
                            return false;
                        }
            
             // Check if the selected date is in the future
             var currentDate = new Date();
             var selectedDate = new Date(date + 'T00:00:00'); // Reset time to 00:00:00 to avoid timezone issues
             if (selectedDate <= currentDate) {
                $('#alert').removeClass('success').addClass('error').html('Please select a future date.').fadeIn();
                setTimeout(function(){ $('#alert').fadeOut() }, 4000);
                 return false;
             }

                 // Check if the email address is valid
            if (!isValidEmail(email)) {
                $('#alert').removeClass('success').addClass('error').html('Please enter a valid email address.').fadeIn();
                setTimeout(function(){ $('#alert').fadeOut() }, 4000);
                return false;
            }
    
           
            var formData = $(this).serialize();
            var actionUrl = 'https://formsubmit.co/' + encodeURIComponent(email);
            $.ajax({
                type: 'POST',
                url: actionUrl,
                data: formData,
                success: function(response) {
                    console.log('loaded',response); // Check the response from the server
                    $('#alert').removeClass('error').addClass('success').html('Thank you! We will get back to you soon.').fadeIn();
                    // Clear the form
                    $("#name").val('');
                    $("#email").val('');
                    $("#event-type").val('');
                    $("#date").val('');
                    $("#message").val('');
                    setTimeout(function(){ $('#alert').fadeOut() }, 4000);
                },
                error: function(xhr, status, error) {
                    console.error(xhr.responseText);
                    $('#alert').removeClass('success').addClass('error').html('Error: Something went wrong. Please try again.').fadeIn();
                    setTimeout(function(){ $('#alert').fadeOut() }, 4000);
                }
            });
            
            return false; // Prevent the default form submission
        });

        // Email validation
        function isValidEmail(email) {
            var emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
            return emailRegex.test(email);
        }
