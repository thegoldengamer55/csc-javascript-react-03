import { render, screen } from "@testing-library/react";
import Greet from "./Greet.js";

describe('Greeting component', () => {
    test('renders Hellow World as a text', () => {
        render(<Greet/>);

        const helloWorldElement = screen.getByText('Hello World!');
        expect(helloWorldElement).toBeInTheDocument();
    });
});