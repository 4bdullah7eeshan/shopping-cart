import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Newsletter from "../src/components/Newsletter/Newsletter";

describe("Newsletter", () => {
  it("renders the newsletter header and description", () => {
    render(<Newsletter />);
    
    expect(screen.getByText("Newsletter")).toBeInTheDocument();
    expect(screen.getByText("Stay updated with the latest deals and new products!")).toBeInTheDocument();
  });

  it("renders the email input and subscribe button", () => {
    render(<Newsletter />);
    
    const input = screen.getByPlaceholderText("Enter your email");
    const button = screen.getByRole("button", { name: /subscribe/i });

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("allows the user to type in the email input", () => {
    render(<Newsletter />);
    
    const input = screen.getByPlaceholderText("Enter your email");

    fireEvent.change(input, { target: { value: "test@example.com" } });
    
    expect(input.value).toBe("test@example.com");
  });
});
