import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Route from "./Route";

test("should display properly Router Component", () => {
  // arrange
  const props = {
    fullRouteName: "İstanbul Dudullu bus station - Altınoluk bus station",
    departAt: "2022-12-13T18:41:13",
    route: "ALT - IST",
    interconnection: "INTERCONNECTION"
  };

  const component = render(<Route orderItem={props} />);
  component.getByText(props.route);
});
