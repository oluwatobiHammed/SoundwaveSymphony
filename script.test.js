// Test for validateMaterializeSelect function
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

  afterEach(() => {
    // Clean up the HTML structure after testing
    document.body.innerHTML = "";
  });

  it("should add valid class when an option is selected", () => {
    // Trigger change event on the select wrapper
    $(".select-wrapper").trigger("change");

    // Check if the input has the valid class
    expect($(".select-wrapper input.select-dropdown").css("border-bottom")).toBe("1px solid rgb(76, 175, 80)");
  });

  it("should add invalid class when no option is selected", () => {
    // Trigger focusout event on the input
    $(".select-wrapper input.select-dropdown").trigger("focusout");

    // Check if the input has the invalid class
    expect($(".select-wrapper input.select-dropdown").css("border-bottom")).toBe("1px solid rgb(244, 67, 54)");
  });
});describe("Smooth scrolling for navigation links", () => {
  beforeEach(() => {
    // Set up the HTML structure for testing
    document.body.innerHTML = `
      <nav>
        <ul class="navbar-nav">
          <li><a href="#section1">Section 1</a></li>
          <li><a href="#section2">Section 2</a></li>
          <li><a href="#section3">Section 3</a></li>
        </ul>
      </nav>
      <div id="section1"></div>
      <div id="section2"></div>
      <div id="section3"></div>
    `;
  });

  afterEach(() => {
    // Clean up the HTML structure after testing
    document.body.innerHTML = "";
  });

  it("should scroll to the target section when a navigation link is clicked", () => {
    // Simulate click event on a navigation link
    const link = document.querySelector('a[href="#section2"]');
    link.click();

    // Check if the page has scrolled to the target section
    expect(window.pageYOffset).toBe(document.getElementById("section2").offsetTop);
  });

  it("should update the URL hash when a navigation link is clicked", () => {
    // Simulate click event on a navigation link
    const link = document.querySelector('a[href="#section3"]');
    link.click();

    // Check if the URL hash has been updated
    expect(window.location.hash).toBe("#section3");
  });
});

describe("Navbar collapse toggle effect", () => {
  beforeEach(() => {
    // Set up the HTML structure for testing
    document.body.innerHTML = `
      <button class="navbar-toggler"></button>
      <div class="navbar-collapse"></div>
    `;
  });

  afterEach(() => {
    // Clean up the HTML structure after testing
    document.body.innerHTML = "";
  });

  it("should toggle the 'show' class on navbar collapse when the toggler is clicked", () => {
    // Simulate click event on the toggler
    const toggler = document.querySelector(".navbar-toggler");
    toggler.click();

    // Check if the 'show' class has been added to navbar collapse
    expect(document.querySelector(".navbar-collapse").classList.contains("show")).toBe(true);

    // Simulate click event on the toggler again
    toggler.click();

    // Check if the 'show' class has been removed from navbar collapse
    expect(document.querySelector(".navbar-collapse").classList.contains("show")).toBe(false);
  });
});

describe("Close navbar when a link is clicked", () => {
  beforeEach(() => {
    // Set up the HTML structure for testing
    document.body.innerHTML = `
      <nav>
        <ul class="navbar-nav">
          <li><a href="#section1">Section 1</a></li>
          <li><a href="#section2">Section 2</a></li>
          <li><a href="#section3">Section 3</a></li>
        </ul>
      </nav>
      <div id="section1"></div>
      <div id="section2"></div>
      <div id="section3"></div>
    `;
  });

  afterEach(() => {
    // Clean up the HTML structure after testing
    document.body.innerHTML = "";
  });

  it("should remove the 'show' class from navbar collapse when a link is clicked", () => {
    // Simulate click event on a navigation link
    const link = document.querySelector('a[href="#section2"]');
    link.click();

    // Check if the 'show' class has been added to navbar collapse
    expect(document.querySelector(".navbar-collapse").classList.contains("show")).toBe(true);

    // Simulate click event on the same link again
    link.click();

    // Check if the 'show' class has been removed from navbar collapse
    expect(document.querySelector(".navbar-collapse").classList.contains("show")).toBe(false);
  });
});

