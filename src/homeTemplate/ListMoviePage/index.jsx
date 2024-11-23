import Movie from "./Movie"
import { fetchListMovie } from "./duck/reducer"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"





export default function ListMoviePage() {

    const dispatch = useDispatch();
    const props = useSelector((state) => state.listMovieReducer);
    useEffect(() => {
        dispatch(fetchListMovie()); // Gửi action fetchMovies để lấy danh sách phim
    }, []);
    if (props.loading) return <p>Loading...</p>;
    if (props.error) return <p>Error: {props.error}</p>;

    const renderListMovie = () => {
        const { data } = props;
        console.log(props);

        if (data && data.length > 0) {
            return data.map((item) => <Movie key={item.maPhim} data={item} />)

        }
        return <p>No movies available</p>;


    };

    return (
        <div>
            <h1>
                listMovie
            </h1>


            <div className="grid grid-cols-4 gap-4 mt-3 mx-auto h-80 absolute">{renderListMovie()} </div>
        </div>
    );
};
