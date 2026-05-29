const fs = require('fs');
const path = require('path');

// Mocks for browser environment
global.window = {
  addEventListener: () => {},
  location: {
    hash: ''
  }
};
global.document = {
  getElementById: (id) => {
    return {
      innerHTML: '',
      querySelectorAll: () => [],
      querySelector: () => null,
      addEventListener: () => {},
      appendChild: () => {},
      removeChild: () => {},
      style: {},
      children: [],
      classList: {
        toggle: () => {},
        add: () => {},
        remove: () => {}
      }
    };
  },
  querySelectorAll: () => [],
  querySelector: () => {
    return {
      setAttribute: () => {},
      innerText: '',
      style: {},
      classList: {
        toggle: () => {},
        add: () => {},
        remove: () => {}
      }
    };
  }
};
global.localStorage = {
  getItem: () => null,
  setItem: () => {}
};
global.navigator = {
  userAgent: 'node'
};
global.setInterval = () => {};
global.setTimeout = (fn) => fn();
global.requestAnimationFrame = () => {};

// Read all files
const dataCode = fs.readFileSync(path.join(__dirname, '../data.js'), 'utf8');
const cyberCode = fs.readFileSync(path.join(__dirname, '../cyber_assets.js'), 'utf8');
const appCode = fs.readFileSync(path.join(__dirname, '../app.js'), 'utf8');

// Concatenate and run in a single scope
const combinedCode = dataCode + '\n' + cyberCode + '\n' + appCode;

try {
  eval(combinedCode);
  console.log("SUCCESS: Combined scripts loaded and handleRouteChange executed without error!");
} catch (e) {
  console.error("ERROR: Failed during script execution:", e);
}
