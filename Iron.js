class Iron{
	constructor(x, y, width, height){
	
		var options={
           'density':30,
		   'friction':3,
		   'restitution':0.8
		}

		this.body = Bodies.rectangle(x, y, 50, 50, options)
        this.width = width;
		this.height = height;
		World.add(world, this.body);

	}

	display(){
		var pos=this.body.position;

		push();
		translate(pos.x, pos.y);
		rectMode(CENTER)
		strokeWeight(4);
		stroke("black");
		fill("black");
        rect(0,0,this.width,this.height);
		pop();
	}

}