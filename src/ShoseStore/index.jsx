import data from "./data.json";
import { useState } from "react";
import Shose from "./Shose";

export default function ShoppingShose() {
  const [state, setState] = useState({
    shose: data,
    shoesDetail: {},
  });

  const renderListShose = () => {
    // state.Shose
    const { shose } = state;
    const newShose = shose.map((item) => {
      return (
        <Shose key={item.id} data={item} getShoseDetail={handleGetDetail} />
      );
    });
    return newShose;
  };

  const handleGetDetail = (data) => {
    console.log(data);
    setState({
      ...state,
      shoesDetail: data,
    });
  };

  console.log("state", state);

  return (
    <div className="flex">
      <div className="mr-20 mt-44 ">
        <h2 className="">Home</h2>
        <h2>Shop</h2>
      </div>

      <div className="ml-64">
        <h1 className="text-center font-bold text-green-400 mb-5 mt-5">
          CÁI SỐP BÁN GIÀY
        </h1>
        <div className="grid grid-cols-3 gap-3">{renderListShose()}</div>
        <div
          id="default-modal"
          tabIndex={-1}
          aria-hidden="true"
          className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            {/* Modal content */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Thông tin dõ dzàng
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="default-modal"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* Modal body */}
              <div className="p-4 md:p-5 space-y-4">
                <div className="relative overflow-x-auto">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                        Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Alisas
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Image
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Description
                        </th>
                        <th scope="col" className="px-6 py-3">
                        short Description
                        </th>
                        <th scope="col" className="px-6 py-3">
                        quantity
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Price
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {state.shoesDetail.name}
                        </th>
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >{state.shoesDetail.alias}</th>
                        <td className="px-6 py-4">
                          <img
                            src={state.shoesDetail.image}
                            width={50}
                            alt=""
                          />
                        </td>
                        <td className="px-6 py-4">
                          {state.shoesDetail.description}
                        </td>
                        <td className="px-6 py-4">
                          {state.shoesDetail.shortDescription}
                        </td>
                        <td className="px-6 py-4">
                          {state.shoesDetail.quantity}
                        </td>
                        <td className="px-6 py-4">
                          ${state.shoesDetail.price}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* Modal footer */}
              <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  data-modal-hide="default-modal"
                  type="button"
                  className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Bách dzìa
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
