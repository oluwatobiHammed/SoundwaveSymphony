
// Import jsdom and jQuery
import jsdom from 'jsdom';
const { JSDOM } = jsdom;
const $ = require('jquery')(new JSDOM().window);

// Import the functions to test
import { validateMaterializeSelect, isValidEmail, showCustomAlert } from './script.js'; // Replace 'your-script-file.js' with the actual file name
// Create a basic DOM environment
const dom = new JSDOM('<!doctype html><html><body></body></html>');

// Extract the window object from the DOM
const { window } = dom;

// Set up jQuery in the global context
global.window = window;
global.document = window.document;
global.$ = require('jquery'); // Load jQuery

// Test suite for validateMaterializeSelect function
describe("validateMaterializeSelect", () => {
  beforeEach(() => {
    // Set up the HTML structure for testing
    document.body.innerHTML = `
      <div class="select-wrapper">
        <input class="select-dropdown" type="text">
        <ul>
          <li class="selected">Option 1</li>
          <li class="disabled">Option 2</li>
          <li>Option 3</li>
        </ul>
      </div>
    `;
  });

  // it("should add valid class when an option is selected", () => {
  //   // Simulate click on the first option
  //   $(".select-wrapper ul li:first-child").click();

  //   // Check if the input has the valid class
  //   expect($(".select-wrapper input.select-dropdown").hasClass("valid")).toBe(true);
  // });

  // Add more test cases as needed
});

// Test suite for isValidEmail function
describe("isValidEmail", () => {
  it("should return true for a valid email address", () => {
    expect(isValidEmail("test@example.com")).toBe(true);
  });

  it("should return false for an invalid email address", () => {
    expect(isValidEmail("invalid-email")).toBe(false);
  });

  // Add more test cases as needed
});

// Test suite for showCustomAlert function
describe("showCustomAlert", () => {
  beforeEach(() => {
    // Set up the HTML structure for testing
    document.body.innerHTML = `
      <div class="shopping-custom-alert"></div>
    `;
  });

  it("should display the custom alert message", () => {
    const message = "Test message";
    showCustomAlert(message);
    expect($(".shopping-custom-alert").text()).toBe(message);
  });

  // Add more test cases as needed
});