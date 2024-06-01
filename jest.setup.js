// jest.setup.js
import $ from 'jquery';
global.$ = $;

global.M = {
    Datepicker: {
      init: jest.fn(() => ({
        el: document.createElement('div')
      }))
    },
    FormSelect: {
      init: jest.fn(() => ({
        el: document.createElement('select')
      }))
    }
  };