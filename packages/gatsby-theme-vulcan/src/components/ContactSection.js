/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import { Heading, Text } from "./common-page-elements/index";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 1.5em;
  width: 90%;

  @media (min-width: 500px) {
    width: 70%;
  }

  @media (min-width: 700px) {
    width: 70%;
  }

  @media (min-width: 1280px) {
    width: 50%;
  }
`;

const Label = styled.label`
  margin: 1em;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.input`
  height: 2em;
`;

const TextArea = styled.textarea``;

const Buttons = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 1em;
`;

export default () => {
  return (
    <Container>
      <Heading
        sx={{
          fontFamily: "heading",
          letterSpacing: "text",
          fontWeight: "heading",
          textTransform: "uppercase",
          borderBottom: "solid 2px",
          borderColor: "primary",
          padding: "0.5em",
          maxWidth: "50%",
          marginBottom: "1em"
        }}
      >
        Lets Talk
      </Heading>
      <Text
        sx={{
          fontFamily: "body",
          fontWeight: "500",
          color: "text",
          marginTop: "1em"
        }}
      >
        Need to ask us a question? Get in touch!
      </Text>
      <ContactForm
        sx={{
          padding: "1em",
          fontFamily: "heading"
        }}
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
      >
        <input type="hidden" name="bot-field" />
        <Label
          sx={{
            textTransform: "uppercase",
            fontWeight: "bold",
            letterSpacing: "body"
          }}
        >
          Name
          <Input
            sx={{
              border: "solid 2px",
              borderColor: "primary",
              marginTop: "1em",
              ":active": {
                borderColor: "accent"
              },
              ":focus": {
                borderColor: "accent"
              }
            }}
            type="text"
            name="name"
            id="name"
            required
          />
        </Label>
        <Label
          sx={{
            textTransform: "uppercase",
            fontWeight: "bold",
            letterSpacing: "body"
          }}
        >
          Email
          <Input
            sx={{
              border: "solid 2px",
              borderColor: "primary",
              marginTop: "1em",
              ":active": {
                borderColor: "accent"
              },
              ":focus": {
                borderColor: "accent"
              }
            }}
            type="email"
            name="email"
            id="email"
            required
          />
        </Label>
        <Label
          sx={{
            textTransform: "uppercase",
            fontWeight: "bold",
            letterSpacing: "body"
          }}
        >
          Subject
          <Input
            sx={{
              border: "solid 2px",
              borderColor: "primary",
              marginTop: "1em",
              ":active": {
                borderColor: "accent"
              },
              ":focus": {
                borderColor: "accent"
              }
            }}
            type="text"
            name="subject"
            id="subject"
            required
          />
        </Label>
        <Label
          sx={{
            textTransform: "uppercase",
            fontWeight: "bold",
            letterSpacing: "body"
          }}
        >
          Message
          <TextArea
            sx={{
              border: "solid 2px",
              borderColor: "primary",
              marginTop: "1em",
              ":active": {
                borderColor: "accent"
              },
              ":focus": {
                borderColor: "accent"
              }
            }}
            name="message"
            id="message"
            rows="10"
            required
          />
        </Label>
        <Buttons>
          <button
            sx={{
              fontFamily: "heading",
              fontWeight: "heading",
              border: "0.1em solid",
              padding: "0.35em 1.2em",
              borderColor: "primary",
              backgroundColor: "primary",
              color: "white",
              cursor: "crosshair",
              textTransform: "uppercase",
              height: "2.5em",
              "&:hover": {
                color: "primary",
                backgroundColor: "accent",
                fontWeight: "bold",
                boxShadow: "-3px 3px #00001F"
              },
              "&:active": {
                boxShadow: "-1px 1px #00001F"
              }
            }}
            type="submit"
          >
            Send
          </button>
          <Input
            sx={{
              fontFamily: "heading",
              fontWeight: "heading",
              border: "0.1em solid",
              padding: "0.35em 1.2em",
              borderColor: "primary",
              backgroundColor: "primary",
              color: "white",
              cursor: "crosshair",
              textTransform: "uppercase",
              height: "2.5em",
              "&:hover": {
                color: "primary",
                backgroundColor: "accent",
                fontWeight: "bold",
                boxShadow: "-3px 3px #00001F"
              },
              "&:active": {
                boxShadow: "-1px 1px #00001F"
              }
            }}
            type="reset"
            value="Clear"
          />
        </Buttons>
      </ContactForm>
    </Container>
  );
};
