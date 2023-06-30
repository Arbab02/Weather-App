let city = document.getElementById('city');
let desc = document.getElementById('desc');
let wind = document.getElementById('wind');
let temp = document.getElementById('temp');
let btn = document.getElementById('btn');
let video = document.querySelector('video')

btn.addEventListener('click', ()=>{
        let inp = document.getElementById('inp');
// alert(inp)
//         console.log(inp)

                // let w = "https://goweather.herokuapp.com/weather/"
                let p = fetch(`https://goweather.herokuapp.com/weather/${inp.value}` )
                p.then((value1) => {
                      
                        return value1.json()
                }).then((value2) => {
                        // console.log(value2)
                        city.innerHTML = 'City: ' + inp.value;
                        desc.innerHTML = "Description: " + value2.description;
                        wind.innerHTML = 'Wind: ' + value2.wind;
                        temp.innerHTML = "Temperature: " + value2.temperature;
                        inp.value = " "
                        // if(value2.description == 'Partly cloudy' || value2.description == 'cloudy'){
                        //         video.src = 'Videos/Cloudy.mp4'
                        // }
                        // else if(value2.description == 'rainy' || value2.description == 'Light rain'){
                        //         video.src = 'Videos/Rain.mp4'
                        // }
                        // else if(value2.description == 'Light rain with thunderstorm' ){
                        //         video.src = 'Videos/Storm.mp4'
                        // }
                        // document.write(value2.wind)
        
                })
})



