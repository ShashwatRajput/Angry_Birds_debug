class Bird extends BaseClass{
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.image1 = loadImage("sprites/smoke.png");
    this.path = []
  }
  display(){
    super.display();
    if(this.body.velocity.x > 10 && this.body.position.x > 200 && flag === 1){
    var position = [this.body.position.x, this.body.position.y]
    this.path.push(position)
  }
    for(var index = 0; index <= this.path.length-1; index = index+1){
      image(this.image1, this.path[index][0], this.path[index][1])
    }
  }
}