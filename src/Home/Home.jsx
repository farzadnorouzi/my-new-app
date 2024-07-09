import{ useEffect, useState } from "react";
import Inputs from "../Components/Inputs/Inputs";
import Logo from "../Components/Logo/Logo";
import axios from "axios";

function Home() {
    const [Weather, setWeather] = useState(null);
    const [Api, setApi] = useState(null);

    const res = [
        {
            key: "7635c44226a1290f00ac716073e37d2b"
        }
    ];

    const handellChange = (e) => {
        setWeather(e.target.value);
    };

    const handellClick = () => {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=${Weather}&lon=${Weather}&appid=${res[0].key}`)
            .then((item) => {
                setApi(item.data.main.temp);
            });
    };

    useEffect(() => {
        handellClick();
    }, []);

    return (
        <>
            <div className="flex">
                <Logo />
                <Inputs />
            </div>
            <div>
                <input type="number" className="bg-blue-400" onChange={handellChange} />
                <input type="number" className="bg-blue-400" onChange={handellChange} />
                <button onClick={handellClick}>submit</button>
            </div>
            <p>{Api} درجه سانتی گراد</p>
        </>
    );
}

export default Home;

