import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import TopProducts from "../src/components/TopProducts/TopProducts";

vi.mock("../src/context/CartContext", () => ({
  useCart: () => ({
    products: [
      { id: 1, title: "Product 1", price: 10, rating: { rate: 4.6 } },
      { id: 2, title: "Product 2", price: 20, rating: { rate: 4.5 } },
      { id: 3, title: "Product 3", price: 30, rating: { rate: 4.2 } },
    ],
    addToCart: vi.fn(),
  }),
}));

describe("TopProducts Component", () => {
  it("renders top products based on rating", () => {
    render(
      <MemoryRouter>
        <TopProducts />
      </MemoryRouter>
    );

    expect(screen.getByText(/Product 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Product 2/i)).toBeInTheDocument();
    expect(screen.queryByText(/Product 3/i)).not.toBeInTheDocument();
  });
});
