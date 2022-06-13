import { render , screen } from "@testing-library/react";
import Icons from "./Icons";

it("Check for Avatar", async()=>{
    render(<Icons source={"../../../images/add.svg"}></Icons>);
    const MuiElement = screen.getByRole("img");
    expect(MuiElement).toBeInTheDocument();
})