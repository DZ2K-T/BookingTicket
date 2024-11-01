import data from "./data.json";
import Shose from "./Shose";
import { useState } from "react";
import Modal from "./modal";
export default function ShoseShop() {
    const [state, setState] = useState({
        shose: data,
        modal: [],
    });
    const renderListShose = () => {
        const { shose } = state;
        const newShose = shose.map((item) => {
            return (
                <Shose
                    key={item.id}
                    data={item}
                    getPhoneAddtoModal={handleGetShoseAddtoModal}
                />
            );
        });
        return newShose;
    };

    const handleGetShoseAddtoModal = (data) => {
        const newModal = [...state.modal];
        const shoseAddToModal = {
            ...data,
            soLuong: 1,
        };

        const index = newModal.findIndex((item) => item.id === shoseAddToModal.id);
        if (index !== -1) {
        } else {
            newModal.push(shoseAddToModal);
        }

        setState({
            ...state,
            modal: [shoseAddToModal],
        });
    };

    return (
        <div className="flex bg-black">
            <div className="mr-20 mt-44 ml-20">
                <h2 className="text-white bg-red-600 rounded-lg mb-4">Home</h2>
                <h2 className="text-white bg-green-500 rounded">Shop</h2>
            </div>

            <div>
                <div className="flex items-center justify-center">
                    <h1 className="text-center font-bold text-green-400 mb-5 mt-5 mr-4">
                        CÁI SỐP BÁN GIÀY
                    </h1>
                    <Modal modal={state.modal} />
                </div>
                <div className="grid grid-cols-3 gap-5">{renderListShose()}</div>
            </div>
        </div>
    );
}
