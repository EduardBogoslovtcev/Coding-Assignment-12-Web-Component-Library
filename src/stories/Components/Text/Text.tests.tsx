import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Text } from "./Text";

describe("Text Component", () => {
    test("renders text and is visible", () => {
        render(<Text content="Test Content" />);
        const text = screen.getByText("Test Content");
        expect(text).toBeVisible();
    });

    test("background color changes when disabled", () => {
        render(
            <Text content="Disabled Text" backgroundColor="#ffffff" disabled />,
        );
        const text = screen.getByText("Disabled Text");
        expect(text).toHaveStyle("background-color: #eeeeee");
    });
});
