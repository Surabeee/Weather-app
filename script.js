let weather = {
    "apiKey": "2b0b609a4d6e57a56f069f69b89df2cd",
    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=metric&appid=" 
            + this.apiKey
        )
        .then((response) => response.json())
        .then((data)=> this.displayWeather(data));
    },
    displayWeather: function(data){
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src= "https://openweathermap.org/img/wn/" + icon + "@2x.png"
        document.querySelector(".description").innerText=description;
        document.querySelector(".temp").innerText = temp + " C°";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + " km/hr";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/random/1600x900/?" + name + "')"


    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document
       .querySelector(".search button")
       .addEventListener("click", function(){
           weather.search();
        });

document
        .querySelector(".search-bar")
        .addEventListener("keyup", function(event){
            if(event.key == "Enter"){
                weather.search();
            }
         });

weather.fetchWeather("Mumbai");

document.addEventListener('DOMContentLoaded', function() {
    // Get references to the navbar links
    const homeLink = document.getElementById('homeLink');
    const aboutLink = document.getElementById('insightsLink');
    const servicesLink = document.getElementById('aboutLink');
    const contactLink = document.getElementById('contactLink');
  
    // Add click event listeners to each link
    homeLink.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default link behavior
      window.location.href = 'home.html'; // Navigate to the new page (home.html in this example)
    });
  
    aboutLink.addEventListener('click', function(event) {
      event.preventDefault();
      window.location.href = 'insights.html'; // Navigate to the new page (about.html in this example)
    });
  
    servicesLink.addEventListener('click', function(event) {
      event.preventDefault();
      window.location.href = 'about.html'; // Navigate to the new page (services.html in this example)
    });
  
    contactLink.addEventListener('click', function(event) {
      event.preventDefault();
      window.location.href = 'contact.html'; // Navigate to the new page (contact.html in this example)
    });
  });
  