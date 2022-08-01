import React from "react";
// retrieve some functions from the React Testing Library.
import { render, cleanup } from "@testing-library/react";
// import the extend-expect library from the jest-dom package.
import "@testing-library/jest-dom/extend-expect";
import Contact from "..";

afterEach(cleanup);

describe("Contact component renders", () => {
  it("renders", () => {
    render(<Contact />);
  });

  it("renders", () => {
    const { asFragment } = render(<Contact />);
    expect(asFragment()).toMatchSnapshot();
  });
});

it("renders", () => {
  const { getByTestId } = render(<Contact />);
  expect(getByTestId("h1tag")).toHaveTextContent("Contact Me");
});

it("renders", () => {
  const { getByTestId } = render(<Contact />);
  expect(getByTestId("button")).toHaveTextContent("Submit");
});
