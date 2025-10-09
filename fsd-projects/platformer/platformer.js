$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(100, 650,300, 10);
createPlatform(300, 370, 200, 8 );
createPlatform(490, 535, 300, 8); 
createPlatform(600, 300, 200, 10);
createPlatform(300, 600, 150, 7); 
createPlatform(850, 620, 300, 7); 



    // TODO 3 - Create Collectables
 createCollectable("kennedi", 550, 400); 
  createCollectable("steve", 250, 500); 
   createCollectable("grace", 400, 200); 
   createCollectable("diamond", 1200, 500); 


    
    // TODO 4 - Create Cannons
createCannon("bottom",900, 900 ); 
createCannon("left",200, 800 ); 
createCannon("top", 600, 1000); 

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
