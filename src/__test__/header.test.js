import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe } from "node:test";
import React from "react";
import Header from "../Components/header/Header";
import { BrowserRouter } from "react-router-dom";
import SearchResult from "../Components/searchResult/SearchResult";

describe("Header Test", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );

  test("should navigate to the home page", () => {
    screen.getByText(/STREAM HIVE/i);
    const movies = document.querySelectorAll("ul li")[0];
    fireEvent.click(movies);
    screen.getByText(/Movies/i);
    screen.debug();
  });

  // it("should get the Test while navigating", () => {
  //   const { container } = render(
  //     <BrowserRouter>
  //       <SearchResult />
  //     </BrowserRouter>
  //   );
  //   const elem = document.querySelectorAll("ul li")[0];
  //   screen.getAllByText(/Explore Movies/i);
  // });
});
