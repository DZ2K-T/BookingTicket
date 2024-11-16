import "./Seat.scss";
import { useState } from "react";
import { setBookingSeat } from "./duck/reducer"
import { useDispatch } from "react-redux";

export default function Seat(props) {
  const dispatch = useDispatch();
  const { seat } = props;
  const [isSelect, setIsSelect] = useState(false);

  const handleSelectSeat = () => {
    setIsSelect(!isSelect);
    dispatch(setBookingSeat(seat)); 

  };

  return (
    <span onClick={handleSelectSeat} className={`${isSelect ? "seat__selected" : ""} seat   ${seat.daDat ? "seat__booked" : ""}`}>
      {seat.soGhe}
    </span>
  );
}