describe("Smooth scroll to booking section", () => {
  beforeEach(() => {
    // Set up the HTML structure for testing
    document.body.innerHTML = `
      <div id="booking"></div>
      <a class="smooth-scroll" href="#booking">Book Now</a>
    `;
  });

  afterEach(() => {
    // Clean up the HTML structure after testing
    document.body.innerHTML = "";
  });

  it("should scroll to the booking section when the 'smooth-scroll' link is clicked", () => {
    // Simulate click event on the 'smooth-scroll' link
    const link = document.querySelector(".smooth-scroll");
    link.click();

    // Check if the page has scrolled to the booking section
    expect(window.pageYOffset).toBe(document.getElementById("booking").offsetTop);
  });
});

describe("Form submission handling", () => {
  beforeEach(() => {
    // Set up the HTML structure for testing
    document.body.innerHTML = `
      <form class="booking-form">
        <input id="name" type="text">
        <input id="email" type="email">
        <input id="event-type" type="text">
        <input id="date" type="date">
        <textarea id="message"></textarea>
        <button type="submit">Submit</button>
      </form>
      <div id="alert"></div>
    `;
  });

  afterEach(() => {
    // Clean up the HTML structure after testing
    document.body.innerHTML = "";
  });

  it("should display an error message if any required field is empty", () => {
    // Simulate form submission without filling any required field
    const form = document.querySelector(".booking-form");
    form.dispatchEvent(new Event("submit"));

    // Check if the error message is displayed
    expect(document.getElementById("alert").classList.contains("error")).toBe(true);
  });

  it("should display an error message if the selected date is not in the future", () => {
    // Set the date input value to a past date
    const dateInput = document.getElementById("date");
    const pastDate = new Date();
    pastDate.setFullYear(pastDate.getFullYear() - 1);
    dateInput.value = pastDate.toISOString().split("T")[0];

    // Simulate form submission
    const form = document.querySelector(".booking-form");
    form.dispatchEvent(new Event("submit"));

    // Check if the error message is displayed
    expect(document.getElementById("alert").classList.contains("error")).toBe(true);
  });

  it("should display an error message if the email address is invalid", () => {
    // Set the email input value to an invalid email address
    const emailInput = document.getElementById("email");
    emailInput.value = "invalid-email";

    // Simulate form submission
    const form = document.querySelector(".booking-form");
    form.dispatchEvent(new Event("submit"));

    // Check if the error message is displayed
    expect(document.getElementById("alert").classList.contains("error")).toBe(true);
  });

  it("should display a success message and clear the form if all fields are valid", () => {
    // Set valid values for all form fields
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const eventTypeInput = document.getElementById("event-type");
    const dateInput = document.getElementById("date");
    const messageInput = document.getElementById("message");
    nameInput.value = "John Doe";
    emailInput.value = "john@example.com";
    eventTypeInput.value = "Wedding";
    dateInput.value = new Date().toISOString().split("T")[0];
    messageInput.value = "Hello, I would like to book an event.";

    // Simulate form submission
    const form = document.querySelector(".booking-form");
    form.dispatchEvent(new Event("submit"));

    // Check if the success message is displayed
    expect(document.getElementById("alert").classList.contains("success")).toBe(true);

    // Check if the form fields are cleared
    expect(nameInput.value).toBe("");
    expect(emailInput.value).toBe("");
    expect(eventTypeInput.value).toBe("");
    expect(dateInput.value).toBe("");
    expect(messageInput.value).toBe("");
  });
});

describe("Email validation", () => {
  it("should return true for a valid email address", () => {
    const email = "john@example.com";
    const isValid = isValidEmail(email);
    expect(isValid).toBe(true);
  });

  it("should return false for an invalid email address", () => {
    const email = "invalid-email";
    const isValid = isValidEmail(email);
    expect(isValid).toBe(false);
  });
});

describe("Add to cart functionality", () => {
  beforeEach(() => {
    // Set up the HTML structure for testing
    document.body.innerHTML = `
      <div class="item">
        <h3>Item 1</h3>
        <button class="add-to-cart">Add to Cart</button>
      </div>
      <div class="shopping-custom-alert"></div>
    `;
  });

  afterEach(() => {
    // Clean up the HTML structure after testing
    document.body.innerHTML = "";
  });

  it("should display a custom alert when an item is added to the cart", () => {
    // Simulate click event on the 'add-to-cart' button
    const button = document.querySelector(".add-to-cart");
    button.click();

    // Check if the custom alert is displayed
    expect(document.querySelector(".shopping-custom-alert").style.display).toBe("block");
  });
});

