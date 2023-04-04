let imageContainer = document.getElementById("current-image-container")
let currentDate = new Date().toISOString().split("T")[0]
let url = `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${currentDate}`
  //console.log(currentDate);


// ------------------------- get Current Image Of The Day Start --------------------------------------------  
function getCurrentImageOfTheDay(){
    fetch(url)
    .then((resolve)=>resolve.json())
    .then((data)=>{
      console.log(data);
      imageContainer.innerHTML = `
      <h1 class = "info">Nasa Picture of the Day</h1>
      <img id = "image" src="${data.url}">
      <h2 class = "info">${data.title}</h2>
      <p class = "info">${data.explanation}</p>
      
      `

    })
    
}
getCurrentImageOfTheDay()

// ------------------------- get Current Image Of The Day End --------------------------------------------  



// ------------------------- get Image Of The Day --------------------------------------------  
function getImageOfTheDay() {
    let x = document.getElementById("myDate").value;
//    document.getElementById("demo").innerHTML = x;
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}&date=${x}`)
    .then((resolve)=>resolve.json())
    .then((data)=>{
      console.log(data);
      imageContainer.innerHTML = `
      <h1 class = "info">Nasa Picture of the Day ${x}</h1>
      <img id = "image" src="${data.url}">
      <h2 class = "info">${data.title}</h2>
      <p class = "info">${data.explanation}</p>
      `
    })
    saveSearch(x)
//   addSearchToHistory()
}
// ------------------------- get Image Of The Day End --------------------------------------------  


// ------------------------- Local Storage --------------------------------------------  

function saveSearch(x){
//if there is nothing to save at the start save empty array
    let searches = JSON.parse(localStorage.getItem("searches")) || [];
    searches.push(`${x}`);
  localStorage.setItem("searches", JSON.stringify(searches));

addSearchToHistory(x)

}

// ------------------------- Local Storage End --------------------------------------------  


function addSearchToHistory(x){

    let searchHistory = document.getElementById("search-history")
      searchHistory.innerHTML +=`<li class = "info">${x}<button id="btn" class = "info" onclick="view()">View</button></li>`    
  }


function view() {
    // fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}&date=${x}`)
    // .then((resolve)=>resolve.json())
    // .then((data)=>{
    //   console.log(data);
    //   imageContainer.innerHTML = `
    //   <h1 class = "info">Nasa Picture of the Day ${x}</h1>
    //   <img id = "image" src="${data.url}">
    //   <h2 class = "info">${data.title}</h2>
    //   <p class = "info">${data.explanation}</p>
    //   `
    // })
}