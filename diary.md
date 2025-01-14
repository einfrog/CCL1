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
DOING NEXT:\
border collision for spaceship\
draw 10 scraps on canvas (with distance in between)\
generate random recipe array\
dropping off scraps at the spaceship (create array to push "installed" items into, check if array is identical with array from recipe\
ensure all necessary scraps are generated on maps\
\
TO DO:\
NEW: scrap weapon/tool in inventory, implement just one empty inventory slot\
key has to be pressed to pick up item, item can be dropped, input items in right order (like recipe)\
adjust collision detection (only for player)\
inventory graphic;\
DOM manipulation for recipies\
background graphic;\
inventory and scrap objects (canvas);\
fix stop (jaggy movement);\
rory: sprite animation;\
scraps: object, dummy sprite (could just say 1-5), math;\
recipes: object, css/html (lay over game container), math;\
spaceship WIP: object and border detection, collision, vicinity detector;\
creatures: dummy sprite, math;\
COMPLEXITY: crafting interface, put scrap in right place;\

