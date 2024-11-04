import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "../src/components/Footer/Footer";

describe("Footer Component", () => {
  it("renders the footer with copyright text", () => {
    render(<Footer />);

    const copyrightText = screen.getByText(/Copyright © Abdullah Zeeshan 2024/i);
    expect(copyrightText).toBeInTheDocument();
  });

  it("contains a GitHub link with correct attributes", () => {
    render(<Footer />);
  
    const githubLink = screen.getByRole("link", { name: /GitHub profile/i });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute("href", "https://github.com/4bdullah7eeshan");
    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  
});
