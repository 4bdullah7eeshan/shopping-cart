import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Header from "../src/components/Header/Header";

vi.mock("../src/components/Nav/Nav", () => {
  return {
    default: () => <div>Mocked Nav</div>,
  };
});

describe("Header Component", () => {
  it("renders the Nav component", () => {
    render(<Header />);

    const navElement = screen.getByText(/mocked nav/i);
    expect(navElement).toBeInTheDocument();
  });

});