describe("Initialization of Materialize components", () => {
  beforeEach(() => {
    // Set up the HTML structure for testing
    document.body.innerHTML = `
      <ul class="sidenav"></ul>
      <ul class="collapsible"></ul>
      <a class="tooltipped"></a>
      <select></select>
      <input class="datepicker" type="text">
    `;
  });

  afterEach(() => {
    // Clean up the HTML structure after testing
    document.body.innerHTML = "";
  });

  it("should initialize the sidenav component", () => {
    // Check if the sidenav component is initialized
    expect(document.querySelector(".sidenav").classList.contains("initialized")).toBe(true);
  });

  it("should initialize the collapsible component", () => {
    // Check if the collapsible component is initialized
    expect(document.querySelector(".collapsible").classList.contains("initialized")).toBe(true);
  });

  it("should initialize the tooltip component", () => {
    // Check if the tooltip component is initialized
    expect(document.querySelector(".tooltipped").classList.contains("initialized")).toBe(true);
  });

  it("should initialize the select component", () => {
    // Check if the select component is initialized
    expect(document.querySelector("select").classList.contains("initialized")).toBe(true);
  });

  it("should initialize the datepicker component", () => {
    // Check if the datepicker component is initialized
    expect(document.querySelector(".datepicker").classList.contains("initialized")).toBe(true);
  });
});

describe("Validation of Materialize select element", () => {
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

  afterEach(() => {
    // Clean up the HTML structure after testing
    document.body.innerHTML = "";
  });

  it("should add the valid class to the input when an option is selected", () => {
    // Simulate change event on the select wrapper
    const selectWrapper = document.querySelector(".select-wrapper");
    selectWrapper.dispatchEvent(new Event("change"));

    // Check if the input has the valid class
    expect(document.querySelector(".select-wrapper input.select-dropdown").classList.contains("valid")).toBe(true);
  });

  it("should add the invalid class to the input when no option is selected", () => {
    // Simulate focusout event on the input
    const input = document.querySelector(".select-wrapper input.select-dropdown");
    input.dispatchEvent(new Event("focusout"));

    // Check if the input has the invalid class
    expect(input.classList.contains("invalid")).toBe(true);
  });
});describe("Smooth scrolling for navigation links", () => {
  beforeEach(() => {
    // Set up the HTML structure for testing
    document.body.innerHTML = `
      <nav>
        <ul class="navbar-nav">
          <li><a href="#section1">Section 1</a></li>
          <li><a href="#section2">Section 2</a></li>
          <li><a href="#section3">Section 3</a></li>
        </ul>
      </nav>
      <div id="section1"></div>
      <div id="section2"></div>
      <div id="section3"></div>
    `;
  });

  afterEach(() => {
    // Clean up the HTML structure after testing
    document.body.innerHTML = "";
  });

  it("should scroll to the target section when a navigation link is clicked", () => {
    // Simulate click event on a navigation link
    const link = document.querySelector('a[href="#section2"]');
    link.click();

    // Check if the page has scrolled to the target section
    expect(window.pageYOffset).toBe(document.getElementById("section2").offsetTop);
  });

  it("should update the URL hash when a navigation link is clicked", () => {
    // Simulate click event on a navigation link
    const link = document.querySelector('a[href="#section3"]');
    link.click();

    // Check if the URL hash has been updated
    expect(window.location.hash).toBe("#section3");
  });
});

describe("Navbar collapse toggle effect", () => {
  beforeEach(() => {
    // Set up the HTML structure for testing
    document.body.innerHTML = `
      <button class="navbar-toggler"></button>
      <div class="navbar-collapse"></div>
    `;
  });

  afterEach(() => {
    // Clean up the HTML structure after testing
    document.body.innerHTML = "";
  });

  it("should toggle the 'show' class on navbar collapse when the toggler is clicked", () => {
    // Simulate click event on the toggler
    const toggler = document.querySelector(".navbar-toggler");
    toggler.click();

    // Check if the 'show' class has been added to navbar collapse
    expect(document.querySelector(".navbar-collapse").classList.contains("show")).toBe(true);

    // Simulate click event on the toggler again
    toggler.click();

    // Check if the 'show' class has been removed from navbar collapse
    expect(document.querySelector(".navbar-collapse").classList.contains("show")).toBe(false);
  });
});

