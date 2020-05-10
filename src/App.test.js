import React from "react";
import { render, getByPlaceholderText, getAllByLabelText, getByDisplayValue, queryByPlaceholderText, getByTestId } from "@testing-library/react";
import App from "./App";

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

// describe('First name input should accept a max of 15 character', () => {
//   it("max-length should be 15 characters minimum", () => {
//     expect()
//   })
  
// })