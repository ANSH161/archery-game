 class comprock{
    constructor(x,y,widht,height) {
      var option = {
        isStatic: true
      };
      this.body = Bodies.rectangle(x,y,width,height,option);
    this.width = widht;
    this.height = height;
    this.image = loadImage("./assets/base2.png")

    world.add(world, this.body);
    comprock.display();
    }
  }