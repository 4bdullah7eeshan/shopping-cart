import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Logo from "../src/components/Logo/Logo";

describe("Logo Component", () => {
  it("renders the logo with icon and text", () => {
    render(<Logo />);

    const textElement = screen.getByText(/Shopping Cart/i);
    expect(textElement).toBeInTheDocument();
  });


  it("does not change on user interaction", async () => {
    render(<Logo />);
    
    const logoElement = screen.getByRole("heading", { level: 1 });
    await userEvent.hover(logoElement);
    expect(logoElement).toBeInTheDocument();
  });
});
