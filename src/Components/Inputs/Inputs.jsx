import{ useEffect, useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";


function Inputs() {

    const [startDate, setStartDate] = useState(new Date());
       
        const [Weather, setWeather] = useState(null);
        const [Input, setInput] = useState(null);
        const [Api, setApi] = useState(null);

        const res = [
            {
                key: "7635c44226a1290f00ac716073e37d2b"
            }
        ];
    
    
        const handellInput = (e) => {
            setInput(e.target.value);
        };
    
    
        const handellClick = () => {
            axios
                .get(`https://api.openweathermap.org/data/2.5/weather?q=${Input}&lat=${Weather}&lon=${Weather}&appid=${res[0].key}`)
                .then((item) => {
                    setApi(item.data.main.temp);
                });
        };
    
        useEffect(() => {
            handellClick();
        },[]);
    
        return (
            <>

           
                <div class="w-full h-96 text-center pt-20 bg-[url('https://static.vecteezy.com/system/resources/previews/006/524/224/original/weather-app-ui-ux-kit-elements-website-landing-page-vector.jpg')]">
                    <input type="text" className="bg-withe-400 text-center rounded" onChange={handellInput} required placeholder="serch your town..." />
                    <button class ="bg-yellow-200 text-center  rounded " onClick={handellClick}>submit</button>
                <div>
                    <p class="pt-6">{Input}</p>
                    <p class="pt-1">{Api}=C°</p>
                    <h1>today</h1>
                </div>




               <div class="pt-10">
                <DatePicker  selected={startDate} onChange={(date) => 
                        setStartDate(date)} /> 
                        </div>

                </div>

            </>
        );
    }

        


export default Inputs