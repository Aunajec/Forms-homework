
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders form inputs", () => {
  render(<App />);
  expect(screen.getByPlaceholderText(/Name/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Phone/i)).toBeInTheDocument();
});

test("shows error on invalid email", () => {
  render(<App />);
  const emailInput = screen.getByPlaceholderText(/Email/i);
  fireEvent.change(emailInput, { target: { value: "invalid" } });
  fireEvent.blur(emailInput);
  expect(screen.getByText(/Valid email required/i)).toBeInTheDocument();
})