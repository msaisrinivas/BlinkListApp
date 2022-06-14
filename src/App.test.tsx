
import { render , screen } from "@testing-library/react";
import IconText from "./Components/atoms/IconText";


test("Icon Text Testing", async()=>{
    render(<IconText name={"entrepreneurship"} icon={undefined} styling={"extended"}></IconText>);
    const iconTextElemenet = screen.getByText(/entrepreneurship/i);
    expect(iconTextElemenet).toBeInTheDocument();
});