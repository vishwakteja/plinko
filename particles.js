class Ptl{
constructor(x, y){
var options={
    'restitution':0.09,
            'friction':0.000009,
            'density':0,
            'isStatic':false

}

this.body=Bodies.circle(x, y, 10, options)
this.radius=10;
this.color=color(random(0, 255),random(0, 255),random(0, 255))
World.add(world, this.body)
}
display(){

    var pos =this.body.position;
    
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    noStroke();
    fill(this.color);
    strokeWeight(5)
    ellipseMode(RADIUS)
    ellipse( 0, 0,10, 10);
    pop();

}



}