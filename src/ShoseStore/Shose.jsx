import Modal from "./modal"

export default function Shose(props) {

    const { data, getShoseDetail } = props;
    const handleDetail = () => {
        getShoseDetail(data);

    }

    return (


        <div>


            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <h5 className="mb-2 text-xs font-bold tracking-tight text-gray-900 dark:text-white">{data.name}</h5>
                </a>
                <img src={data.image} width={200} alt="" />
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">${data.price}</p>
                {/* Modal toggle */}
                <button
                    onClick={handleDetail}
                    data-modal-target="default-modal"
                    data-modal-toggle="default-modal"
                    className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                >
                    Xem chi tiết
                </button>
                {/* Main modal */}
            </div>


        </div>


    )
}
