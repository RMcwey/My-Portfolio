function linkToGourmet () {
    window.open("https://github.com/mitchelwachtel/gourmet-guru")
}

function linktoPlanner() {
    window.open("https://github.com/RMcwey/Day-Planner")
}

function linkToWeather () {
    window.open("https://rmcwey.github.io/Weather-Forecaster/");
}




$('.main-card-txt').on('click', linkToGourmet)
$('.day-planner').on('click', linktoPlanner)
$('.weather').on('click', linkToWeather)
