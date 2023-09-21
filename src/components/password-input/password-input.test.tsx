import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import PasswordInput from ".";

describe("PasswordInput component", () => {
  it("Renders with default prop values", () => {
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

  it("Renders with all custom prop values", () => {
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

  it("Renders with only uppercase custom prop value", () => {
    render(
      <PasswordInput
        options={{
          uppercase: true,
        }}
      />
    );

    // Check if the custom uppercase value is displayed in the component
    expect(
      screen.getByText("Password must be at least 8 characters long")
    ).toBeInTheDocument();
    expect(screen.getByText("Has an uppercase letter")).toBeInTheDocument();
    expect(screen.queryByText("Has a number 0-9")).toBeNull();
    expect(
      screen.queryByText(
        "Has one or more of these special characters: !@#$%^&*"
      )
    ).toBeNull();
  });

  it("Renders with only number custom prop value", () => {
    render(
      <PasswordInput
        options={{
          number: true,
        }}
      />
    );

    // Check if the custom number value is displayed in the component
    expect(
      screen.getByText("Password must be at least 8 characters long")
    ).toBeInTheDocument();
    expect(screen.queryByText("Has an uppercase letter")).toBeNull();
    expect(screen.getByText("Has a number 0-9")).toBeInTheDocument();
    expect(
      screen.queryByText(
        "Has one or more of these special characters: !@#$%^&*"
      )
    ).toBeNull();
  });

  it("Renders with only special character custom prop value", () => {
    render(
      <PasswordInput
        options={{
          specialChar: true,
        }}
      />
    );

    // Check if the custom special character value is displayed in the component
    expect(
      screen.getByText("Password must be at least 8 characters long")
    ).toBeInTheDocument();
    expect(screen.queryByText("Has an uppercase letter")).toBeNull();
    expect(screen.queryByText("Has a number 0-9")).toBeNull();
    expect(
      screen.getByText("Has one or more of these special characters: !@#$%^&*")
    ).toBeInTheDocument();
  });
});
