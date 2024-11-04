import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SignUpButton from "../src/components/SignUpButton/SignUpButton";

describe("SignUpButton Component", () => {
  it("renders the sign-up button with correct text", () => {
    render(<SignUpButton />);

    const button = screen.getByRole("button", { name: /sign up/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("SIGN UP");
  });

});
