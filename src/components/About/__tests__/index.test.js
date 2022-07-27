import React from "react";

// retrieve some functions from the React Testing Library.
//  The render function creates a simulated DOM in a Node.js environment to approximate the DOM
// (no component is actually visibly rendered).

// cleanup function is used to remove components from the DOM to prevent memory leaking,
// as well as variable or data collisions between tests that could corrupt test results.
import { render, cleanup } from "@testing-library/react";

// import the extend-expect library from the jest-dom package.
import "@testing-library/jest-dom/extend-expect";

// import the component we will be testing, which is the About component
import About from "..";

describe("About component", () => {
  //First Test
  //In the first argument, a string declares what is being tested. \
  // In the second argument, a callback function runs the test.
  it("renders", () => {
    render(<About />);
  });

  it("matches snapshot DOM node structure", () => {
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
  });
});

// ensure that after each test, we won't have any leftover memory data that could give us false results.
afterEach(cleanup);
