import { render, screen, fireEvent } from '@testing-library/react';
import ContactComponent from '../ContactComponent';

function submitForm() {
    const nameInputEl = screen.getByPlaceholderText(/Please enter your full name here/i);
    fireEvent.click(nameInputEl);
    fireEvent.change(nameInputEl, { target: { value: "Max" } });

    const subjectInputEl = screen.getByPlaceholderText(/Please enter the subject here/i);
    fireEvent.click(subjectInputEl);
    fireEvent.change(subjectInputEl, { target: { value: 'gold' } });

    const emailNameInputEl = screen.getByPlaceholderText(/Please enter your email name here/i);
    fireEvent.click(emailNameInputEl);
    fireEvent.change(emailNameInputEl, { target: { value: 'max551030' } });

    const emailAddressInputEl = screen.getByPlaceholderText(/and your email address here/i);
    fireEvent.click(emailAddressInputEl);
    fireEvent.change(emailAddressInputEl, { target: { value: 'hotmail.com' } });

    const textareaInputEl = screen.getByPlaceholderText(/Please enter your message here/i);
    fireEvent.click(textareaInputEl);
    fireEvent.change(textareaInputEl, { target: { value: 'some text' } });

    const buttonElement = screen.getByRole("button", { name: /Send/i });
    fireEvent.click(buttonElement);
};

