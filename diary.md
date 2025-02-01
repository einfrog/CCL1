Jan 13th:\
DONE TODAY:\
Set up folder with HTML (canvas, health bar, inventory, title, etc), CSS and JS Files;\
establish baseGameObject.js, start main.js, global.js and input.js;\
start roryPlayer.js (object for player);\
implement movement for WASD;\
get gameloop and setup working for dummy sprites;\
new classes: inventory, healthbar and recipebox (extend BaseGameObjects and are drawn in the gameloop);\
draw placeholders for healthbar;\
make scrap class, draw dummy scrap on canvas;\
border collision with Canvas (bump into Canvas) in update function;\
canvas border stops player (player bumps into wall);\
\
\
\
JAN14th:\
DONE TODAY: \
draw all dummy scraps\
distinguish between default scraps array and displayScraps array, displayScrap Class\
draw display scraps on canvas with array\
draw dummy healthbar, recipebox and inventory box pngs\
randomCoordinates function for scrap\
overwrite restrictions for randomCoordinates to prevent them from being under UI\
draw spaceship construction site dummy, make spaceship class, draw spaceship on canvas\
collision detection for scraps and player\
picking up scraps (collision detection, appearance in inventory);\
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
draw random recipe in recipeBox\
draw 10 scraps on canvas\
implement that only one scrap can be picked up at a time\
new Class: SpaceShipVicinity for detecting when player is close to the Spaceship (to drop off scraps)\
implement installing scraps (array InstalledScraps)\
display installed Scraps in spaceship\
implement dropping inventory scraps back down\
implement that you can only pick up scraps when key is pressed\
prevent scraps from spawning in the area of healtbar, recipebox, spaceship and inventory\
ensure all necessary scraps are generated on maps\
check installed scraps with recipe\
fix stop() (jaggy movement);\
\
\
\
JAN 16th:\
DONE TODAY:\
implement that you can extract scraps from the spaceship construction site\
relocate spaceship, recipebar, and inventory\
consider doing a matrix map instead of randomly spawning scraps (obstacles where the character has to go around)\
try to figure out map\
implement map and draw walls (obstacles)\
rethink everything because a labyrinth is not fun to play\
implement: rory can only install scraps when near the spaceship\
\
\
\
JAN 17th:\
DONE TODAY:\
figure out enemies!\
draw enemy with random movement\
add health that decreases when rory collides with enemy\
settimeout() for only decreasing health once when rory collides with an enemy (set boolean (canTakeDamage) to true after every second)\
define endGame() function;\
game ends when health reaches 0; allgameObjects stop being drawn when endGame() is executed\
adjust interface (relocate inventory, recipebar and spaceship), carry inventory scrap with player\
draw player health as hearts\
\
\
\
JAN 18th:\
DONE TODAY:\
getting started on: Rory sprites, scrap graphics, heart graphics\
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
fix gameloop when pressing try again on end screen\
fix startGame() error where arrays would just be added to instead of being actually reset\
rework css for start and retry button\
change order of objects being drawn to ensure rory is on top of the scraps on the map but underneath the scraps on the recipe box\
fix runtime; game deltatime does not continue being calculated when tabbed out of the window\
\
\
\
JAN 21st:\
DONE TODAY:\
redesign the main charactert\
draw final hearts art\
draw rory test sprites\
insert rory's test sprites into game\
\
\
\
JAN 22nd:\
DONE TODAY:\
try fixing sprite animation where the sprite stays the same despite setting the right indices of the sprite sheet\
fixed sprite animation\
console.log enemy bugs where the enemy would "walk" out of map and jitter around\
draw enemy sprites\
get started on screen art\
do spaceship construction site art\
fix another sprite issue with rory's sprites and input\
overwork input.js in general\
fix enemy's update function so it doesnt go out of bounds\
overwork visibility change function\
keep working on screen art\
finish drawing screen art (start screen, game over and game won screen; slightly change details)\ 
redo CSS and HTML\
add said screens design\
implement background music\
redo enemy sprite\
color enemy sprites\
correct and continue working on Rory's sprite and start coloring\
polish heart art\
draw instruction box art\
implement newly drawn hearts and instruction box\
\
\
\
\
JAN 23rd\
DONE TODAY:\
redo CSS for laptop screen size\
finish and implement rory's sprites\
implement idle sprites for rory\
reworked background\
adjust sizes and speed of player, scraps and enemies\
put inventory and spaceship scrap management on same key\
draw finished spaceship art (that I did not end up putting into the game)\
adjust collision detection for Rory because of her big hair (make her box bounds smaller, so the collision seems fair to the player)\
prepare Pitch (do slides on figma)\
add buttons for controls and story\
added functionality to gameplay, story and back button\
polish the implementation of background music\
implemented pause, mute, and volume controls for background music\
\
\
VERY IMPORTANT BEORE HANDING IN:\
check parameters and values for constructors in main\
\
\
OPTIONAL:\
drawing scraps over character when character carries them\
draw obstacles on map to go around or more enemies, make map bigger and sprites smaller, to make game more interesting ("force"/encourage player to move around and collect the scraps)\
put distances between the generated scraps\
adjust collision detection (only for player)\
