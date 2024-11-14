import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {
    addStudent,
    deleteStudent,
    editStudent,
    updateForm,
    resetForm,
} from "./duck/reducer";
import * as Yup from "yup";

export default function FormInput() {
    const dispatch = useDispatch();
    const { students, id, name, phone, email, filterKeyword } = useSelector(
        (state) => state.formStudents
    );
    const [editing, setEditing] = useState(false);
    const [errors, setErrors] = useState({});
    const [searchStudent, setSearchStudent] = useState(filterKeyword);

    const studentSchema = Yup.object().shape({
        id: Yup.string()
            .required("Mã SV không được để trống")
            .matches(/^[0-9]+$/, "Mã SV phải là số"),
        name: Yup.string()
            .required("Họ tên không được để trống")
            .min(3, "Họ tên phải có ít nhất 3 ký tự")
            .max(50, "Họ tên không được quá 50 ký tự"),
        phone: Yup.string()
            .required("Số điện thoại không được để trống")
            .matches(/^[0-9]{10}$/, "Số điện thoại phải có 10 chữ số"),
        email: Yup.string()
            .required("Email không được để trống")
            .email("Email không hợp lệ"),
    });

    useEffect(() => {
        localStorage.setItem("students", JSON.stringify(students));
    }, [students]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        dispatch(updateForm({ name, value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const studentData = { id, name, phone, email };

        try {
            await studentSchema.validate(studentData, { abortEarly: false });
            setErrors({});
            if (editing) {
                dispatch(editStudent(studentData));
                setEditing(false);
            } else {
                dispatch(addStudent(studentData));
            }
            dispatch(resetForm());
        } catch (validationError) {
            const newErrors = {};
            validationError.inner.forEach((error) => {
                newErrors[error.path] = error.message;
            });
            setErrors(newErrors);
        }
    };

    const handleDelete = (id) => {
        dispatch(deleteStudent(id));
    };

    const handleEdit = (student) => {
        dispatch(updateForm({ name: "id", value: student.id }));
        dispatch(updateForm({ name: "name", value: student.name }));
        dispatch(updateForm({ name: "phone", value: student.phone }));
        dispatch(updateForm({ name: "email", value: student.email }));
        setEditing(true);
    };

    // const handleEdit = (student) => {
    //     dispatch(updateForm({ 
    //         name: "studentData", 
    //         value: { id: student.id, name: student.name, phone: student.phone, email: student.email } 
    //     }));
    //     setEditing(true);
    // };

    const handleFilterChange = (e) => {
        setSearchStudent(e.target.value);
        dispatch(updateForm({ name: "filterKeyword", value: e.target.value }));
    };



    const filteredStudents = students.filter((student) =>
        student.name.toLowerCase().includes(filterKeyword.toLowerCase())
    );
    const renderStudentsList = () => {
        return filteredStudents.map((student) => (
            <tr
                key={student.id}
                className="odd:bg-white even:bg-gray-50 border-b dark:border-gray-700"
            >
                <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                    {student.id}
                </th>
                <td className="px-6 py-4">{student.name}</td>
                <td className="px-6 py-4">{student.phone}</td>
                <td className="px-6 py-4">{student.email}</td>
                <td className="px-6 py-4">
                    <button
                        onClick={() => handleDelete(student.id)}
                        type="button"
                        class="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
                    >
                        Delete
                    </button>
                    <button
                        onClick={() => handleEdit(student)}
                        type="button"
                        class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                    >
                        Edit
                    </button>
                </td>
            </tr>
        ));
    };

    return (
        <div>
            <form className="float-right max-w-md mx-auto">
                <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                    Search
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg
                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                    </div>
                    <input
                        type="search"
                        id="default-search"
                        className="block w-full h-10 p-4 ps-10 text-sm text-gray-900 border border-gray-300  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Tìm kiếm sinh viên"

                        value={filterKeyword}
                        onChange={handleFilterChange}
                    />
                
                </div>
            </form>

            <form onSubmit={handleSubmit} className="max-w-screen-xl mx-auto">
                <h1 className="bg-black text-white  h-10 pl-3 mb-5">
                    Thông tin sinh viên
                </h1>
                <div className="grid grid-cols-2 gap-5">
                    <div className="mb-5">
                        <label
                            htmlFor="id"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Mã SV
                        </label>
                        <input
                            onChange={handleInputChange}
                            type="text"
                            name="id"
                            value={id}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                            placeholder="Mã SV"
                        />
                        {errors.id && (
                            <p className="text-red-500 text-xs mt-1">{errors.id}</p>
                        )}
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Họ Tên
                        </label>
                        <input
                            onChange={handleInputChange}
                            type="text"
                            name="name"
                            value={name}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                            placeholder="Họ tên"
                        />
                        {errors.name && (
                            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                        )}
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="phone"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Số điện thoại
                        </label>
                        <input
                            onChange={handleInputChange}
                            type="text"
                            name="phone"
                            value={phone}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                            placeholder="Số điện thoại"
                        />
                        {errors.phone && (
                            <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                        )}
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Email
                        </label>
                        <input
                            onChange={handleInputChange}
                            type="email"
                            name="email"
                            value={email}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                            placeholder="email"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                        )}
                    </div>
                </div>
                <button
                    type="submit"
                    className="text-white bg-green-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5"
                >
                    {editing ? "Cập nhật sinh viên" : "Thêm sinh viên"}
                </button>
            </form>
            <table className="mt-5 w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-white uppercase bg-black">
                    <tr>
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
                <tbody>{renderStudentsList()}</tbody>
            </table>
        </div>
    );
}
