import "@testing-library/jest-dom";

// Polyfill TextEncoder dan TextDecoder untuk Jest
global.TextEncoder = require("util").TextEncoder;
global.TextDecoder = require("util").TextDecoder;

import "whatwg-fetch";
