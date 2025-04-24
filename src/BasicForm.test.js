import { render, screen, fireEvent } from "@testing-library/react";
import BasicForm from "./BasicForm";

test("renders all form inputs", () => {
  render(<BasicForm />);
  expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/phone/i)).toBeInTheDocument();
});

test("shows error for invalid email", () => {
  render(<BasicForm />);
  const emailInput = screen.getByPlaceholderText(/email/i);
  fireEvent.change(emailInput, { target: { value: "bademail" } });
  fireEvent.blur(emailInput);
  expect(screen.getByText(/valid email required/i)).toBeInTheDocument();
});

test("shows error for invalid phone", () => {
  render(<BasicForm />);
  const phoneInput = screen.getByPlaceholderText(/phone/i);
  fireEvent.change(phoneInput, { target: { value: "123" } });
  fireEvent.blur(phoneInput);
  expect(screen.getByText(/10-digit phone required/i)).toBeInTheDocument();
});
