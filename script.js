const listaDeNombres = ["Adrian", "Alan", "Alberto", "Aldo", "Alejandro", "Agustin", "Angel", "Ariel", "Armando", "Arnaldo", "Benito", 
"Braulio", "Brian", "Carlos", "Claudio", "Cruz", "Charles", "Dante", "David", "Diego", "Eddy", "Emiliano", "Ernesto", "Ervin", "Facundo", 
"Fernando", "Flavio", "Francisco","Gerardo", "Giovanni", "Giuseppe", "Habid", "Hector", "Horacio", "Hugo", "Iker", "Ivan", "Jaime", "Javier", 
"Jesus", "Jonathan", "Jorge", "Jose", "Juan", "Kevin", "Khalid", "Lautaro", "Lionel", "Lorenzo", "Lucas", "Luciano", "Luis", "Mario", "Marcelo",
"Matias", "Mauricio", "Miguel", "Moris", "Nahuel", "Nicolás", "Oscar", "Omar", "Pablo", "Paulo", "Pedro", "Ramiro", "Ruben", "Sami", "Saul", 
"Sebastian", "Segundo", "Simon", "Tadeo", "Tiago", "Ulises", "Ulrich", "Vicente", "Vito", "Washington", "Wenceslao", "William", "Wilmer", 
"Xavier", "Yamu", "Yefferson", "Yondu", "Zack", "Zoilo", "Zvonimir"]

const listaDeApellidos = ["Albornoz", "Alonso", "Alvarez", "Augmon", "Barcelo", "Bayar", "Brown", "Bussecca", "Campos", "Coronado", 
"Chesterfield", "Chiozza", "Davis", "Dominguez", "Eck", "Espina", "Famarile", "Fekka", "Formiga", "Funes", "Gamarra", "Garrison",
"Gudjohnssen", "Hespon", "Hwang", "Iarralde", "Ivic", "Jonescu", "Jutz", "Kalvitz", "Kohler", "Ledesma", "Lever", "Loeb", "Lodi",
"Loporvo", "Luque", "Mack", "Maletto", "Malvinetti", "Martin", "Martinez", "Mosconi", "Mulder", "Nacasabadar", "Neville", "Nudvek", 
"Obrero", "Ocasio", "Oppenheimer", "Oyurzo", "Paco", "Palladino", "Pampa", "Papin", "Pappanato", "Park", "Passarella", "Paso", "Poborsky",
"Ramos", "Recondo", "Ristretto", "Ruidiaz", "Sanchez", "Saviola", "Schwartz", "Senillosa", "Sevilla", "Silva", "Sonders", "Sucker", 
"Tanaka", "Terplum", "Toletto", "Tolstoi", "Turin", "Tusquero", "Uqbar", "Urbe", "Umtata", "Verona", "Vivas", "Wojnilowicz", "Yoo", "Zoidberg"]

const listaDeCalles = ["Arteria Principal", "Bacalao", "Cochabamba", "Charcas", "Díaz Vélez", "Ecuador", "Formosa",
"General Urquiza", "Huergo", "Islandia", "Jean Jaures", "Kennedy", "Av. Libertador", "Misiones", "Nicaragua", "Ortega",
"Panamá", "Av. Rivadavia", "Suipacha", "Tres de Febrero", "Urquiza", "Venezuela", "Winscosin", "Yrigoyen", "Zapiola"]

const listaDeBarrios = ["Agronomía, CABA", "Almagro", "Banfield", "Belgrano", "Caballito", "Claypole", "Coghlan", "Chacarita, CABA", "Derqui", "Ensenada", "Flores", 
"Garín", "Hurlingham", "Ingeniero Budge", "La Matanza", "Liniers", "Longchamps", "Martínez", "Olivos", "Palermo", "Palermo SOHO", "Parque Chas", 
"Parque Patricios", "Polvorines", "Rafael Calzada", "San Isidro", "San Justo", "Tapiales", "Temperley"]

const listaDeRoles = ["Auxiliar docente", "Bibliotecario", "Docente de Tecnología", "Docente de Informática", "Preceptor",
"Profesor de Inglés", "Profesor suplente de Arte", "Secretario", "Titular de 1er Grado", "Titular de 2do Grado", "Titular de 3er Grado", 
"Titular de 4to Grado", "Titular de 5to Grado", "Titular de 6to Grado", "Titular de 7mo Grado"]

listaDeColegios = ["Colegio Domingo Sarmiento", "Colegio De Las Hermanas Reparadoras", "Colegio de la Juventud", "Colegio del Sol",
"Escuela Andrés Giménez", "Escuela nro.411 Néstor Lorenzo", "Escuela Nuestra Patria", "Instituto Alberto Federico Acosta",
"Instituto Santa María", "Instituto Modelo Milanesio", "Instituto de la Salvación", "Instituto Modelo de Buenos Aires", "Instituto Futuro"]

//ubico elementos necesarios del DOM
const btn = document.querySelector('#btn');
btn.onclick = cambiarCandidato;

