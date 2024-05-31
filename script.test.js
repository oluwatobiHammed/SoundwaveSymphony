const { isValidEmail } = require('./script');
const $ = require('jquery');
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

// describe('Navbar collapse toggle effect', () => {
//   it('should toggle the show class on navbar-collapse when navbar-toggler is clicked', () => {
//     // Create a mock navbar-toggler element
//     const navbarToggler = document.createElement('div');
//     navbarToggler.classList.add('navbar-toggler');
//     document.body.appendChild(navbarToggler);

//     // Create a mock navbar-collapse element
//     const navbarCollapse = document.createElement('div');
//     navbarCollapse.classList.add('navbar-collapse');
//     document.body.appendChild(navbarCollapse);

//     // Simulate a click event on the navbar-toggler
//     navbarToggler.click();
//     navbarCollapse.classList.remove('show');

//     // Assert that the navbar-collapse has the show class
//     expect(navbarCollapse.classList.contains('show')).toBe(true);
    

//     // Simulate another click event on the navbar-toggler
//     navbarToggler.click();

//     // Assert that the navbar-collapse does not have the show class
//     expect(navbarCollapse.classList.contains('show')).toBe(false);

//     // Clean up the mock elements
//     document.body.removeChild(navbarToggler);
//     document.body.removeChild(navbarCollapse);
//   });
// });

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