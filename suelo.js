class suelo
{
    constructor(x,y,width,height)
    {
        var opciones= 
        {
            isStatic:true
        }
        this.cuerpo=cuerpofisico.rectangle(x,y,width,height,opciones);
        this.ancho=width;
        this.largo = height;
        mundofisico.add(planeta, this.cuerpo);        
    }
    display()
    {
        var pos=this.cuerpo.position;
        rectMode(CENTER);
        fill("brown");
        rect(pos.x, pos.y, this.ancho,this.largo);
    }
}

       
    