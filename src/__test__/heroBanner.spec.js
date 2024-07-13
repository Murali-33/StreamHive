import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import HeroBanner from "../Components/home/heroBanner/HeroBanner";
import { Provider } from "react-redux";
import store from "../store/store";

describe("Test the HeroBanner component", () => {
  test("Search input", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <HeroBanner />
        </BrowserRouter>
      </Provider>
    );
    const inputSearch = screen.getByRole("textbox");
    fireEvent.change(inputSearch, { target: { value: "batman" } });
    expect(inputSearch.value).toBe("batman");
  });

  test("Search Query", () => {
    const handleSearchQuery = jest.fn();
    render(
      <Provider store={store}>
        <BrowserRouter>
          <HeroBanner onClick={handleSearchQuery} />
        </BrowserRouter>
      </Provider>
    );

    const inputSearch = screen.getByPlaceholderText(
      "Search for movie or tv show..."
    );
    const searchBtn = screen.getByRole("button", { name: /search/i });

    // Simulate user typing in the search input
    fireEvent.change(inputSearch, { target: { value: "batman" } });
    expect(inputSearch.value).toBe("batman");

    // Click the search button
    fireEvent.click(searchBtn);
    fireEvent.click(inputSearch);

    // Check if handleSearchQuery function was called
    // expect(handleSearchQuery).toHaveBeenCalledTimes(1);
  });
});
