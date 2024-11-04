import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { useCart } from "../src/context/CartContext";
import AddToCartButton from "../src/components/AddToCartButton/AddToCartButton";

vi.mock("../src/context/CartContext", () => ({
  useCart: vi.fn(),
}));

describe("AddToCartButton Component", () => {
  it("calls addToCart with the correct parameters when clicked", () => {
    const addToCartMock = vi.fn();
    useCart.mockReturnValue({ addToCart: addToCartMock });

    const product = { id: 1, title: "Test Product", price: 10 };
    const quantity = 2;

    render(<AddToCartButton product={product} quantity={quantity} />);

    const button = screen.getByRole("button", { name: /add to cart/i });
    fireEvent.click(button);

    expect(addToCartMock).toHaveBeenCalledWith(product, quantity);
  });
});
