const $ = jest.fn(() => ({
    on: jest.fn(),
    formSelect: jest.fn(),
    prop: jest.fn(),
    each: jest.fn(),
    checkValidity: jest.fn(),
}));

module.exports = $;