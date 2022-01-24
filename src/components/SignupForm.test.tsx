import "@testing-library/jest-dom";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { SignupForm } from "./SignupForm";
import { render, fireEvent, screen } from "@testing-library/react";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

describe("SignupForm.tsx", () => {
  beforeAll(async () => {
    const { findByTestId } = render(<SignupForm />);
    const submitButton = await findByTestId("submit-button");
    fireEvent.click(submitButton);
  });

  it("Should require email", () => {
    expect(screen.findByText("Please input your email!")).toBeTruthy();
  });

  it("Should require password", () => {
    expect(screen.findByText("Please input your password!")).toBeTruthy();
  });

  it("Should require confirm password", () => {
    expect(screen.findByText("Please confirm your password!")).toBeTruthy();
  });

  it("Should require name", () => {
    expect(screen.findByText("Please input your name!")).toBeTruthy();
  });

  it("Should require last name", () => {
    expect(screen.findByText("Please input your last name!")).toBeTruthy();
  });

  it("Should require country", () => {
    expect(screen.findByText("Please input your country!")).toBeTruthy();
  });

  it("Should require phone", () => {
    expect(screen.findByText("Please input your phone!")).toBeTruthy();
  });
});
