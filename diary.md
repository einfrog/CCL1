Jan 13th:\
DONE TODAY:\
Set up folder with HTML (canvas, health bar, inventory, title, etc), CSS and JS Files;\
establish baseGameObject.js, start main.js, global.js and input.js;\
start roryPlayer.js (object for player);\
movement for WASD;\
gameloop and setup for dummy sprite (skeleton);\
new classes: inventory, healthbar and recipebox (extend BaseGameObjects and are drawn in the gameloop);\
draw placeholders for healthbar;\
scrap class, draw dummy scrap on canvas;\
border collision with Canvas (bump into Canvas) in update function;\
canvas border stops player (player bumps into wall);\
custom font (Chekra Petch);\
\
\
\
JAN14th:\
DONE TODAY: \
dummy scraps\
default scraps array and displayScraps, displayScrap Class\
draw display scraps on canvas with array\
draw dummy healthbar, recipebox and inventory pox pngs\
randomCoordinates function for scrap\
overwrite restrictions for randomCoordinates to prevent them from being under UI    REWORK!!!!!\
spaceship dummy, spaceshipWIP object, draw spaceship on canvas\
collision detection for scraps and player\
picking up scraps (collision detection, appearance in inventory;\
new isDrawn attribute to for scrap collision reaction\
implement changing sprites for Rory (dummy sprites)\
add background image\
\
\
\
JAN 15th\
DONE TODAY:\
border collision for spaceship\
generate random recipe array\
draw recipe in recipeBox\
draw 10 scraps on canvas\
implement that only one scrap can be picked up at a time\
new Class: SpaceShipVicinity for detecting when player is close to the Spaceship (to drop of scraps)\
installing scraps (array InstalledScraps)\
display installed Scraps in spaceship\
drop scraps back down\
only pick up scraps when key is pressed\
prevent scraps from spawning in the area of healtbar, recipebox, spaceship and inventory\
ensure all necessary scraps are generated on maps\
check installed scraps with recipe\
fix stop() (jaggy movement);\
\
\
\
JAN 16th:\
DONE TODAY:\
extract scraps from spaceship if they're wrong\
relocate spaceship, recipebar, and inventory\
consider doing a matrix map instead of randomly spawning scraps (obstacles where the character has to go around)\
try to figure out map\
implement map and draw walls (obstacles)\
rethink everything because labyrinth is not fun to play\
implement: rory can only install scraps when near the spaceship\
\
\
\
JAN 17th:\
DONE TODAY:\
figure out enemies!\
draw enemy with random movement\
add health that decreases when rory collides with enemy\
settimeout() for only decreasing health once when rory collides with an enemy (set boolean (f.e. can be damaged) to true after every second)\
define endGame() function;\
game ends when health reaches 0; allgameObjects stop being drawn when endGame() is executed\
adjust interface (relocate inventory, recipebar and spaceship), carry inventory scrap with player\
draw player health as hearts\
\
\
\
JAN 18th:\
DONE TODAY:\
getting started on: rory sprites, scrap graphics, heart graphics\
finish drawing the scraps (1: screws; 2: metalplane; 3: cables; 4: gear; 5: tape)\
implement scrap art into game; adjust recipeBox position and size\
get started on the lineart for rory's sprites\
\
\
\
JAN 20th:\
DONE TODAY:\
adjust canvas height/width and restructure canvas\
fix min max values for random coordinates\
fix border collision with canvas border for enemy\
call endGameWin() function when spaceship is completed\
add another enemy (story: scrapyard guard)\
start and end screen\
fix gameloop when pressing try again on end screen (PUT WIN END FUNCTIONS IN GLOBAL)\
fix startGame() bug where arrays would just be added to instead of being actually reset\
rework css for start and retry button\
change order of objects being drawn to ensure rory is on top of the scraps on the map but underneath the scraps on the recipe box\
fix runtime; game deltatime does not continue being calculated when tabbed out of the window\
\
\
\
Jan 21st:\
DONE TODAY:\
redesign main charactert\
draw heart pngs\
drawing rory test sprites\
insert rory's test sprites into game\
\
\
\
JAN 22nd:\
DONE TODAY:\
try fixing sprite animation\
fixed sprite animation\
log enemy bugs\
draw enemy sprites\
get started on screen art\
spaceship art\
fix sprites again\
fix sprite issue with rory's sprites and input\
overwork input.js in general\
fix enemy's update function so it doesnt go out of bounds\
overwork visibility change function\
keep working on screen art\
finish drawing screen art (start screen, game over and game won screen; slightly change details)\ 
redo CSS and HTML\
add screens i just finished\
implement background music\
redo enemy sprite\
color enemy sprites\
correct and continue rory's sprite and start coloring\
polish hearts\
draw instruction box\
implement hearts and instruction box\
\
\
\
\
JAN 23rd\
PLANNED TODAY:\
\
FINISH COLORING RORY'S SPRITES!!!!\
BACKGROUND!!!!\
implement idle sprites\
adjust sizes and speed\
adjust collision detection for non-rectangle objects\
add buttons for controls and story\
draw and implement spaceship (construction) sprites\
DONE TODAY:\
\
\
\
DOING NEXT:\
\
\
TO DO:\
background graphic;\
rory: sprite animation;\
spaceship construction: sprite (5 different sprites that change with every correctly installed scrap)\
\
\
VERY IMPORTANT BEORE HANDING IN:\
fix bugs with enemies: sometimes spawns on top of player and immediately subtracts one heart\
check parameters and values for constructors in main\
\
\
OPTIONAL:\
draw obstacles on map to go around or more enemies, make map bigger and sprites smaller, to make game more interesting ("force"/encourage player to move around and collect the scraps)\
put distances between the generated scraps\
adjust collision detection (only for player)\
