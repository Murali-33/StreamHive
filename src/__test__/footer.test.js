import Footer from "../Components/footer/Footer";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe } from "node:test";
import React from "react";

describe("Footer testing", () => {
  test("Render the footer comp", async () => {
    render(<Footer />);
    screen.getByText(/Terms Of Use/i);
  });

  test("social links fire events correctly", () => {
    const { container } = render(<Footer />);

    // Select social links based on their href attributes
    const githubLink = container.querySelector(
      'a[href="https://github.com/Murali-33"]'
    );
    const linkedInLink = container.querySelector(
      'a[href="https://www.linkedin.com/in/murali3/"]'
    );

    // Mock window.open to test click event
    window.open = jest.fn();

    // Fire click events on the selected links
    screen.getByText(/Displaying/i);
    fireEvent.click(githubLink);
    fireEvent.click(linkedInLink);
  });
});
