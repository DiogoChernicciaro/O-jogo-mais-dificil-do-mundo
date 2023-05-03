var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["2bf09d65-0e96-4884-8c3d-375d0360ad4a","97101883-5dd2-487c-a533-5e21980cca91","a22eee44-d620-4831-8e29-d0e210f11301","933ffe91-76ed-44c4-9c7a-35544442e04b","a39c6c13-cf88-4711-8ff7-fd70d102ed6b"],"propsByKey":{"2bf09d65-0e96-4884-8c3d-375d0360ad4a":{"name":"kidportrait_02_1","sourceUrl":"assets/api/v1/animation-library/gamelab/puN9TbQEHqDwpZBcS0MitP6v7xlK7PhV/category_faces/kidportrait_02.png","frameSize":{"x":264,"y":362},"frameCount":1,"looping":true,"frameDelay":2,"version":"puN9TbQEHqDwpZBcS0MitP6v7xlK7PhV","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":362},"rootRelativePath":"assets/api/v1/animation-library/gamelab/puN9TbQEHqDwpZBcS0MitP6v7xlK7PhV/category_faces/kidportrait_02.png"},"97101883-5dd2-487c-a533-5e21980cca91":{"name":"cars_1","sourceUrl":null,"frameSize":{"x":73,"y":133},"frameCount":1,"looping":true,"frameDelay":12,"version":"EAd_WyhpIKEc9yAWNU2IkKazx_0y5J62","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":73,"y":133},"rootRelativePath":"assets/97101883-5dd2-487c-a533-5e21980cca91.png"},"a22eee44-d620-4831-8e29-d0e210f11301":{"name":"car_red_1","sourceUrl":"assets/api/v1/animation-library/gamelab/PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu/category_vehicles/car_red.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu/category_vehicles/car_red.png"},"933ffe91-76ed-44c4-9c7a-35544442e04b":{"name":"car_yellow_1","sourceUrl":"assets/api/v1/animation-library/gamelab/T3gaSeDCsA_YHvy7GieJSRtG4e1P8Ac1/category_vehicles/car_yellow.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"T3gaSeDCsA_YHvy7GieJSRtG4e1P8Ac1","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/T3gaSeDCsA_YHvy7GieJSRtG4e1P8Ac1/category_vehicles/car_yellow.png"},"a39c6c13-cf88-4711-8ff7-fd70d102ed6b":{"name":"car_black_1","sourceUrl":"assets/api/v1/animation-library/gamelab/CSqSIJEb65ONvhatlX8ENonwX._VZQ_n/category_vehicles/car_black.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"CSqSIJEb65ONvhatlX8ENonwX._VZQ_n","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/CSqSIJEb65ONvhatlX8ENonwX._VZQ_n/category_vehicles/car_black.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var mortes = 0;
var carro1, carro2, carro3, carro4;
var borda1, borda2;
var gameState = "end";
var sam = createSprite(20,190,15,15);
sam.shapeColor = "yellow"
sam.setAnimation("kidportrait_02_1")
sam.scale = 0.08

borda1 = createSprite (190,120,420,3);
borda2 = createSprite(190,260,420,3);

carro1 = createSprite(100,130,10,10);
carro1.shapeColor = "red";
carro1.setAnimation("car_black_1");
carro1.scale = 0.25;
carro2 = createSprite(215,130,10,10);
carro2.setAnimation("car_yellow_1");
carro2.shapeColor = "red";
carro2.scale = 0.25;
carro3 = createSprite(165,250,10,10);
carro3.shapeColor = "red";
carro3.setAnimation("car_red_1");
carro3.scale = 0.25;
carro4 = createSprite(270,250,10,10);
carro4.shapeColor = "red";
carro4.setAnimation("cars_1");
carro4.scale = 0.25;


carro1.velocityY = 4.7;
carro2.velocityY = 4.7;
carro3.velocityY = -4.7;
carro4.velocityY = -4.7;





function draw() {
background("white");
text("mortes:" + mortes,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
  carro1.bounceOff(borda1);
  carro1.bounceOff(borda2);
  carro2.bounceOff(borda1);
  carro2.bounceOff(borda2);
  carro3.bounceOff(borda1);
  carro3.bounceOff(borda2);
  carro4.bounceOff(borda1);
  carro4.bounceOff(borda2);

if (keyDown("right")){
  sam.x=sam.x +6;
}
if (keyDown("left")){
  sam.x=sam.x -6;
}

if (sam.isTouching(carro1) || sam.isTouching(carro2) || sam.isTouching(carro3)|| sam.isTouching(carro4 ))
{
sam.x =20;
sam.y =190;
mortes=mortes +1;
}
  
drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