describe('ContactComponent', () => {
    //name
    it('should render name input element', () => {
        render(
            <ContactComponent />
        );
        const nameInputEl = screen.getByPlaceholderText(/Please enter your full name here/i);
        expect(nameInputEl).toBeInTheDocument();
    });

    it('should be able to type name into input', () => {
        render(
            <ContactComponent />
        );
        const nameInputEl = screen.getByPlaceholderText(/Please enter your full name here/i);
        fireEvent.click(nameInputEl)
        fireEvent.change(nameInputEl, { target: { value: "Max" } });
        expect(nameInputEl.value).toBe("Max");
    });

    //subject
    it('should render subject input element', () => {
        render(
            <ContactComponent />
        );
        const subjectInputEl = screen.getByPlaceholderText(/Please enter the subject here/i);
        expect(subjectInputEl).toBeInTheDocument();
    });

    it('should be able to type subject into input', () => {
        render(
            <ContactComponent />
        );
        const subjectInputEl = screen.getByPlaceholderText(/Please enter the subject here/i);
        fireEvent.click(subjectInputEl)
        fireEvent.change(subjectInputEl, { target: { value: 'gold' } })
        expect(subjectInputEl.value).toBe('gold');
    });

    // email name
    it('should render email name input element', () => {
        render(
            <ContactComponent />
        );
        const emailNameInputEl = screen.getByPlaceholderText(/Please enter your email name here/i);
        expect(emailNameInputEl).toBeInTheDocument();
    });

    it('should be able to type email name into input', () => {
        render(
            <ContactComponent />
        );
        const emailNameInputEl = screen.getByPlaceholderText(/Please enter your email name here/i);
        fireEvent.click(emailNameInputEl)
        fireEvent.change(emailNameInputEl, { target: { value: 'cat' } })
        expect(emailNameInputEl.value).toBe('cat');
    });

    // email address 
    it('should render email address input element', () => {
        render(
            <ContactComponent />
        );
        const emailAddressInputEl = screen.getByPlaceholderText(/and your email address here/i);
        expect(emailAddressInputEl).toBeInTheDocument();
    });

    it('should be able to type email name into input', () => {
        render(
            <ContactComponent />
        );
        const emailAddressInputEl = screen.getByPlaceholderText(/and your email address here/i);
        fireEvent.click(emailAddressInputEl)
        fireEvent.change(emailAddressInputEl, { target: { value: 'hotmail.com' } })
        expect(emailAddressInputEl.value).toBe('hotmail.com');
    });

    //textarea
    it('should render textarea input element', () => {
        render(
            <ContactComponent />
        );
        const textareaInputEl = screen.getByPlaceholderText(/Please enter your message here/i);
        expect(textareaInputEl).toBeInTheDocument();
    });

    it('should be able to type textarea into input', () => {
        render(
            <ContactComponent />
        );
        const textareaInputEl = screen.getByPlaceholderText(/Please enter your message here/i);
        fireEvent.click(textareaInputEl)
        fireEvent.change(textareaInputEl, { target: { value: 'some text' } })
        expect(textareaInputEl.value).toBe('some text');
    });

    it('should send form and show alert', () => {
        render(
            <ContactComponent />
        );

        submitForm();

        const alertEl = screen.getByText(/Your message has been sent!/i);
        expect(alertEl).toBeInTheDocument();
    });

    // errors
    it('error when the name is empty', () => {
        render(
            <ContactComponent />
        );

        const buttonElement = screen.getByRole("button", { name: /Send/i });
        fireEvent.click(buttonElement);

        const errorDivEl = screen.getByText(/Name cannot be blank/i);
        expect(errorDivEl).toBeInTheDocument();

    });

    it('error when the name has less than 3 symbols', () => {
        render(
            <ContactComponent />
        );

        const nameInputEl = screen.getByPlaceholderText(/Please enter your full name here/i);
        fireEvent.click(nameInputEl);
        fireEvent.change(nameInputEl, { target: { value: "Ma" } });

        const buttonElement = screen.getByRole("button", { name: /Send/i });
        fireEvent.click(buttonElement);

        const errorDivEl = screen.getByText(/Name must have at least 3 symbols/i);
        expect(errorDivEl).toBeInTheDocument();

    });

    it('error when the subject is empty', () => {
        render(
            <ContactComponent />
        );

        const nameInputEl = screen.getByPlaceholderText(/Please enter your full name here/i);
        fireEvent.click(nameInputEl);
        fireEvent.change(nameInputEl, { target: { value: "Max" } });

        const buttonElement = screen.getByRole("button", { name: /Send/i });
        fireEvent.click(buttonElement);

        const errorDivEl = screen.getByText(/Subject cannot be blank/i);
        expect(errorDivEl).toBeInTheDocument();

    });

    it('error when the email name is empty', () => {
        render(
            <ContactComponent />
        );

        const nameInputEl = screen.getByPlaceholderText(/Please enter your full name here/i);
        fireEvent.click(nameInputEl);
        fireEvent.change(nameInputEl, { target: { value: "Max" } });

        const subjectInputEl = screen.getByPlaceholderText(/Please enter the subject here/i);
        fireEvent.click(subjectInputEl);
        fireEvent.change(subjectInputEl, { target: { value: "gold" } });

        const buttonElement = screen.getByRole("button", { name: /Send/i });
        fireEvent.click(buttonElement);

        const errorDivEl = screen.getByText(/Email name cannot be blank/i);
        expect(errorDivEl).toBeInTheDocument();

    });

    it('error when the email address is empty', () => {
        render(
            <ContactComponent />
        );

        const nameInputEl = screen.getByPlaceholderText(/Please enter your full name here/i);
        fireEvent.click(nameInputEl);
        fireEvent.change(nameInputEl, { target: { value: "Max" } });

        const subjectInputEl = screen.getByPlaceholderText(/Please enter the subject here/i);
        fireEvent.click(subjectInputEl);
        fireEvent.change(subjectInputEl, { target: { value: "gold" } });

        const emailNameInputEl = screen.getByPlaceholderText(/Please enter your email name here/i);
        fireEvent.click(emailNameInputEl);
        fireEvent.change(emailNameInputEl, { target: { value: "max551030" } });

        const buttonElement = screen.getByRole("button", { name: /Send/i });
        fireEvent.click(buttonElement);

        const errorDivEl = screen.getByText(/Email address cannot be blank/i);
        expect(errorDivEl).toBeInTheDocument();
    });

    it('error when the textarea is empty', () => {
        render(
            <ContactComponent />
        );

        const nameInputEl = screen.getByPlaceholderText(/Please enter your full name here/i);
        fireEvent.click(nameInputEl);
        fireEvent.change(nameInputEl, { target: { value: "Max" } });

        const subjectInputEl = screen.getByPlaceholderText(/Please enter the subject here/i);
        fireEvent.click(subjectInputEl);
        fireEvent.change(subjectInputEl, { target: { value: 'gold' } });

        const emailNameInputEl = screen.getByPlaceholderText(/Please enter your email name here/i);
        fireEvent.click(emailNameInputEl);
        fireEvent.change(emailNameInputEl, { target: { value: 'max551030' } });

        const emailAddressInputEl = screen.getByPlaceholderText(/and your email address here/i);
        fireEvent.click(emailAddressInputEl);
        fireEvent.change(emailAddressInputEl, { target: { value: 'hotmail.com' } });

        const buttonElement = screen.getByRole("button", { name: /Send/i });
        fireEvent.click(buttonElement);

        const errorDivEl = screen.getByText(/Message cannot be blank/i);
        expect(errorDivEl).toBeInTheDocument();
    });
    
})