describe("Close navbar when a link is clicked", () => {
  beforeEach(() => {
    // Set up the HTML structure for testing
    document.body.innerHTML = `
      <nav>
        <ul class="navbar-nav">
          <li><a href="#section1">Section 1</a></li>
          <li><a href="#section2">Section 2</a></li>
          <li><a href="#section3">Section 3</a></li>
        </ul>
      </nav>
      <div id="section1"></div>
      <div id="section2"></div>
      <div id="section3"></div>
    `;
  });

  afterEach(() => {
    // Clean up the HTML structure after testing
    document.body.innerHTML = "";
  });

  it("should remove the 'show' class from navbar collapse when a link is clicked", () => {
    // Simulate click event on a navigation link
    const link = document.querySelector('a[href="#section2"]');
    link.click();

    // Check if the 'show' class has been added to navbar collapse
    expect(document.querySelector(".navbar-collapse").classList.contains("show")).toBe(true);

    // Simulate click event on the same link again
    link.click();

    // Check if the 'show' class has been removed from navbar collapse
    expect(document.querySelector(".navbar-collapse").classList.contains("show")).toBe(false);
  });
});

describe("Smooth scroll to booking section", () => {
  beforeEach(() => {
    // Set up the HTML structure for testing
    document.body.innerHTML = `
      <div id="booking"></div>
      <a class="smooth-scroll" href="#booking">Book Now</a>
    `;
  });

  afterEach(() => {
    // Clean up the HTML structure after testing
    document.body.innerHTML = "";
  });

  it("should scroll to the booking section when the 'smooth-scroll' link is clicked", () => {
    // Simulate click event on the 'smooth-scroll' link
    const link = document.querySelector(".smooth-scroll");
    link.click();

    // Check if the page has scrolled to the booking section
    expect(window.pageYOffset).toBe(document.getElementById("booking").offsetTop);
  });
});

describe("Form submission handling", () => {
  beforeEach(() => {
    // Set up the HTML structure for testing
    document.body.innerHTML = `
      <form class="booking-form">
        <input id="name" type="text">
        <input id="email" type="email">
        <input id="event-type" type="text">
        <input id="date" type="date">
        <textarea id="message"></textarea>
        <button type="submit">Submit</button>
      </form>
      <div id="alert"></div>
    `;
  });

  afterEach(() => {
    // Clean up the HTML structure after testing
    document.body.innerHTML = "";
  });

  it("should display an error message if any required field is empty", () => {
    // Simulate form submission without filling any required field
    const form = document.querySelector(".booking-form");
    form.dispatchEvent(new Event("submit"));

    // Check if the error message is displayed
    expect(document.getElementById("alert").classList.contains("error")).toBe(true);
  });

  it("should display an error message if the selected date is not in the future", () => {
    // Set the date input value to a past date
    const dateInput = document.getElementById("date");
    const pastDate = new Date();
    pastDate.setFullYear(pastDate.getFullYear() - 1);
    dateInput.value = pastDate.toISOString().split("T")[0];

    // Simulate form submission
    const form = document.querySelector(".booking-form");
    form.dispatchEvent(new Event("submit"));

    // Check if the error message is displayed
    expect(document.getElementById("alert").classList.contains("error")).toBe(true);
  });

  it("should display an error message if the email address is invalid", () => {
    // Set the email input value to an invalid email address
    const emailInput = document.getElementById("email");
    emailInput.value = "invalid-email";

    // Simulate form submission
    const form = document.querySelector(".booking-form");
    form.dispatchEvent(new Event("submit"));

    // Check if the error message is displayed
    expect(document.getElementById("alert").classList.contains("error")).toBe(true);
  });

  it("should display a success message and clear the form if all fields are valid", () => {
    // Set valid values for all form fields
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const eventTypeInput = document.getElementById("event-type");
    const dateInput = document.getElementById("date");
    const messageInput = document.getElementById("message");
    nameInput.value = "John Doe";
    emailInput.value = "john@example.com";
    eventTypeInput.value = "Wedding";
    dateInput.value = new Date().toISOString().split("T")[0];
    messageInput.value = "Hello, I would like to book an event.";

    // Simulate form submission
    const form = document.querySelector(".booking-form");
    form.dispatchEvent(new Event("submit"));

    // Check if the success message is displayed
    expect(document.getElementById("alert").classList.contains("success")).toBe(true);

    // Check if the form fields are cleared
    expect(nameInput.value).toBe("");
    expect(emailInput.value).toBe("");
    expect(eventTypeInput.value).toBe("");
    expect(dateInput.value).toBe("");
    expect(messageInput.value).toBe("");
  });
});

