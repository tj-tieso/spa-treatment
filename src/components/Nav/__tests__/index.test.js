import React from "react";
// retrieve some functions from the React Testing Library.
import { render, cleanup } from "@testing-library/react";
// import the extend-expect library from the jest-dom package.
import "@testing-library/jest-dom/extend-expect";
// import the component we will be testing, which is the About component
import Nav from "..";

describe("Nav component", () => {
  it("renders", () => {
    render(<Nav />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Nav />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("emoji is visible", () => {
  it("inserts emoji into h2", () => {
    const { getByLabelText } = render(<Nav />);
    expect(getByLabelText("camera")).toHaveTextContent("📸");
  });
});

describe("links are visible", () => {
  it("inserts text into the links", () => {
    const { getByTestId } = render(<Nav />);
    expect(getByTestId("link")).toHaveTextContent("Oh Snap!");
    expect(getByTestId("about")).toHaveTextContent("About me");
  });
});

afterEach(cleanup);
