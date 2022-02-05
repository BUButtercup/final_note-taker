# Note-Taker

This is a notetaking/storing application. The function of this app is to take in notes through a UI, store them in a db.json, and render the saved notes as list items in a side panel. These notes can then be called back, edited, or deleted. I learned a lot about using express.js routes during this project, as well as how the front-end and the back end communicate with each other. In the future, this app is either a lovely little stand alone for use one a desktop or mobile device, or could be integrated into a package geared towards offices or project managers.
    


## Table of Contents
* [Installation](#installation)
* [Instructions for Use](#instructions-for-use)
* [Credits](#credits)
* [License](#license)
    
## Installation
1. This program requires the following programs be installed:<ul><li>Node.js</li><li>npm express</li><li>npm uuid</li><li>I like nodemon for running server</li><li>insomnia (or similar) if want to independently test routes</li></ul>

2. Before running this program, please have the following information on hand and / or loaded into your 'asset/images' folder:<ul><li>if deploying from your own local server</li><li>please quickly review instructions for appropriate initiation of the app.</li></ul>


## Instructions for Use
<ol><li>The following instructions detail how to clone down and run app on your local server:</li><li>Clone repo to local machine, open in code editor</li><li>Make sure all prerequisite programs and npm dependencies are installed</li><li>Open terminal at the level of ‘/Routes/server.js’.</li><li>Start the server using ‘node server.js’ (or ‘nodemon server.js’ if using).</li><li>Navigate to empty browser window and enter url: ‘localhost:3001/’. This will take you to the landing page. </li><img src="./Assets/notepad-landing-page.png" alt="notepad landing page" title="Landing Page @ localhost:3001/" width="500px"><li>Click ‘Getting Started’ to be taken to the notepad.</li><li>You will see a nav bar with a ‘+’ button in the upper right of the screen. This will bring up a new note entry form. You will also see an area in the middle where you will enter note titles and note text. Once there is something in both fields, a save button will appear next to the ‘+’ above.</li><img src="./Assets/notepad.png" alt="notepad entry page" title="Note Entry Page" width="500px"><li>Once you have entered and saved a note, it will be rendered to a list in a left-hand side bar. There is a red trash icon on each list item that will delete the entry from both the sidebar and database file.</li><img src="./Assets/notepad-w-notes.png" alt="notes displayed on note entry page" title="Notes are displayed on the left" width="500px"><li>If you would like to view or edit a previously-entered note, click on the note in the left sidebar, and it will be brought to the main note area, along with an ‘Edit Note’ button. If you would like to change the note, make your changes and click edit to save them: <a href="./Assets/notepad-editing-note.png">here's an example.</a></li><li>Please take a moment to watch the video walkthrough below, or to visit the deployed Heroku link to interact with the UI.</li></ol>

Here is a [video walkthrough](https://drive.google.com/file/d/1f5XDb3T1zUlemKMsPt8CMXyM694896Gu/view?usp=sharing).

## Credits 


- [UW Full Stack Web Dev Bootcamp](https://bootcamp.uw.edu/)

  -Initial starter code and teaching me what I’m doing


## License
The files in this repository are covered by the [MIT License](https://choosealicense.com/licenses/mit/).
