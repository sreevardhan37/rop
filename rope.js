class Rope{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length: 250,
        }
        this.pointB=this.pointB
        this.sling = Constraint.create(options);
        World.add(world, this.rope);
    }
    attach(body){
        this.rope.bodyA=body;
    }
    
    fly(){
        this.rope.bodyB=null;
    }

    display(){
        var pointA = this.sling.bodyA.position;
        var pointB=this.pointB;
        push();
        strake(43,22,0);
        strokeWeight(3);
        line(pointA.x, pointA.y, pointB.x, pointB.y);

        pop();
    }
    
}