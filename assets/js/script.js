function linkToGourmet () {
    window.open("https://github.com/mitchelwachtel/gourmet-guru")
}

function linkToGoodNeighbor () {
    window.open("https://github.com/RMcwey/Good-Neighbor")
}

function linktoPlanner() {
    window.open("https://github.com/RMcwey/Day-Planner")
}

function linkToWeather () {
    window.open("https://rmcwey.github.io/Weather-Forecaster/");
}




$('.main-card-txt').on('click', linkToGourmet)
$('.second-card-txt').on('click', linkToGoodNeighbor)
$('.day-planner').on('click', linktoPlanner)
$('.weather').on('click', linkToWeather)
