import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../components/Navbar";
import "@testing-library/jest-dom";

describe("Navbar Component", () => {
  test("renders Navbar with links", () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/projects/i)).toBeInTheDocument();
    expect(screen.getByText(/contact/i)).toBeInTheDocument();
  });

  test("toggles menu on mobile", () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    const toggleButton = screen.getByRole("button", {
      name: /open main menu/i,
    });
    fireEvent.click(toggleButton);

    expect(screen.getByText(/projects/i)).toBeVisible();
    expect(screen.getByText(/contact/i)).toBeVisible();
  });
});
