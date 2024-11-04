import { render, screen } from "@testing-library/react";
import { beforeEach } from "vitest";
import { describe, it, expect, vi } from "vitest";
import ProductsMain from "../src/components/ProductsMain/ProductsMain";
import { useCart } from "../src/context/CartContext";

vi.mock("../src/context/CartContext", () => ({
  useCart: vi.fn(),
}));

describe("ProductsMain", () => {
    const mockProducts = [
        { id: 1, title: "Product 1", price: 100, image: "image1.jpg", rating: { rate: 4.5, count: 10 }, category: "Category 1" },
        { id: 2, title: "Product 2", price: 200, image: "image2.jpg", rating: { rate: 3.5, count: 5 }, category: "Category 2" },
        { id: 3, title: "Product 3", price: 300, image: "image3.jpg", rating: { rate: 5, count: 8 }, category: "Category 1" },
    ];
      

  const mockCategories = ["Category 1", "Category 2"];
  const mockAddToCart = vi.fn();

  beforeEach(() => {
    useCart.mockReturnValue({
      products: mockProducts,
      categories: mockCategories,
      error: null,
      loading: false,
      addToCart: mockAddToCart,
    });
  });

  it("renders loading state", () => {
    useCart.mockReturnValueOnce({
      loading: true,
      products: null,
      categories: [],
      error: null,
      addToCart: mockAddToCart,
    });
    
    render(<ProductsMain />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders error message", () => {
    useCart.mockReturnValueOnce({
      loading: false,
      products: null,
      categories: [],
      error: true,
      addToCart: mockAddToCart,
    });

    render(<ProductsMain />);
    expect(screen.getByText("A network error was encountered")).toBeInTheDocument();
  });

  
});
