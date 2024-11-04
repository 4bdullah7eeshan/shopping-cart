import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Carousel from "../src/components/Carousel/Carousel";

vi.mock('react-slick', () => {
  return {
    default: ({ children }) => <div>{children}</div>,
  };
});

describe("Carousel Component", () => {
  it("renders the carousel with images", () => {
    render(<Carousel />);
    
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(5);
  });

  it("displays the correct alt text for images", () => {
    render(<Carousel />);

    const images = screen.getAllByRole('img');
    images.forEach((img, index) => {
      expect(img).toHaveAttribute('alt', `Slide ${index}`);
    });
  });
});
