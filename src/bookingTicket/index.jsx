import { list } from "postcss";
import Seat from "./seat";
import "./Seat.scss";

import { useSelector } from "react-redux";
export default function BookingTicket() {
    const props = useSelector((state) => state.bookingTicketReducer);
    const renderListSeat = () => {
        const { listSeat } = props;
        if (listSeat && listSeat.length > 0) {
            return listSeat.map((item) => {
                if (item.hang) {
                    return (
                        <div key={item.hang} className="seat-selection font-bold ">
                            <div>
                                <span>{item.hang}</span>
                            </div>

                            {item.danhSachGhe.map((seat) => {
                                return <Seat key={seat.soGhe} seat={seat} />;
                            })}
                        </div>
                    );
                } else {
                    return (
                        <div
                            key={item.hang}
                            className="seat-selection font-bold seat-first"
                        >
                            <span className="row-label"></span>
                            {item.danhSachGhe.map((seat) => {
                                return (
                                    <span key={seat.soGhe} className="seat-number ">
                                        {seat.soGhe}
                                    </span>
                                );
                            })}
                        </div>
                    );
                }
            });
        }
    };


    const totalPrice = () =>
        props.listSeatSelected.reduce((total, seat) => total += seat.gia, 0);


    return (
        <div className="gridcol bg-[url('public/bgmovie.jpg')] background-img">
            <div className="text-center">
                <h1 className="text-yellow-500  ">ĐẶT VÉ XEM PHIM CYBERLEARN.VN</h1>
                <h3 className="text-white">Màn hình</h3>
                <div className="screen place-self-center "></div>
                {renderListSeat()}

            </div>
            <div className="justify-self-center">
                <h1 className="text-white">DANH SÁCH GHẾ BẠN CHỌN</h1>
                <ul>
                    {props.listSeatSelected.map((seat) => <li>Ghế {seat.soGhe} - Giá{seat.gia}</li>)}
                </ul>
                <p>Tạm tính: {totalPrice()}</p>
            </div>
        </div>
    );
}
