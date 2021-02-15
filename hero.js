class Hero  {
    constructor(x,y){
      this.image = loadImage("sprites/Superhero-01.png");
      this.image = loadImage("sprites/Superhero-02.png");
    }
  
    display() {
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
      super.display();
    }
  }
  
  