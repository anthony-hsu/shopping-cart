import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HeaderLayout from "./HeaderLayout";
import { HashRouter } from "react-router-dom";

const MockHeader = ({title}) => {
  return (
    <HashRouter>
      <HeaderLayout title={title}/>
    </HashRouter>
   );
};

it("should render header title", async () => {
  const pageTitle = "Fruits Basket";
  render(<MockHeader title={pageTitle}/>);
  const headingElement = screen.getByText(/Fruits Basket/i);
  expect(headingElement).toBeInTheDocument();
});
