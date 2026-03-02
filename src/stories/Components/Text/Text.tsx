import React from "react";
import styled from "styled-components";
import { TextProps } from "./Text.types";

const StyledText = styled.p<{
    color: string;
    backgroundColor: string;
    disabled?: boolean;
}>`
    font-size: 1rem;
    line-height: 1.5;
    padding: 0.5rem;
    margin: 0;
    border-radius: 4px;

    color: ${({ disabled, color }) => (disabled ? "#999999" : color)};
    background-color: ${({ disabled, backgroundColor }) =>
        disabled ? "#eeeeee" : backgroundColor};

    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "default")};
    transition: all 0.3s ease;

    @media (max-width: 768px) {
        font-size: 0.9rem;
    }
`;

export const Text: React.FC<TextProps> = ({
    content,
    color = "#000000",
    backgroundColor = "transparent",
    disabled = false,
}) => {
    return (
        <StyledText
            color={color}
            backgroundColor={backgroundColor}
            disabled={disabled}
        >
            {content}
        </StyledText>
    );
};
