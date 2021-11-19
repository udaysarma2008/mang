class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 1
        }
        
        this.launcher = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.launcher);
    }
    
    fly(){
        this.launcher.body = body;
    }

    display(){
        
        if(this.launcher.bodyA){
            var pointA = this.launcher.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(7);
            stroke("red");
            line(pointA.x , pointA.y, pointB.x , pointB.y);
  
        }
    }
    
}