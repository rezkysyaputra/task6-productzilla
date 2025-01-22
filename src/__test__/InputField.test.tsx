import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import InputField from "../components/InputField";
describe("InputField Component", () => {
  const mockOnChange = jest.fn();

  test("renders input field with label", () => {
    render(
      <InputField
        id="email"
        label="Email"
        type="email"
        value=""
        onChange={mockOnChange}
      />
    );
    const labelElement = screen.getByLabelText(/email/i);
    expect(labelElement).toBeInTheDocument();
  });

  test("calls onChange when input value changes", () => {
    render(
      <InputField
        id="email"
        label="Email"
        type="email"
        value=""
        onChange={mockOnChange}
      />
    );
    const inputElement = screen.getByRole("textbox", { name: /email/i });
    fireEvent.change(inputElement, { target: { value: "test@example.com" } });
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  test("displays error message", () => {
    render(
      <InputField
        id="email"
        label="Email"
        type="email"
        value=""
        onChange={mockOnChange}
        error="Invalid email"
      />
    );
    const errorElement = screen.getByRole("alert");
    expect(errorElement).toHaveTextContent(/invalid email/i);
  });
});
