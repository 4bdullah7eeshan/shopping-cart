import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import HomeMain from "../src/components/HomeMain/HomeMain";

vi.mock("../src/components/Carousel/Carousel", () => {
  return {
    default: () => <div>Mocked Carousel</div>,
  };
});

vi.mock("../src/components/TopProducts/TopProducts", () => {
  return {
    default: () => <div>Mocked Top Products</div>,
  };
});

describe("HomeMain Component", () => {
  it("renders the Carousel and TopProducts components", () => {
    render(<HomeMain />);

    const carouselElement = screen.getByText(/mocked carousel/i);
    expect(carouselElement).toBeInTheDocument();

    const topProductsElement = screen.getByText(/mocked top products/i);
    expect(topProductsElement).toBeInTheDocument();
  });

});
