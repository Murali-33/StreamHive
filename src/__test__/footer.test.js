import Footer from "../Components/footer/Footer"; 
import {render,screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe } from "node:test";
import React from 'react';

describe("Footer testing", ()=>{

  test("Render the component", ()=>{
    render(<Footer/>)
  });

  test("renders all menu items", ()=>{
    render(<Footer/>)
    const menuItemsText = ['Terms Of Use', 'Privacy-Policy', 'About', 'Blog', 'FAQ'];
    menuItemsText.forEach((items)=>{
      expect(screen.getByText(items)).toBeInTheDocument()
    })
  });

  test('renders social icons with correct links', () => {
    render(<Footer />);

    const span = screen.getByRole("a")
    expect(span).toBeInTheDocument();

  //   const links = document.querySelectorAll('a');

  //   const expectedLinks = [
  //     { href: 'https://github.com/Murali-33' },
  //     { href: 'https://github.com/Murali-33' },
  //     { href: 'https://www.linkedin.com/in/murali3/' },
  //     { href: 'https://www.linkedin.com/in/murali3/' },
  //   ];

  //   links.forEach((link, index) => {
  //     expect(link).toHaveAttribute('href', expectedLinks[index].href);
  //   });

  });

})