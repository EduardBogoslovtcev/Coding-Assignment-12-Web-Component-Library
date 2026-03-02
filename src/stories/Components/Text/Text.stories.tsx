import { Meta, StoryObj } from "@storybook/react-webpack5";
import { Text } from "./Text";

const meta: Meta<typeof Text> = {
    title: "Components/Text",
    component: Text,
    argTypes: {
        content: { control: "text" },
        color: { control: "color" },
        backgroundColor: { control: "color" },
        disabled: { control: "boolean" },
    },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
    args: {
        content: "This is a default text component.",
        color: "#000000",
        backgroundColor: "#ffffff",
        disabled: false,
    },
};

export const Disabled: Story = {
    args: {
        content: "This text is disabled.",
        color: "#000000",
        backgroundColor: "#ffffff",
        disabled: true,
    },
};
