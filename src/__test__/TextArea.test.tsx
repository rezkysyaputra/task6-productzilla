import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TextAreaField from "../components/TextAreaField";
describe("TextAreaField Component", () => {
  const mockOnChange = jest.fn();

  test("renders textarea with label", () => {
    render(
      <TextAreaField
        id="message"
        label="Message"
        value=""
        onChange={mockOnChange}
      />
    );
    const labelElement = screen.getByLabelText(/message/i);
    expect(labelElement).toBeInTheDocument();
  });

  test("calls onChange when textarea value changes", () => {
    render(
      <TextAreaField
        id="message"
        label="Message"
        value=""
        onChange={mockOnChange}
      />
    );
    const textareaElement = screen.getByRole("textbox", { name: /message/i });
    fireEvent.change(textareaElement, { target: { value: "Hello World" } });
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  test("displays error message", () => {
    render(
      <TextAreaField
        id="message"
        label="Message"
        value=""
        onChange={mockOnChange}
        error="Message is required"
      />
    );
    const errorElement = screen.getByRole("alert");
    expect(errorElement).toHaveTextContent(/message is required/i);
  });
});
