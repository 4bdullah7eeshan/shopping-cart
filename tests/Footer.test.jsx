import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "../src/components/Footer/Footer";

describe("Footer Component", () => {
  it("renders the footer with copyright text", () => {
    render(<Footer />);

    const copyrightText = screen.getByText(/Copyright © Abdullah Zeeshan 2024/i);
    expect(copyrightText).toBeInTheDocument();
  });

  
});
