import { render, screen } from "@testing-library/react";
import AboutMain from "../src/components/AboutMain/AboutMain";
import { describe, it, expect } from "vitest";

describe("AboutMain Component", () => {
  it("renders the About section", () => {
    render(<AboutMain />);

    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("About");

    const image = screen.getByAltText("about");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "https://cdn.pixabay.com/photo/2018/07/28/09/23/woman-3567600_1280.jpg");

    const paragraphs = screen.getAllByText(/Lorem ipsum/);
    expect(paragraphs.length).toBe(5);
  });
});
