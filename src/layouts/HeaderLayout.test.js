import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HeaderLayout from "./HeaderLayout";
import { BrowserRouter } from "react-router-dom";

const MockHeader = ({title}) => {
  return (
    <BrowserRouter>
      <HeaderLayout title={title}/>
    </BrowserRouter>
   );
};

it("should render header title", async () => {
  const pageTitle = "Fruits Basket";
  render(<MockHeader title={pageTitle}/>);
  const headingElement = screen.getByText(/Fruits Basket/i);
  expect(headingElement).toBeInTheDocument();
});
