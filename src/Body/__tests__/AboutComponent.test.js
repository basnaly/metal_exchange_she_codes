import { render, screen, fireEvent } from '@testing-library/react';
import AboutComponent from '../AboutComponent';

describe('AboutComponent', () => {
    it('should render title element', () => {
        render(
            <AboutComponent />
        );

    const divEl = screen.getByTestId("about-element");
    expect(divEl).toBeInTheDocument();
    });

    it('should render img element', () => {
        render(
            <AboutComponent />
        );

    const imgEl = screen.getByTestId("img-element");
    expect(imgEl).toBeInTheDocument();
    });

    it('should render text element', () => {
        render(
            <AboutComponent />
        );

    const textEl = screen.getByTestId("text-element");
    expect(textEl).toBeInTheDocument();
    });

    it('should render two a elements', () => {
        render(
            <AboutComponent />
        );

    const twoAEl = screen.getAllByRole("link");
    expect(twoAEl.length).toEqual(2);
    });
})