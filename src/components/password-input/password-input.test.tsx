import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import PasswordInput from ".";

describe("PasswordInput component", () => {
  it("renders with default prop values", () => {
    render(<PasswordInput options={{}} />);

    // Check if the default values are displayed in the component
    expect(
      screen.getByText("Password must be at least 8 characters long")
    ).toBeInTheDocument();
    expect(screen.queryByText("Has an uppercase letter")).toBeNull();
    expect(screen.queryByText("Has a number 0-9")).toBeNull();
    expect(
      screen.queryByText(
        "Has one or more of these special characters: !@#$%^&*"
      )
    ).toBeNull();
  });

  it("renders with custom prop values", () => {
    render(
      <PasswordInput
        options={{
          length: 10,
          uppercase: true,
          number: true,
          specialChar: true,
        }}
      />
    );

    // Check if the custom values are displayed in the component
    expect(
      screen.getByText("Password must be at least 10 characters long")
    ).toBeInTheDocument();
    expect(screen.getByText("Has an uppercase letter")).toBeInTheDocument();
    expect(screen.getByText("Has a number 0-9")).toBeInTheDocument();
    expect(
      screen.getByText("Has one or more of these special characters: !@#$%^&*")
    ).toBeInTheDocument();
  });
});
