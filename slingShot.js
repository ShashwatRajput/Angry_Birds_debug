class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            length : 20,
            stiffness : 0.1
        }
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
        this.slingImage1 = loadImage("sprites/sling1.png");
        this.slingImage2 = loadImage("sprites/sling2.png");
        this.slingImage3 = loadImage("sprites/sling3.png");
    }
    display(){
        image(this.slingImage1, 200, 20);
        image(this.slingImage2, 170, 20);
        strokeWeight(10);
        if(this.sling.bodyA){
            //line(this.sling.bodyA.position.x, this.sling.bodyA.position.y, this.sling.pointB.x, this.sling.pointB.y);
            var startPoint = this.sling.bodyA.position;
            var endPoint = this.sling.pointB;
            stroke(48 , 22, 8)
            line(startPoint.x -20, startPoint.y, endPoint.x -10, endPoint.y)
            line(startPoint.x -20, startPoint.y, endPoint.x +30, endPoint.y)
            image(this.slingImage3, startPoint.x -25, startPoint.y -15, 15, 30)
        }
    }
    fly(){
        this.sling.bodyA = null;
    }
    attach(body){
        this.sling.bodyA = body
    }
}