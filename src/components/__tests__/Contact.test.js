import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom";

test("Should Load Contact us component", () => {
    render(<Contact />);

    const button = screen.getByText("Random");

    expect(button).toBeInTheDocument();
});