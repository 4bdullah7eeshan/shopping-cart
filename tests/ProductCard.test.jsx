import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ProductCard from "../src/components/ProductCard/ProductCard";
import { describe, it, expect } from "vitest";

describe("ProductCard", () => {
  const productMock = {
    id: 1,
    image: "https://example.com/image.jpg",
    title: "Test Product",
    price: 19.99,
    rating: {
      rate: 4.5,
      count: 100,
    },
  };

  const renderComponent = () =>
    render(
      <BrowserRouter>
        <ProductCard product={productMock} />
      </BrowserRouter>
    );

  it("renders product title, price, and rating", () => {
    renderComponent();

    expect(screen.getByText("Test Product")).toBeInTheDocument();

    expect(screen.getByText("$19.99")).toBeInTheDocument();

    expect(screen.getByText("4.5 / 5")).toBeInTheDocument();
  });

  it("renders product image with correct alt text", () => {
    renderComponent();

    const image = screen.getByAltText("Test Product");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "https://example.com/image.jpg");
  });

  it("renders link with correct URL", () => {
    renderComponent();

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/products/1");
  });
});
