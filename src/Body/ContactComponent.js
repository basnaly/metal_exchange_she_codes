import React, { useState } from "react";

import { Button, Alert, InputGroup, FormControl } from 'react-bootstrap';

const ContactComponent = () => {

    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [emailName, setEmailName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [message, setMessage] = useState('');

    const [isSent, setIsSent] = useState(false);

    const [error, setError] = useState('');

    const validate = () => {

        let error = '';

        if (!name) {
            error = 'Name cannot be blank';
        }
        else if (name.length < 3) {
            error = "Name must have at least 3 symbols";
        }

        else if (!subject) {
            error = 'Subject cannot be blank';
        }

        else if (!emailName) {
            error = 'Email name cannot be blank';
        }

        else if (!emailAddress) {
            error = 'Email address cannot be blank';
        }

        else if (!message) {
            error = 'Message cannot be blank';
        }

        if (error) {
            setError(error)
            return false;
        }
        return true;

    }

    const submit = (e) => {
        e.preventDefault();

        const isValid = validate();
        if (!isValid) {
            return;
        }

        let email = emailName + '@' + emailAddress;
        console.log(email)

        setIsSent(true);

        setName('');
        setSubject('');
        setEmailName('');
        setEmailAddress('');
        setMessage('');
        setError('');
    }

    return (
        <div className="contact d-flex flex-column overflow-auto">
            <div className="title-contact">
                Contact us
            </div>

            { isSent && 
            <Alert className="align-self-center"
                    variant="success" 
                    onClose={() => setIsSent(false)} 
                    dismissible>
                <Alert.Heading>
                    Your message has been sent! 
                </Alert.Heading>
            </Alert>
            }
            <div className="d-flex flex-column mx-5 my-4">

                <InputGroup className="mb-4">
                    <InputGroup.Text id="basic-addon2">Full name</InputGroup.Text>
                    <FormControl
                        placeholder="Please enter your full name here"
                        aria-label="Please enter your full name here"
                        aria-describedby="basic-addon2"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </InputGroup>

                <InputGroup className="mb-4">
                    <InputGroup.Text id="basic-addon3">Subject</InputGroup.Text>
                    <FormControl
                        placeholder="Please enter the subject here"
                        id="basic-url"
                        aria-describedby="basic-addon3"
                        onChange={(e) => setSubject(e.target.value)}
                        value={subject}
                    />
                </InputGroup>

                <InputGroup className="mb-4">
                    <FormControl
                        placeholder="Please enter your email name here"
                        aria-label="Please enter your email name here"
                        aria-describedby="basic-addon1"
                        onChange={(e) => setEmailName(e.target.value)}
                        value={emailName}
                    />

                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                    <FormControl
                        placeholder="and your email address here"
                        aria-label="and your email address here"
                        aria-describedby="basic-addon1"
                        onChange={(e) => setEmailAddress(e.target.value)}
                        value={emailAddress}
                    />
                </InputGroup>

                <InputGroup className="mb-4">
                    <InputGroup.Text>Message</InputGroup.Text>
                    <FormControl
                        placeholder="Please enter your message here"
                        as="textarea"
                        aria-label="Message"
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                    />
                </InputGroup>

                <div data-testid="error-element"
                    style={{ fontSize: 12, color: 'red' }}>
                    {error}
                </div>

                <InputGroup className="w-auto align-self-center mb-4">
                    <InputGroup.Text id="basic-addon5">Submit your form</InputGroup.Text>
                    <Button variant="outline-secondary"
                        id="button-addon2"
                        onClick={submit}
                    >
                        Send
                    </Button>
                </InputGroup>

            </div>

        </div>
    )
}

export default ContactComponent;