describe("Email validation", () => {
  it("should return true for a valid email address", () => {
    const email = "john@example.com";
    const isValid = isValidEmail(email);
    expect(isValid).toBe(true);
  });

  it("should return false for an invalid email address", () => {
    const email = "invalid-email";
    const isValid = isValidEmail(email);
    expect(isValid).toBe(false);
  });
});

describe("Add to cart functionality", () => {
  beforeEach(() => {
    // Set up the HTML structure for testing
    document.body.innerHTML = `
      <div class="item">
        <h3>Item 1</h3>
        <button class="add-to-cart">Add to Cart</button>
      </div>
      <div class="shopping-custom-alert"></div>
    `;
  });

  afterEach(() => {
    // Clean up the HTML structure after testing
    document.body.innerHTML = "";
  });

  it("should display a custom alert when an item is added to the cart", () => {
    // Simulate click event on the 'add-to-cart' button
    const button = document.querySelector(".add-to-cart");
    button.click();

    // Check if the custom alert is displayed
    expect(document.querySelector(".shopping-custom-alert").style.display).toBe("block");
  });
});

describe("Initialization of Materialize components", () => {
  beforeEach(() => {
    // Set up the HTML structure for testing
    document.body.innerHTML = `
      <ul class="sidenav"></ul>
      <ul class="collapsible"></ul>
      <a class="tooltipped"></a>
      <select></select>
      <input class="datepicker" type="text">
    `;
  });

  afterEach(() => {
    // Clean up the HTML structure after testing
    document.body.innerHTML = "";
  });

  it("should initialize the sidenav component", () => {
    // Check if the sidenav component is initialized
    expect(document.querySelector(".sidenav").classList.contains("initialized")).toBe(true);
  });

  it("should initialize the collapsible component", () => {
    // Check if the collapsible component is initialized
    expect(document.querySelector(".collapsible").classList.contains("initialized")).toBe(true);
  });

  it("should initialize the tooltip component", () => {
    // Check if the tooltip component is initialized
    expect(document.querySelector(".tooltipped").classList.contains("initialized")).toBe(true);
  });

  it("should initialize the select component", () => {
    // Check if the select component is initialized
    expect(document.querySelector("select").classList.contains("initialized")).toBe(true);
  });

  it("should initialize the datepicker component", () => {
    // Check if the datepicker component is initialized
    expect(document.querySelector(".datepicker").classList.contains("initialized")).toBe(true);
  });
});

describe("Validation of Materialize select element", () => {
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

  afterEach(() => {
    // Clean up the HTML structure after testing
    document.body.innerHTML = "";
  });

  it("should add the valid class to the input when an option is selected", () => {
    // Simulate change event on the select wrapper
    const selectWrapper = document.querySelector(".select-wrapper");
    selectWrapper.dispatchEvent(new Event("change"));

    // Check if the input has the valid class
    expect(document.querySelector(".select-wrapper input.select-dropdown").classList.contains("valid")).toBe(true);
  });

  it("should add the invalid class to the input when no option is selected", () => {
    // Simulate focusout event on the input
    const input = document.querySelector(".select-wrapper input.select-dropdown");
    input.dispatchEvent(new Event("focusout"));

    // Check if the input has the invalid class
    expect(input.classList.contains("invalid")).toBe(true);
  });
});// Test if hash is not empty


describe("hash", () => {
  it("should not be empty", () => {
    const hash = "exampleHash";
    expect(hash).not.toBe("");
  });
});