let nav_parent = document.getElementById("nav_parent")
let foot_parent = document.getElementById("foot_parent")

function addNavbarToPage() {

    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const currentUser = localStorage.getItem("currentUser");

    let loginSectionHTML = "";

    if (isLoggedIn === "true") {
        loginSectionHTML = `
            <div class="profile-nav-btn flex-div">
                <span>${currentUser}</span>
                <button onclick="logout()" id= "logout">Logout</button>
            </div>
        `;
    } else {
        loginSectionHTML = `
            <a href="login.html" class="login-nav-btn flex-div">
                <i class="fa-solid fa-box-open"></i>
                <span>Login</span>
            </a>
        `;
    }

    nav_parent.innerHTML = `
    <div class="logo"> <a href="/index.html"><img src="assets/logo-home.svg" alt=""></a></div>
    <ul class="nav-menu">
        <a href="/index.html"><i class="fa-solid fa-box-open"></i> Home</a>
        <a href="/destination.html"><i class="fa-solid fa-car"></i> Destination</a>
        <a href=""><i class="fa-solid fa-info-circle"></i> About</a>
    </ul>
    
    <div class="login-nav-cont">
        <div id="search-data-div"></div>
        ${loginSectionHTML} <!-- Here the loginSectionHTML variable is used -->
        <div class="flex-div">
            <img src="assets/man.png" alt="">
            <span class="Name"></span>
        </div>
        <i class="fa-solid fa-bars close" id="nav-toggle"></i>
    </div>`;



    if (foot_parent) {
        
    foot_parent.innerHTML = `
    <div class="footer-info">
    <div class="footer-social">
      <div class="contact">
        <img class="abs" src="assets/abs2.png" alt="" />
        <a href="https://www.facebook.com/imohsinanwar" target="_blank"><i class="fa-brands fa-square-facebook"></i></a>
        <a href="https://www.instagram.com/imohsinanwar" target="_blank"><i class="fa-brands fa-instagram"></i></a>
        <a href="https://github.com/imohsinanwar" target="_blank"><i class="fa-brands fa-square-github"></i></a>
        <a href="#" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
        
        
        
      </div>
      <div class="search">
        <input type="text" placeholder="Enter your email" />
        <button><i class="fa-solid fa-magnifying-glass"></i></button>
      </div>
    </div>
    <div class="footer-details">
      <div>
          <h4>SOLUTIONS</h4>
          <p>Pluralsight Skills</p>
          <p>Pluralsight Flow</p>
          <p>Government</p>
          <p>Gift of Pluralsight</p>
          <p>View Pricing</p>
          <p>Contact Sales</p>
          <p>Skill up for free</p>
      </div>

      <div>
          <h4>COMPANY</h4>
          <p>About us</p>
          <p>Customer stories</p>
          <p>Careers</p>
          <p>Blog</p>
          <p>Newsroom</p>
          <p>Resource center</p>
          <p>Guides</p>
      </div>
      <div>
          <h4>RESOURCES</h4>
          <p>Download Pluralsight</p>
          <p>Events</p>
          <p>Teach</p>
          <p>Partners</p>
          <p>Affiliate Partners</p>
          <p>PluralsightOne.org</p>
          <p>Subscribe</p>
      </div>
      <div>
          <h4>SUPPORT</h4>
          <p>Contact</p>
          <p>Help center</p>
          <p>IP whitelist</p>
          <p>Sitemap</p>
      </div>

  </div>

  </div>`
}
}

function logout() {
    localStorage.setItem("isLoggedIn", "false");
    localStorage.setItem("currentUser", "");
    window.location.reload();
}

addNavbarToPage()
let a = document.getElementById("nav_parent").offsetHeight
document.querySelector("body").style.marginTop = `${a}px`

let nav_toggle = document.getElementById("nav-toggle")
let nav_menu = document.querySelector(".nav-menu")
let navbar2 = document.querySelector(".navbar2")

nav_toggle.addEventListener("click" , ()=>{
    console.log(nav_menu.style.right);
    if (nav_menu.style.right == "0px") {
        nav_menu.style.right = "100%"
        console.log('hell');
        if (navbar2) {
            navbar2.style.left = "100%"
        }
        
        
    }
    else  {
        nav_menu.style.right = "0px"
        console.log('hell1');
            
            if (navbar2) {
                navbar2.style.left = "0px"
            }
        
    }
})
