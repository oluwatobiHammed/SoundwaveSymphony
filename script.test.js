const { isValidEmail } = require('./script');
import $ from 'jquery';


// Import the script that contains the jQuery code
require('./script.js');

// Mock the showCustomAlert function
describe('Smooth scrolling for links with hashes', () => {
  it('should scroll to the target element when a link with a hash is clicked', () => {
    // Create a mock element with an offsets
    const targetElement = document.createElement('div');
    targetElement.id = 'target';
    targetElement.style.height = '1000px';
    document.body.appendChild(targetElement);

    // Create a mock link with a hash
    const link = document.createElement('a');
    link.href = '#target';
    document.body.appendChild(link);

    // Simulate a click event on the link
    link.click();

    // Assert that the page has scrolled to the target element
    expect(window.scrollY).toBe(targetElement.offsetTop);

    // Clean up the mock elements
    document.body.removeChild(targetElement);
    document.body.removeChild(link);
  });
});

describe('Smooth scrolling for navigation links', () => {
  it('should scroll to the target element when a link with a hash is clicked', () => {
    // Create a mock element with an offsets
    const targetElement = document.createElement('div');
    targetElement.id = 'target';
    targetElement.style.height = '1000px';
    document.body.appendChild(targetElement);

    // Create a mock link with a hash
    const link = document.createElement('a');
    link.href = '#target';
    document.body.appendChild(link);

    // Simulate a click event on the link
    link.click();

    // Assert that the page has scrolled to the target element
    expect(window.scrollY).toBe(targetElement.offsetTop);

    // Clean up the mock elements
    document.body.removeChild(targetElement);
    document.body.removeChild(link);
  });
});


describe('Close navbar when a link is clicked', () => {
  it('should remove the show class from navbar-collapse when a link is clicked', () => {
    // Create a mock navbar-collapse element
    const navbarCollapse = document.createElement('div');
    navbarCollapse.classList.add('navbar-collapse');
    navbarCollapse.classList.remove('show');
    document.body.appendChild(navbarCollapse);

    // Create a mock link element
    const link = document.createElement('a');
    link.href = '#';
    document.body.appendChild(link);

    // Simulate a click event on the link
    link.click();

    // Assert that the navbar-collapse does not have the show class
    expect(navbarCollapse.classList.contains('show')).toBe(false);

    // Clean up the mock elements
    document.body.removeChild(navbarCollapse);
    document.body.removeChild(link);
  });
});

describe('Scale effect on hover', () => {
  it('should apply the scale effect on mouseleave event', () => {
    // Create a mock quarter element
    const quarter = document.createElement('div');
    quarter.classList.add('quarter');
    document.body.appendChild(quarter);

    // Simulate a mouseleave event on the quarter element
    const event = new Event('mouseleave');
    quarter.dispatchEvent(event);

    // Wait for the transition to complete
    setTimeout(() => {
      // Assert that the quarter element has the scale(1.2) transform
      expect(quarter.style.transform).toBe('scale(1.2)');

      // Clean up the mock element
      document.body.removeChild(quarter);
    }, 1000);
  });
});

describe('Smooth scroll to booking section', () => {
  it('should scroll to the booking section when the smooth-scroll link is clicked', () => {
    // Create a mock booking element
    const bookingElement = document.createElement('div');
    bookingElement.id = 'booking';
    document.body.appendChild(bookingElement);

    // Create a mock smooth-scroll link
    const link = document.createElement('a');
    link.classList.add('smooth-scroll');
    link.href = '#booking';
    document.body.appendChild(link);

    // Simulate a click event on the link
    link.click();

    // Assert that the page has scrolled to the booking element
    expect(window.scrollY).toBe(bookingElement.offsetTop);

    // Clean up the mock elements
    document.body.removeChild(bookingElement);
    document.body.removeChild(link);
  });
});

describe('today variable', () => {
  it('should set the minimum date to the current date', () => {
    // Get the current date
    const currentDate = new Date();
    const day = ("0" + currentDate.getDate()).slice(-2);
    const month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
    const today = currentDate.getFullYear() + "-" + (month) + "-" + (day);

        // Wait for the element to be available
        const waitForElement = setInterval(() => {
          const dateInput = document.getElementById('date');
          if (dateInput) {
            clearInterval(waitForElement);
            
            // Get the value of the date input field
            const selectedDate = dateInput.attributes('min');
    
            // Assert that the selected date is equal to today's date
            expect(selectedDate).toBe(today);
    
            done(); // Call done() to indicate the test is complete
          }
        }, 100); // Check every 100 milliseconds

  });
});

describe('selectedDate variable', () => {
  it('should set the selected date to the current date', () => {
    // Get the current date
    const currentDate = new Date();
    const day = ("0" + currentDate.getDate()).slice(-2);
    const month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
    const today = currentDate.getFullYear() + "-" + (month) + "-" + (day);

    // Wait for the element to be available
    const waitForElement = setInterval(() => {
      const dateInput = document.getElementById('date');
      if (dateInput) {
        clearInterval(waitForElement);
        
        // Get the value of the date input field
        const selectedDate = dateInput.value;

        // Assert that the selected date is equal to today's date
        expect(selectedDate).toBe(today);

        done(); // Call done() to indicate the test is complete
      }
    }, 100); // Check every 100 milliseconds
  });
});