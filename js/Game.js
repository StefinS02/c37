class Game {
  constructor() {}

  start() {
    form = new Form();
    form.display();

    player = new Player();
    playerCount = player.getCount();

    car1 = createSprite(width/2-100, height-100);
    car1 = addImage("car1",car1Img);

    car2 = createSprite(width/2+100,height-100);
    car2 = addImage("car2",car2Img);

    cars = [car1, car2]
  }

  getState(){
    var gameStateRef=database.ref("gameState");
    gameStateRef.on("value",function(data){
      gameState = data.val();
    })
  }

  update(state){
    database.ref("/").update({
      gameState: state
    })
  }

  handleElements(){
    form.hide();
    form.titleImage.position(40,50);
    form.titleImage.class("gameTitleAfterEffect")
  }

  play(){
    this.handleElements();
    player.getPlayersInfo();
    if(allPlayers !== undefined){
      image(track, 0, -height * 5, width, height * 6);
      drawSprites();
    }
  }
}
