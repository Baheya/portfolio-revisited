import styled from 'styled-components';
import { motion } from 'framer-motion';

const SectionGrid = styled.section`
  grid-column: 2 / -2;
  grid-row: 4 / 5;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 25vh);
  scroll-snap-align: start;
`;

const ContactHeading = styled.h1`
  color: var(--color-text-primary);
  margin: 0;
  font-size: 96px;
  max-width: 900px;
  grid-column: 2 / 4;
  grid-row: 1 / 2;
  text-align: center;
`;

const ContactForm = styled.form`
  grid-column: 1/ 3;
  grid-row: 2 / 5;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const ContactInput = styled.input`
  background: none;
  border: 2px solid var(--color-text-primary);
  height: ${(props) => (props.type === 'text' ? '40px' : '200px')};
  margin: 1rem 0;
`;

const InputLabel = styled.label`
  position: absolute;
  left: -1000px;
  width: 1px;
  height: 1px;
`;

const SubmitButton = styled.button`
  background-color: var(--color-text-primary);
  border: 2px solid var(--color-computed-background);
  width: 80px;
  height: 35px;
  margin: auto;
  color: var(--color-computed-background);
  &:hover {
    background-color: var(--color-computed-background);
    border: 2px solid var(--color-text-primary);
    color: var(--color-text-primary);
  }
`;

const Contact = () => {
  return (
    <SectionGrid>
      <ContactHeading id="Contact">Get in Touch</ContactHeading>
      <ContactForm>
        <InputLabel htmlFor="user_name">Name</InputLabel>
        <ContactInput name="user_name" type="text" placeholder="Name" />
        <InputLabel htmlFor="user_email">Email</InputLabel>
        <ContactInput name="user_email" type="text" placeholder="Email" />
        <InputLabel htmlFor="user_message">Message</InputLabel>
        <ContactInput
          name="user_message"
          type="textarea"
          placeholder="Message"
        />
        <SubmitButton>Submit</SubmitButton>
      </ContactForm>
    </SectionGrid>
  );
};

export { Contact };
