import "@testing-library/jest-dom";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { SignupForm } from "./SignupForm";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";

const typeInput = (element: HTMLElement, text: string) => {
  fireEvent.change(element, {
    target: {
      value: text,
    },
  });
};

describe("SignupForm.tsx", () => {
  describe("Require Field", () => {
    beforeAll(async () => {
      const { findByTestId } = render(<SignupForm />);
      const form = await findByTestId("form");
      fireEvent.submit(form);
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

  describe("Trigger", () => {
    const onFinish = vi.fn();
    const onFinishFailed = vi.fn();
    beforeEach(() => {
      render(
        <SignupForm onFinish={onFinish} onFinishFailed={onFinishFailed} />
      );
    });

    it("Should trigger onFinish when submit with correct data", async () => {
      typeInput(screen.getByTestId("email"), "superadmin@gmail.com");
      typeInput(screen.getByTestId("password"), "123456789");
      typeInput(screen.getByTestId("confirm-password"), "123456789");
      typeInput(screen.getByTestId("name"), "admin");
      typeInput(screen.getByTestId("last-name"), "admin");
      typeInput(
        screen.getByTestId("organization"),
        "Best Organization in my life"
      );
      typeInput(screen.getByTestId("country"), "Thailand");
      typeInput(screen.getByTestId("phone"), "0123456789");
      fireEvent.click(screen.getByTestId("is_agree_collect_data"));
      fireEvent.click(screen.getByTestId("need_notify_review_update"));
      fireEvent.click(screen.getByTestId("need_contact_to_review"));
      fireEvent.submit(screen.getByTestId("submit-button"));

      await waitFor(() => {
        expect(onFinish).toBeCalled();
      });
    });

    it("Should trigger onFinishFailed when submit with incorrent or empty data", async () => {
      fireEvent.submit(screen.getByTestId("submit-button"));
      await waitFor(() => {
        expect(onFinishFailed).toBeCalled();
      });
    });
  });
});
