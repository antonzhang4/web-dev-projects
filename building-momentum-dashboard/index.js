const time = document.getElementById("time")
const currentPrice = document.getElementById("current-price")
const highPrice = document.getElementById("high-price")
const lowPrice = document.getElementById("low-price")

fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.body.style.backgroundImage = `url(${data.urls.full})`
        document.getElementById("author-name").textContent = `By: ${data.user.name}`
    })
    .catch(err => {
        document.body.style.backgroundImage = `
            url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&
            fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080
        )`
        document.getElementById("author").textContent = `By: Dodi Achmad`
    })

fetch('https://api.coingecko.com/api/v3/coins/bitcoin') 
    .then(res => res.json())
    .then(data => {
        console.log(data)
        currentPrice.textContent = `🎯: $${data.market_data.current_price.aud}`
        highPrice.textContent = `👆: $${data.market_data.high_24h.aud}`
        lowPrice.textContent = `👇: $${data.market_data.low_24h.aud}`
    })
    .catch(err => console.log("Something went wrong!"))

navigator.geolocation.getCurrentPosition((position) => {
    console.log(position)
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`)
    .then(res => {
        if(!res.ok){
            throw Error("Weather data not available")
        }
        return res.json()
    })
    .then(data => {
        console.log(data)
        document.getElementById("weather").innerHTML = `
            <div id = "weather-items">
                <img src = "http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
                <h2>${Math.round(data.main.temp)}ºC</h2>
            </div>
            <p id = "name">${data.name}</p>
        `
    })
    .catch(err => console.error(err))
})

function getCurrentTime(){
    const date = new Date()
    time.textContent = date.toLocaleTimeString("en-au", {timestyle: "short"})
}

setInterval(getCurrentTime, 1000)


//manifest.json is required for chrome extensions to work. provides information about the extension itself
//action will put default icon
//chroe_url_overrides will replace the newtab with our index.html
