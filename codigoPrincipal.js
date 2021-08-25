const motorfisico=Matter.Engine;
const mundofisico=Matter.World;
const cuerpofisico=Matter.Bodies;
const restriccion=Matter.Constraint;

var engine, planeta;
var piso;
function setup ()
{
    createCanvas (400, 400);
    //motor = motor fisico de matter
    // aqui solo lo creamos 
    engine = motorfisico.create ();
    // el motor se agrega al mundo
    planeta = engine.wolrd;

   piso = new suelo (200, 400, 200, 5);
}

function draw ()
{
    background ("blue")
    // update es para almacenar.
    // y aqui cargamos lo que tiene el motor de 
    //matter en el motor que esta conectado con el mundo 
    motorfisico.update (engine);
   piso.display();
}