const nombreBio = document.getElementById('nombreBio');
const nombreH1 = document.getElementById('nombreH1');
const fechaBio = document.getElementById('fechaBio');
const domicilioBio = document.getElementById('domicilioBio');
const estadoCivilBio = document.getElementById("estadoCivilBio");
const telefonoBio = document.getElementById("telefonoBio");
const mailBio = document.getElementById("mailBio");
const exp1 = document.getElementById("exp1");
const exp2 = document.getElementById("exp2");
const exp3 = document.getElementById("exp3");
const rol = document.getElementById("rol1");
const rol2 = document.getElementById("rol2");
const rol3 = document.getElementById("rol3");
const colegio1 = document.getElementById("colegio1");
const colegio2 = document.getElementById("colegio2");
const colegio3 = document.getElementById("colegio3");
const lugar1 = document.getElementById("lugar1");
const lugar2 = document.getElementById("lugar2");
const lugar3 = document.getElementById("lugar3");


function cambiarCandidato(){

    //CREAR NOMBRE
    const nombreActual =  listaDeNombres[randomNum(listaDeNombres.length)];
    let segundoNombre =  listaDeNombres[randomNum(listaDeNombres.length)];
    //evitar primer y segundo nombre iguales
    if (nombreActual == segundoNombre) {segundoNombre = " "};
    
    //creación de apellido, mail y chequeo de doble apellido
    let apellidoActual = listaDeApellidos[randomNum(listaDeApellidos.length)];
    //dejo creado ahora el mail, ya que dependerá del doble apellido
    mailBio.innerHTML = nombreActual.toLowerCase()+"."+apellidoActual.toLowerCase()+"@gmail.com";

    //para ver si tiene doble apellido
    if (randomNum(8) == 1){
        //apellidoActual += " " + listaDeApellidos[randomNum(listaDeApellidos.length)];
        let segundoApellido = listaDeApellidos[randomNum(listaDeApellidos.length)];
        if (segundoApellido == apellidoActual) {segundoApellido = "Batistuta"};
        mailBio.innerHTML = nombreActual.toLowerCase()+"."+apellidoActual.toLowerCase()+"."+segundoApellido.toLowerCase()+"@gmail.com";
        apellidoActual += " " + segundoApellido;
    }

    nombreBio.innerHTML = apellidoActual.toUpperCase() + ", " + nombreActual + " " + segundoNombre;
    nombreH1.innerHTML = nombreActual + " " + apellidoActual;
 
    //CAMBIAR FECHA DE NACIMIENTO
    let diaNacimiento = randomNum(28)+1;
    let mesNacimiento = randomNum(12)+1;
    let anioNacimiento = 1980 + randomNum(12);

    fechaBio.innerHTML = diaNacimiento + "-" + mesNacimiento + "-" + anioNacimiento;

    const calle = listaDeCalles[randomNum(listaDeCalles.length)];
    let alturaDomicilio = randomNum(3000) + 10;
    
    const rndEstadoCivil = randomNum(100);
    let estadoCivil = "";
    if (rndEstadoCivil < 55) {estadoCivil = "Soltero"}
    else if (rndEstadoCivil < 85) {estadoCivil = "Casado"}
    else if (rndEstadoCivil > 95) {estadoCivil === "Viudo"}
    else {estadoCivil = "Divorciado"}
    


    //para evitar que la altura termine en 00:
    if (alturaDomicilio % 100 === 0) {alturaDomicilio += 1};

    const barrio =  listaDeBarrios[randomNum(listaDeBarrios.length)]

    domicilioBio.innerHTML = calle + " " + alturaDomicilio + ", " + barrio
    estadoCivilBio.innerHTML = estadoCivil;

    //lo armo así para evitar números raros como 0000: 
    telefonoBio.innerHTML = "11-" + (randomNum(8000)+1001) + "-" + (randomNum(8000)+1001);
    

    const antigFinal = 2023 - randomNum(7) - 1;
    const antigIntermedia = antigFinal - randomNum(5) - 1;
    const antigInicial = antigIntermedia - randomNum(5) - 1 ;

    exp1.innerHTML = antigFinal + "-actualidad";
    exp2.innerHTML = antigIntermedia + "-" + antigFinal;
    exp3.innerHTML = antigInicial  + "-" + antigIntermedia;

    //para evitar que se repitan los colegios
    let primerColegio = listaDeColegios[randomNum(listaDeColegios.length)]; 
    let segundoColegio = listaDeColegios[randomNum(listaDeColegios.length)];
    let tercerColegio = listaDeColegios[randomNum(listaDeColegios.length)];
    if (primerColegio == segundoColegio || primerColegio == tercerColegio){primerColegio = "Instituto Goyeneche"};
    if (segundoColegio == tercerColegio) {segundoColegio = "Complejo Educativo Sagrado Silencio"};
    
    rol1.innerHTML = listaDeRoles[randomNum(listaDeRoles.length)];
    rol2.innerHTML = listaDeRoles[randomNum(listaDeRoles.length)];
    rol3.innerHTML = listaDeRoles[randomNum(listaDeRoles.length)];
    colegio1.innerHTML = primerColegio;
    colegio2.innerHTML = segundoColegio;
    colegio3.innerHTML = tercerColegio;
    lugar1.innerHTML = listaDeBarrios[randomNum(listaDeBarrios.length)];
    lugar2.innerHTML = listaDeBarrios[randomNum(listaDeBarrios.length)];
    lugar3.innerHTML = listaDeBarrios[randomNum(listaDeBarrios.length)];

    //CAMBIAR FOTO
    const nuevaFoto = (randomNum(98) + 1).toString();
    const nuevaFotoUrl = "https://randomuser.me/api/portraits/men/" + nuevaFoto + ".jpg";


    document.querySelector("img").src = nuevaFotoUrl;

 

}

function randomNum(max){
    return Math.floor(Math.random() * max);
}

cambiarCandidato();

