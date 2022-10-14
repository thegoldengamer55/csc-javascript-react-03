import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greet.js";
import Greet from "./Greet.js";

describe('Greeting component', () => {
    test('renders Hello World as a text', () => {
        // Arrange
        render(<Greet/>);

        // Act
        // ... nothing


        // Assert
        const helloWorldElement = screen.getByText('Hello World!');
        expect(helloWorldElement).toBeInTheDocument();
    });

    test('renders good to see you if the button was NOT clicked', () => {
        render(<Greet/>)
    
        const outputElement = screen.getByText('good to see you', {exact: false});
        expect(outputElement).toBeInTheDocument();
    });
});