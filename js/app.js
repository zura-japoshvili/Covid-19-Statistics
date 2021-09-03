const statsAPI = "https://api.covid19api.com/summary";

const globalNew = document.querySelector(".g-new");
const globalTotal = document.querySelector(".g-total")
const globalNewDeath = document.querySelector(".g-new-death");
const globalTotalDeath = document.querySelector(".g-total-death")

const geoTotal = document.querySelector(".ge-total")
const geoTotalDeath = document.querySelector(".ge-total-death")

async function getStats(){
    const response = await fetch(statsAPI);
    const data = await response.json();
    const { Global } = data;
    console.log(Global);
    const { Countries } = data;
    let geoStats;
    for(let i = 0; i< Countries.length;i++){
        if(Countries[i].Country == "Georgia"){
            geoStats = Countries[i]; 
        }
    }
    console.log(geoStats);
    globalNew.textContent = Global.NewConfirmed;
    globalTotal.textContent = Global.TotalConfirmed;
    globalNewDeath.textContent = Global.NewDeaths;
    globalTotalDeath.textContent = Global.TotalDeaths;


    geoTotal.textContent = geoStats.TotalConfirmed;
    geoTotalDeath.textContent = geoStats.TotalDeaths;
} 

addEventListener("load", function(){
    getStats();
});