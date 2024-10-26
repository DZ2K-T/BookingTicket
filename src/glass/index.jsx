import { useState } from "react";

export default function Glass() {
    const [urlImg, setUrlImg] = useState("public/v1.png");
    const handleGlass1 = () => {
        setUrlImg("public/v1.png")
    };
    const handleGlass2 = () => { setUrlImg("public/v2.png") };
    const handleGlass3 = () => { setUrlImg("public/v3.png") };
    const handleGlass4 = () => { setUrlImg("public/v4.png") };
    const handleGlass5 = () => { setUrlImg("public/v5.png") };
    const handleGlass6 = () => { setUrlImg("public/v6.png") };
    const handleGlass7 = () => { setUrlImg("public/v7.png") };
    const handleGlass8 = () => { setUrlImg("public/v8.png") };
    const handleGlass9 = () => { setUrlImg("public/v9.png") };



    return (
        <div>
            <h1>Glass</h1>
            <div className="grid grid-cols-2 gap-5 justify-items-center">
                <div>
                    <img className="w-40" src="public/model.jpg" alt="" />

                </div>
                <span className="absolute ml-[968px] mt-[49px] w-[93px]"><img src={urlImg} alt="" /></span>
                <div>
                    <img className="w-40" src="public/model.jpg" alt="" />
                </div>
            </div>
            <div className="mt-7 grid grid-cols-6 gap-3 max-w-lg items-center justify-self-center ">
                <button type="button" onClick={handleGlass1}>
                    {" "}
                    <img src="public/g1.jpg" alt="" />
                </button>
                <button type="button" onClick={handleGlass2}>
                    <img src="public/g2.jpg" alt="" />
                </button>
                <button type="button" onClick={handleGlass3}>
                    {" "}
                    <img src="public/g3.jpg" alt="" />
                </button>
                <button type="button" onClick={handleGlass4}>
                    {" "}
                    <img src="public/g4.jpg" alt="" />
                </button>
                <button type="button" onClick={handleGlass5}>
                    {" "}
                    <img src="public/g5.jpg" alt="" />
                </button>
                <button type="button" onClick={handleGlass6}>
                    {" "}
                    <img src="public/g6.jpg" alt="" />
                </button>
                <button type="button" onClick={handleGlass7}>
                    {" "}
                    <img src="public/g7.jpg" alt="" />
                </button>
                <button type="button" onClick={handleGlass8}>
                    {" "}
                    <img src="public/g8.jpg" alt="" />
                </button>
                <button type="button" onClick={handleGlass9}>
                    {" "}
                    <img src="public/g9.jpg" alt="" />
                </button>
            </div>
        </div>
    );
}
