<h1>Web minecraft:</h1>
<p>
  A basic version of the popular game Minecraft that lets the user mainly build and remove the given map elements. 
  by that, the user can build new stuff on the map
</p>
<a href="https://minicraft2d.netlify.app/entryscreen/presentation/entry">Click to play</a>
<h2>In practice:</h2>
<p>
  The setup for our game is a 2-dimensional world of "tiles" and a set of tools that the user can toggle between. Each tile has a type that is presented to the user by its texture according to its type, and the tool type the user can apply action to edit the board.
</p>
<h3>how to play:</h3>
<p>
  In the current version, we have 3 types of tools and three types of tiles; each tool matches one type of tile. The actions are as follows:<br>
1. Collect a tile: To collect a tile and free up the matched place on the board, we need to apply action with a matched tool on a matched tile. Then, the tile will be added to our inventory to use on any free space on the board.<br>
2. Place a tile: To place a tile, we need to apply it on an empty tile on the board, and to have the matched picked tile in our inventory.<br>
</p>

<h2>under the hood:</h2>
<p>
  I chose to build the project using OOP-driven methods :
  In practice, I define the needed “abelites” in three basic main sections: dom/draw ui, setup/board the actions.
</p>
<br>
<p>
  after defining my needs, I modularise into smaller and smaller sub-objects each need :
“Game” class to control all the sub-objects in one main object
</p>
<ul>
  <li>“Board” class mainly to group the game “world” and gain easy access to it<br>
      * “SquarItem” class to define each specific item on the board</li>
  <li>
    “UserInventory” to hold and control the state of the possible actions on our game  <br>
     * “Toll” defines a specific type of action toll to our user and tracks its state as well
  </li>
  <li>
    “DrawData” will take data changes and apply them to our HTML and CSS to render our UI
  </li>
</ul>

<h3>
  The main working method:
</h3>
<p>
  Board method: To get in sync between the HTML board UI to our js data I used two damnation arrays,by using the array index as matched ID by the x/y coordinates we can gain access from one to each other and make sure both in sync 
</p>
<br>
<p>
  to gain control over all the different components, we will set relative ID numbers to each game-constant type of object:
this method should supply:
</p>
<ul>
  <li> access to a matched “toll” object  from the “SquareItem” id</li>
  <li>
    define the constant types of our tolls and squrItemObjects <br>
      * and the relation between each other
  </li>
  <li>
     access to matched HTML/CSS element/class
  </li>
</ul>

<p>
  Data objects types(number):
SquareItem = 1-> 5 define each type… ,while -1 is default (empty type)
Toll = >  *[SquarItem+10], to the matched inventory tolls only, we will gain access by relative id to the regular square id +10…
*for regular toll will be 6->9

HTML/CSS id: will be matched with the values with the prefix “squarItemType[matchedNumId]”
</p>
