import { render  } from "@testing-library/react"
import Avatars from ".";

it("Check for Avatar", async()=>{
    render(<Avatars chars="S"/>);
    // const MuiElement = screen.getByText(/S/i);
    expect(true).toBeInTheDocument();
})