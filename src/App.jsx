import Example1 from "./example-1"
import Glass from "./glass"
import ShoseShop from "./Shose-Shop"
import ShoppingShose from "./ShoseStore";
import FormValiation from "./Form";
import BookingTicket from "./bookingTicket"
import ListMoviePage from "./homeTemplate/ListMoviePage"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
    
        {/* <Example1 /> */}
        {/* <Glass /> */}
        {/* <ShoseShop /> */}
        {/* <ShoppingShose /> */}
        {/* <FormValiation /> */}
        {/* <BookingTicket /> */}
        <ListMoviePage />
     
    </BrowserRouter>
  )
}

export default App
