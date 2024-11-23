import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Movie(props) {
  const { data } = props;

  const getEmbedUrl = (url) => {
    const regExp = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:.*v=|embed\/)|youtu\.be\/)([^&]+)/;
    const match = url.match(regExp);
    return match ? `https://www.youtube.com/embed/${match[1]}` : null;
  };
  const navigate = useNavigate();
  const trailerUrl = getEmbedUrl(data.trailer); // Lấy URL nhúng của video
  const [showModal, setShowModal] = useState(false);
  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="relative group">
      {/* Hình ảnh phim */}
      <img
        src={data.hinhAnh}
        alt={data.tenPhim}
        className="w-full h-auto rounded-md"
      />

      {/* Nút Play hiện khi hover */}
      <button
        onClick={handleModalToggle}
        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 transition-opacity duration-300 rounded-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14.752 11.168l-4.545 2.577A1 1 0 019 12.577V7.423a1 1 0 011.207-.96l4.545 2.577a1 1 0 010 1.92z"
          />
        </svg>
      </button>

      {/* Nút chức năng bên dưới */}
      <div className="flex justify-between mt-2">
        <button
          onClick={() => navigate(`/movies/${data.maPhim}`)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Xem Chi Tiết
        </button>
        <button
          onClick={() => alert("Đặt vé cho phim: " + data.tenPhim)}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Mua Vé
        </button>
      </div>

      {/* Modal Video */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="bg-white p-4 rounded-lg relative">
            <button
              onClick={handleModalToggle}
              className="absolute top-2 right-2 text-black text-lg font-bold"
            >
              ✕
            </button>
            {trailerUrl ? (
              <iframe

                width="560"
                height="315"
                src={trailerUrl} // URL nhúng
                title={data.tenPhim}

                allow="autoplay; encrypted-media"
                allowFullScreen

              ></iframe>
            ) : (
              <p>Trailer không khả dụng</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
