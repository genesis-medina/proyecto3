var artistas = {
    "epoca": "ultima decada",
    "años": 2011-2020,
    "active": true,
    "artistas": [
        {
            "nombre": "Dua Lipa",
            "age": 2020,
            "cancion": "Levitating",
            "genero": [
                "Electro-disco",
                "nu-disco",
                "pop-funk"
            ]
        },
        {
            "nombre": "Billie Eilish",
            "age": 2019,
            "cancion": "Bad Guy",
            "genero": [
                "Electropop",
                "dance-pop",
                "pop-trap"
            ]
        },
        {
            "nombre": "Childish Gambino",
            "age": 2018,
            "cancion": "This Is America",
            "genero": [
                "Hip Hop",
                "afrobeat",
                "Trap"
            ]
        },
        {
            "nombre": "Bruno Mars",
            "age": 2017,
            "cancion": "That's What I Like",
            "genero": [
                "Funk",
                "Soul",
                "Disco"
            ]
        },
        {
            "nombre": "Charlie Puth - Selena Gomez",
            "age": 2016,
            "cancion": "We Dont't Talk Anymore",
            "genero": [
                "Pop",
                "tropical house",
                "Minimal"
            ]
        },
        {
            "nombre": "Adele",
            "age": 2015,
            "cancion": "Hello",
            "genero": [
                "Soul",
                "Pop",
                "Radiation blast"
            ]
        },
        {
            "nombre": "SIA",
            "age": 2014,
            "cancion": "Chandelier",
            "genero": [
                "Synth-pop",
                "Art-pop",
                "Folk"
            ]
        },
        {
            "nombre": "Kesha",
            "age": 2013,
            "cancion": "Timber",
            "genero": [
                "Dance pop",
                "folktronica",
                "Electro"
            ]
        },
        {
            "nombre": "Rihanna",
            "age": 2012,
            "cancion": "Diamonds",
            "genero": [
                "Pop",
                "electronica",
                "Dancelectronica"
            ]
        },
        {
            "nombre": "Maroon 5",
            "age": 2011,
            "cancion": "Moves Like Jagger",
            "genero": [
                "Pop",
                "Dance pop",
                "electropop"
            ]
        },
    ]
}

function Persona(nombre, apellido, edad, genero, intereses) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.genero = genero;
    this.intereses = intereses;
    this.bio = function () {
        alert(this.nombre + ' ' + this.apellido + ' is ' +
         this.edad + ' de edad. A él le gusta o interesa lo siguiente: ' + 
         this.interests[0] + ' y ' + this.interests[1] + '.');
    };
    this.saludo = function () {
        alert('Hola, yo soy ' + this.nombre + '.');
    };

}




var persona1 = new Persona("Alonso", "Larenas",33,"masculino",["RUBY", "JAVA","PHP","HTML"]);
