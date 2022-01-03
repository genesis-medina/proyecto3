var heroes = {
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
        {
            "name": "Molecule Man",
            "age": 29,
            "secretIdentity": "Dan Jukes",
            "powers": [
                "Radiation resistance",
                "Turning tiny",
                "Radiation blast"
            ]
        },
        {
            "name": "Madame Uppercut",
            "age": 39,
            "secretIdentity": "Jane Wilson",
            "powers": [
                "Million tonne punch",
                "Damage resistance",
                "Superhuman reflexes"
            ]
        },
        {
            "name": "Eternal Flame",
            "age": 1000000,
            "secretIdentity": "Unknown",
            "powers": [
                "Immortality",
                "Heat Immunity",
                "Inferno",
                "Teleportation",
                "Interdimensional travel"
            ]
        }
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
