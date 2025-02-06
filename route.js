    // Function to render content based on the URL
    function renderContent(url) {
        if (url === '/') {//HOME
            document.getElementById('content').innerHTML =`
            <div id="softwareButton" class="left">Software <button id="softwareButton">software</button><br>
                <img src="./bin.png" alt="Software" id="software">
            </div>

            <div class="middle">Media / Social / Art<br><br><br>
                <div class="tooltiptext">In Progress</div>
                <img src="./string.jpg" alt="Swirly Graphic">
            </div> 

            <div id="aboutButton" class="right">About me <button id="aboutButton">About</button><br>
                <img src="./Xmas.jpg" alt="Pic of me">
            </div>

            <div class="footer">
                <span style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776;</span>
                <h3>Raymond Cooke Welcomes you!</h3>
                <p>Jesus Saves &nbsp;</p>
                <a href="https://usccb.cld.bz/Catechism-of-the-Catholic-Church/27/" target="_blank">
                <img src="./spiritbig.jpg" class="shake-on-hover" width="200" height="200">
                </a>
            </div>
        `; 
            
        } else if (url === '/about') {//ABOUT ME
            document.getElementById('content').innerHTML =`
            <div class="left">Some Picture I took in 2015<br><br>
                <img src="./placehold.jpg" width="480" height="480">
            </div>

            <div class="middle">My Timeline<br>
                <a href="timeline.html"  target="_blank">
                    <img src="./hourglass.png" width="480" height="480">
                </a>
            </div>  
            <div class="right">My Resume <br><br>
                <a href="./rezzy.pdf" target="_blank">
                    <img src="./factory.jpg" width="480" height="480">
                </a>

            </div>
            <div class="footer">
                <img src="./home.png"alt="Home Icon" id="home">
                <h3>All About Ray</h3>
                <p>Jesus Saves &nbsp;</p>
                <a href="https://usccb.cld.bz/Catechism-of-the-Catholic-Church/27/" target="_blank">
                <img src="./spiritbig.jpg" class="shake-on-hover" width="200" height="200">

                </a>

                
                
            </div>
        `;

        } else if (url === '/software') {//WARES
            document.getElementById('content').innerHTML =`
            <div class="left">Check out my Github!<br><br><br><br><br>
                <a href="https://github.com/RayIsLearning" target="_blank"><img src="/GitHub_Logo.png" alt="An example image"></a>
            </div>
            
            <div class="middle">Roman Numeral Converter<br><br>
                <a href="./roman.html" target="_blank">
                    <img src="./bustslil.jpg" alt="An example image">
                </a>
            </div>  
            <div class="right">Roll the dice! <br><br><br>
                <img src="./dice.gif" alt="Dice Game">
            </div>
            <!-- TODO FIX THE HOME ICON -->
            <div class="footer">
                <img src="/home.png"alt="Home Icon" id="home">
                <h3>My Javascript powered pages</h3>
                <p>Jesus Saves &nbsp;</p>
                <a href="https://usccb.cld.bz/Catechism-of-the-Catholic-Church/27/" target="_blank">
                <img src="./spiritbig.jpg" class="shake-on-hover" width="200" height="200">
                </a>
    
            </div>
        `;
        } else {
            document.getElementById('content').innerHTML = '404 - Page Not Found';
        }
    }

            function renderTitle(url) {
        if (url === '/') {
            document.title = 'Home';
        } else if (url === '/about') {
            document.title = 'About';
        } else if (url === '/software') {
            document.title = 'Projects';
        } else {
            document.title = '404 - Page Not Found';
        }
    }


    // Update content when the URL changes
    window.onpopstate = function(event) {
        renderContent(window.location.pathname);
        renderTitle(window.location.pathname);
    };

    // Change the URL and render content
    function navigateTo(url) {
        history.pushState({}, '', url);
        renderContent(url);
        renderTitle(url);
    }

    // Example navigation buttons
    document.getElementById('home').onclick = function() {
        navigateTo('/');
    };

    document.getElementById('aboutButton').onclick = function() {
        navigateTo('/about');
    };

    document.getElementById('softwareButton').onclick = function() {
        navigateTo('/software');
    };

