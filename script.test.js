const { validateMaterializeSelect, isValidEmail } = require('./script');
import M from 'materialize-css';

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

describe('Smooth scroll to section', () => {
  it('should scroll to the section when the smooth-scroll link is clicked', () => {
    // Create a mock booking element
    const bookingElement = document.createElement('div');
    bookingElement.id = 'booking';
    document.body.appendChild(bookingElement);

    // Create a mock smooth-scroll link
    const link = document.createElement('a');
    link.classList.add('smooth-scroll');
    link.href = '#shows';
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
    // Create a mock input element with ID "date"
    const dateInput = document.createElement('input');
    dateInput.setAttribute('type', 'date');
    dateInput.setAttribute('id', 'date');
    document.body.appendChild(dateInput);

    // Get the current date
    const currentDate = new Date();
    const day = ("0" + currentDate.getDate()).slice(-2);
    const month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
    const today = currentDate.getFullYear() + "-" + (month) + "-" + (day);

    // Set the minimum date attribute to today's date
    dateInput.setAttribute('min', today);

    // Get the value of the min attribute of the date input field
    const minDate = dateInput.getAttribute('min');

    // Assert that the minimum date is set to today's date
    expect(minDate).toBe(today);

    // Clean up the mock input element
    document.body.removeChild(dateInput);
  });
});


describe('selectedDate variable', () => {
  it('should set the selected date to the current date', () => {
    // Create a mock input element with ID "date"
    const dateInput = document.createElement('input');
    dateInput.setAttribute('type', 'date');
    dateInput.setAttribute('id', 'date');
    document.body.appendChild(dateInput);

    // Get the current date
    const currentDate = new Date();
    const day = ("0" + currentDate.getDate()).slice(-2);
    const month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
    const today = currentDate.getFullYear() + "-" + (month) + "-" + (day);

    // Set the value of the date input field
    dateInput.value = today;

    // Get the value of the date input field
    const selectedDate = dateInput.value;

    // Assert that the selected date is equal to today's date
    expect(selectedDate).toBe(today);

    // Clean up the mock input element
    document.body.removeChild(dateInput);
  });
});



describe('isValidEmail function', () => {
  it('should return true for a valid email address', () => {
    const validEmail = 'test@example.com';
    const result = isValidEmail(validEmail);
    expect(result).toBe(true);
  });

  it('should return false for an email address without a domain', () => {
    const invalidEmail = 'test@';
    const result = isValidEmail(invalidEmail);
    expect(result).toBe(false);
  });

  it('should return false for an email address without a username', () => {
    const invalidEmail = '@example.com';
    const result = isValidEmail(invalidEmail);
    expect(result).toBe(false);
  });

  it('should return false for an email address with an invalid domain', () => {
    const invalidEmail = 'test@example';
    const result = isValidEmail(invalidEmail);
    expect(result).toBe(false);
  });

  it('should return false for an email address with an invalid format', () => {
    const invalidEmail = 'testexample.com';
    const result = isValidEmail(invalidEmail);
    expect(result).toBe(false);
  });
});


describe('Add to cart button click event', () => {
  it('should show custom alert message with the item name when the add to cart button is clicked', () => {
    // Create a mock item name
    const itemName = 'Test Item';

    // Create a mock add to cart button
    const addToCartButton = document.createElement('button');
    addToCartButton.classList.add('add-to-cart');
    addToCartButton.innerHTML = 'Add to Cart';
    document.body.appendChild(addToCartButton);

    // Create a mock sibling element with the item name
    const siblingElement = document.createElement('h3');
    siblingElement.innerHTML = itemName;
    addToCartButton.parentNode.insertBefore(siblingElement, addToCartButton.nextSibling);

    // Simulate a click event on the add to cart button
    addToCartButton.click();

    // Wait for a short delay to ensure the .shopping-custom-alert element is added
    setTimeout(() => {
      // Assert that the custom alert message is displayed with the item name
      expect(document.querySelector('.shopping-custom-alert').textContent).toBe(itemName + ' has been added to your cart.');

      // Clean up the mock elements
      document.body.removeChild(addToCartButton);
      document.body.removeChild(siblingElement);
    }, 100); // Adjust the delay as needed
  });
});


describe('Sidenav instance', () => {
  it('should close the sidenav when a link is clicked', () => {
    // Create a mock sidenav element
    const sidenavElement = document.createElement('ul');
    sidenavElement.classList.add('sidenav');
    document.body.appendChild(sidenavElement);

    // Create a mock link element
    const link = document.createElement('a');
    link.href = '#';
    link.classList.add('sidenav-close-link');
    document.body.appendChild(link);

    // Initialize the sidenav
    const sidenavInstance = M.Sidenav.init(sidenavElement, {
      closeOnClick: true,
      inDuration: 250,
      outDuration: 200,
      edge: 'right'
    });

    // Simulate a click event on the link
    link.click();

    // Assert that the sidenav is closed
    expect(sidenavInstance.isOpen).toBe(false);

    // Clean up the mock elements
    document.body.removeChild(sidenavElement);
    document.body.removeChild(link);
  });
});


describe('Smooth scrolling for links with hashes', () => {

  it('should not scroll when a link without a hash is clicked', () => {
    // Create a mock link without a hash
    const link = document.createElement('a');
    link.href = '#';
    document.body.appendChild(link);

    // Simulate a click event on the link
    link.click();

    // Assert that the page has not scrolled
    expect(window.scrollY).toBe(0);

    // Clean up the mock element
    document.body.removeChild(link);
  });
});