export default function Shose(props) {
  const { data, getPhoneAddtoModal } = props;
  const handleAddToModal = () => {
    getPhoneAddtoModal(data);
  };
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div
        className="cursor-pointer"
        onClick={handleAddToModal}
        data-modal-target="default-modal"
        data-modal-toggle="default-modal"
      >
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {data.name}
        </h5>
        <img src={data.image} alt="" />

        <p className="mb-3 font-bold text-red-700 dark:text-gray-400">
          {data.price}$
        </p>
      </div>
      <a className="" href="#">
        <button
          type="button"
          className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          Mua dứt khoát
        </button>
      </a>
    </div>
  );
}
