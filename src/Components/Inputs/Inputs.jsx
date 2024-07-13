import{ useEffect, useState } from "react";
import axios from "axios";
import { format } from 'date-fns';
import { FaCloudMoonRain } from "react-icons/fa6";
import { IoSunny } from "react-icons/io5";



function Inputs() {

   
        const currentDate = new Date();
        const formattedDate = format(currentDate, 'MMMM do, yyyy');
       
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

           
                <div class="w-full h-3/4 mb-4 sm:text-center md:text-center md:text-center text-center pt-20 bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20201012/pngtree-white-cloud-on-blue-sky-weather-background-image_410050.jpg')]">
                   <h1 class="mb-4 sm:text-center md:text-center md:text-center">welcome to my app</h1>

                    <div class="w-1/2 shadow-2xl shadow-black ml-56 pt-10 sm:items-center pt-10   md:items-center rounded">
                    <input type="text" class="bg-withe-400 text-center rounded" onChange={handellInput} required placeholder="serch your town..." />
                    <button class ="bg-yellow-200 text-center  rounded " onClick={handellClick}>submit</button>
               
                    <div class="text-center pt-5 rounded">
                    <p class="pt-2">{Input}</p>
                    <p class="pt-1">{(Api - 273.15).toFixed(2)}°C</p>
               
                <div class="pt-2 mb-4 sm:text-center md:text-center md:text-center">

                   <p>{formattedDate}</p>

                  </div>
                
            </div>

            </div>


        <div class="mt-5 mb-4 sm:text-center md:text-center md:text-center">
            
        {Api && (Api - 273.15) < 20 && (Api - 273.15) >= 0 && <div class="w-1/3 ml-72 mt-5 rounded"><FaCloudMoonRain class="w-96 size-48 text-center"/></div>}
        {Api && (Api - 273.15) >= 20 && (Api - 273.15) < 50 && <div class="w-1/3 ml-72 mt-5 rounded"><IoSunny class="w-96 size-48 text-center"/></div>}

              
              
              </div>


              </div>
            </>
        );
    }

        
export default Inputs