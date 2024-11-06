import { useState } from "react"
export default function FormInput() {
    const [form, setForm] = useState({
        id: '',
        name: '',
        phone: '',
        email: '',
    });
    const [students, setStudents] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    // Hàm xử lý khi người dùng nhấn nút "Thêm sinh viên"
    const handleSubmit = (e) => {
        e.preventDefault();
        // Kiểm tra form trước khi thêm
        if (form.id && form.name && form.phone && form.email) {
            setStudents([...students, form]); // Thêm sinh viên vào danh sách
            setForm({ id: '', name: '', phone: '', email: '' }); // Reset form sau khi thêm
        } else {
            alert("Vui lòng nhập đầy đủ thông tin!");
        }
    };

    // Hàm xóa sinh viên khỏi danh sách
    const handleDelete = (id) => {
        setStudents(students.filter((student) => student.id !== id));
    };


    return (

        <div>

            <form onSubmit={handleSubmit} className="max-w-screen-xl mx-auto ">
                <h1 className="bg-black text-white h-10 content-center pl-3 mb-5">Thông tin sinh viên</h1>
                <div className="grid grid-cols-2 gap-5  ">
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mã SV</label>
                        <input onChange={handleInputChange} type="text" name="id" value={form.id} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mã SV" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Họ Tên</label>
                        <input onChange={handleInputChange} type="text" name="name" value={form.name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Họ tên" required />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Số điện thoại</label>
                        <input onChange={handleInputChange} type="text" name="phone" value={form.phone} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Số điện thoại" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input onChange={handleInputChange} type="email" name="email" value={form.email} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email" required />
                    </div>
                </div>

                <button type="submit" className="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Thêm sinh viên</button>
            </form>
            <table className=" mt-5 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-white uppercase bg-black ">
                    <tr >
                        <th scope="col" className="px-6 py-3">
                            Mã SV
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Họ tên
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Số điện thoại
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {students.map((student) => (
                        <tr key={student.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {student.id}
                            </th>
                            <td className="px-6 py-4">
                                {student.name}
                            </td>
                            <td className="px-6 py-4">
                                {student.phone}
                            </td>
                            <td className="px-6 py-4">
                                {student.email}
                            </td>
                            <td className="px-6 py-4">
                                <button onClick={() => handleDelete(student.id)} type="button" className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Delete</button>
                                <button type="button" className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">Edit</button>


                            </td>
                        </tr>

                    ))}

                </tbody>

            </table>

        </div>


    )
}
