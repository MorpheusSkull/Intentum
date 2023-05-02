      const menuToggle = document.querySelector(".menu-toggle");
      const menu = document.querySelector(".menu");

      menuToggle.addEventListener("click", () => {
          menu.classList.toggle("active");
      });

      window.addEventListener("resize", () => {
          if (window.innerWidth > 768) {
              menu.classList.remove("active");
          }
      });

  document.querySelectorAll(".inner").forEach((button) => {
    button.onmousemove = (e) => {
      const target = e.target;
      const rect = target.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      button.style.setProperty("--x", `${x}px`);
      button.style.setProperty("--y", `${y}px`);
      button.style.setProperty("--height", `${rect.height}px`);
      button.style.setProperty("--width", `${rect.width}px`);
    };
  });



  var player;

  function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
      height: "100%",
      width: "100%",
      videoId: "yze95GEg_Q8",
      playerVars: {
        autoplay: 1,
        controls: 0,
        modestbranding: 1,
        rel: 0,
        showinfo: 0,
      },
      events: {
        onReady: onPlayerReady,
      },
    });
  }

  function onPlayerReady(event) {
    event.target.playVideo();
    addMuteToggleListener();
  }

  function addMuteToggleListener() {
    var muteToggle = document.getElementById("mute-toggle");
    muteToggle.addEventListener("click", function () {
      if (player.isMuted()) {
        player.unMute();
      } else {
        player.mute();
      }
    });
  }


  $(document).ready(function() {
    $('.testimonial-slider').slick({
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 5000,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      adaptiveHeight: true
      
    });
  });

  document.getElementById("loginBtn").onclick = function () {
    document.getElementById("loginPopup").style.display = "block";
  };

  document.getElementById("loginTop").onclick = function () {
    document.getElementById("loginPopup").style.display = "block";
  };

  document.getElementById("loginMobile").onclick = function () {
    document.getElementById("loginPopup").style.display = "block";
  };

  document.getElementsByClassName("close")[0].onclick = function () {
    document.getElementById("loginPopup").style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == document.getElementById("loginPopup")) {
      document.getElementById("loginPopup").style.display = "none";
    }
  }

  document.getElementById("loginMobile").addEventListener("click", function () {
    var dropdownMenu = document.getElementById("menuList");
    if (dropdownMenu.style.display === "block") {
      dropdownMenu.style.display = "none";
    }
  });



  const darkModeToggle = document.getElementById("darkModeToggle");
  const body = document.body;

  darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
  });


  document.addEventListener('scroll', () => {
    const yOffset = window.pageYOffset;
    const amorphousImage = document.querySelector('.amorphous-image');
    amorphousImage.style.transform = `translateZ(-1px) scale(2) translateY(${-yOffset * 0.5}px)`;
  });


  const parallaxImage = document.querySelector('.parallax-image');

  window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    const parallaxSpeed = 0.5;
    parallaxImage.style.transform = `translateY(${scrollPosition * parallaxSpeed}px)`;
  });



  document.addEventListener('DOMContentLoaded', function () {
    // Obter elementos
    const showSignup = document.getElementById('show-signup');
    const backToLogin = document.getElementById('back-to-login');
    const signupPopup = document.getElementById('signupPopup');
    const loginPopup = document.getElementById('loginPopup');
    const closeLoginPopup = loginPopup.querySelector('.close');
    const closeSignupPopup = signupPopup.querySelector('.close');
  
    // Mostrar o popup de cadastro e ocultar o de login quando o botão "Cadastre-se" for clicado
    showSignup.addEventListener('click', function (event) {
      event.preventDefault();
      loginPopup.style.display = 'none';
      signupPopup.style.display = 'block';
    });
  
    // Voltar ao popup de login
    backToLogin.addEventListener('click', function (event) {
      event.preventDefault();
      signupPopup.style.display = 'none';
      loginPopup.style.display = 'block';
    });
  
    // Fechar o popup de login
    closeLoginPopup.addEventListener('click', function (event) {
      event.preventDefault();
      loginPopup.style.display = 'none';
    });
  
    // Fechar o popup de cadastro
    closeSignupPopup.addEventListener('click', function (event) {
      event.preventDefault();
      signupPopup.style.display = 'none';
    });
  });
  $(document).ready(function() {
    $('#signup-form').on('submit', function(event) {
      event.preventDefault();
  
      var formData = {
        'email': $('#email').val(),
        'password': $('#password').val(),
      };
  
      $.ajax({
        url: '/signup',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(formData),
        success: function(response) {
          if (response.success) {
            $('#success-message').show();
          } else {
            // Exibir mensagem de erro (se necessário)
          }
        },
        error: function() {
          // Exibir mensagem de erro (se necessário)
        }
      });
    });

  
  document.addEventListener('DOMContentLoaded', function () {
    const editProfileButton = document.querySelector('.editProfile');
    const profileInfo = document.querySelector(".profile-info");
    const profileEdit = document.querySelector(".profile-edit");
  
    profileInfo.style.display = "none";
    profileEdit.style.display = "block";
  });

});


window.onload = function() {
  var countUp = new CountUp('numero-aumentando', 0, 1000);
  countUp.start();
};



document.addEventListener('DOMContentLoaded', function() {
  const parallaxContainer = document.getElementById('nossos-valores');

  window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset;
    const parallaxSpeed = -1.5;
    parallaxContainer.style.backgroundPositionY = `${scrollPosition * parallaxSpeed}px`;
  });
});
