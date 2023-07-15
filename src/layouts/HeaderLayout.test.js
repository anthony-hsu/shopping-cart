import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HeaderLayout from "./HeaderLayout";
import { BrowserRouter } from "react-router-dom";

const MockHeader = () => {
  return (
    <BrowserRouter>
      <HeaderLayout />
    </BrowserRouter>
   );
};

it("should render header title", async () => {
  render(<MockHeader />);
  const headingElement = screen.getByText(/shopping cart/i);
  expect(headingElement).toBeInTheDocument();
});
