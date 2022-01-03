/* 
Casos COVID-19
url: https://corona-api.com/countries
*/

function getAllCountries() {
    // Consumimos la API
    $.ajax({
        type: 'GET',
        url: 'https://corona-api.com/countries',
        dataType: "json",
        async: true,
        success: function (data) { renderAllCountries(data.data) }, // En caso de consulta exitosa se ejecuta esto
        error: function () { errorMessage() },
    });
}

function renderAllCountries(data) {
    for (let i = 0; i < data.length; i++) {
        $("#countries").append(`<option value="${data[i].code}">${data[i].name}</option>`);
    }
}

function getCountryInfo(country, timeSpan) {
    // Consumimos la API
    $.ajax({
        type: 'GET',
        url: `https://corona-api.com/countries/${country}`,
        dataType: "json",
        async: true,
        success: function (data) { // En caso de consulta exitosa se ejecuta esto
            renderCountryData(data.data, timeSpan)
            if ($("#table-data") !== "undefined") {
                renderCountryTable(data.data, timeSpan);
            }
        }, 
        error: function () { errorMessage() },
    });
}

function renderCountryData(data, timeSpan) {
    // Generamos gráfico de barras con datos por día
    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: `Casos COVID-19 en ${data.name}`
        },
        axisX: {
            labelAngle: 50,
            title: "Fecha",
        },
        axisY: {
            title: "Número de casos",
        },
        axisY2: {
            title: "Número de fallecidos",
        },
        data: [{
            type: "line",
            showInLegend: true,
            legendText: "Nuevos casos",
            indexLabelFontSize: 16,
            dataPoints: createArr(data, timeSpan)[0],
        },
        {
            type: "line",
            axisYType: "secondary",
            showInLegend: true,
            legendText: "Nuevos fallecimientos",
            indexLabelFontSize: 16,
            dataPoints: createArr(data, timeSpan)[1],
        }]
    });
    chart.render();
}

function createArr(data, timeSpan) {
    // Almacenamos la info del rango temporal seleccionado
    let timeline = [[], []];
    for (let i = 0; i < timeSpan; i++) {
        // Revisamos si hay reporte ese día
        if (data.timeline[i].new_confirmed !== 0 && data.timeline[i].new_deaths !== 0) {
            // Agregamos elementos al inicio del arreglo para obtener orden ascendente
            timeline[0].unshift({
                label: data.timeline[i].date,
                y: data.timeline[i].new_confirmed,
            });
            timeline[1].unshift({
                label: data.timeline[i].date,
                y: data.timeline[i].new_deaths,
            });
        }
    }
    
    return timeline; // Así los ordenamos desde la fecha más antigua a la más reciente
}

function errorMessage() {
    alert("No se logró establecer conexión con la API.");
}

function renderCountryTable(data, timeSpan) {
    // Obtenemos los datos filtrados
    let timeline = createArr(data, timeSpan);

    // devolvemos los datos a su orden original
    timeline[0].reverse();
    timeline[1].reverse();

    let date_newCases;
    let date_newDeaths;
    for (let i = 0; i < timeSpan; i++) {  
        date_newCases = timeline[0][i];
        date_newDeaths = timeline[1][i];
        $("#table-data").append(`<tr><td>${date_newCases.label}</td>
        <td>${date_newCases.y}</td>
        <td>${date_newDeaths.y}</td></tr>`);
    }
}

$(document).ready(function () {
    getAllCountries();
    $("#countries").on("change", function () {
        let selectedCountry = $("option:selected").val();
        let timeSpan = $("#time-span option:selected").val();
        getCountryInfo(selectedCountry, timeSpan);
    });
    $("#time-span").on("change", function () {
        let selectedCountry = $("#countries option:selected").val();
        let timeSpan = $("#time-span option:selected").val();
        getCountryInfo(selectedCountry, timeSpan);
    });

    // Si estamos en peru.html
    if (window.location.href.includes("/peru.html")) {
        getCountryInfo("PE", 30);
    }
});