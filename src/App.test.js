import { render, fireEvent } from "@testing-library/react";
import React from "react";
import App from "./App";
import { act } from "react-dom/test-utils";

test("renders App without crashing", () => {
  render(<App />);
});

test('firstname should have an empty placeholder ', () => {
  const container = render(<App/>);
  const firstName = container.getByTestId(/firstname-input/i)
  expect(firstName.placeholder).toBe('')
})

test('Last name should have an empty placeholder', () => {
  const container = render(<App/>);
  const lastName = container.getByTestId(/lastname-input/i)
  expect(lastName.placeholder).toBe('')
})

test('email should have an empty placeholder', () => {
  const container = render(<App/>);
  const email = container.getByTestId(/email-input/i)
  expect(email.placeholder).toBe('')
})
test('should have label with First Name* as text', () => {
  const {getByText} = render(<App/>);
  getByText(/first name\*/i)
})


test('should click button and submit form',() => {
  const container = render(<App/>);
  const button = container.getByTestId(/submit-button/i);
  fireEvent.click(button, 0);
})

