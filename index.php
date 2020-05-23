
<?php 
if(isset($_POST['submit'])){
    $to = "larrieu.arnaud@gmail.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $subject = "Form submission";
    $subject2 = "Copy of your form submission";
    $message = $from . " wrote the following:" . "\n\n" . $_POST['message'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    // mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    echo "Mail Sent. Thank you, we will contact you shortly.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    }
    ?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Concert+One&family=Fjalla+One&family=IBM+Plex+Serif:wght@400;500;600;700&family=Ubuntu+Mono:wght@400;700&family=Varela&family=Yatra+One&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
    />

    <link rel="stylesheet" href="./styles.css" />
    <script
      src="https://kit.fontawesome.com/cc83cc28bd.js"
      crossorigin="anonymous"
    ></script>
    <title>Menu</title>
  </head>
  <body>
    <div class="menu-click menu-btn" id="menu">
      <div class="menu-text">Menu</div>
    </div>
    <section id="intro">
      <div class="video-container">
        <video src="./img/chess.mp4" autoplay muted loop></video>
      </div>
      <svg
        class="svg"
        viewBox="-500 -500 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="MyPath"
          fill="none"
          stroke="none"
          d="M-500,7
          C-500,-500 500,-500 500,2"
        ></path>
        <text class="rotate-center">
          <textPath href="#MyPath" startOffset="50%" text-anchor="middle">
            Developpeur Web
          </textPath>
        </text>
      </svg>

      <h1 class="name name-intro">
        Arnaud
        <br />
        Larrieu
      </h1>
    </section>
    <img class="portrait" src="./img/portrait.jpg" alt="My face :)" />

    <ul class="menu-items menu-items-appear">
      <li><a class="home-link">Accueil</a></li>
      <li><a class="work-link">Travaux</a></li>
      <li><a class="cv-link">Skills & CV</a></li>
      <li><a class="contact-link">Me contacter</a></li>
    </ul>
    <section id="work">
      <h2>Quelques travaux</h2>
      <div class="card">
        <div class="card-image waves-effect waves-block waves-light">
          <img class="activator" src="./img/projet1.png" />
        </div>
        <div class="card-content">
          <span class="card-title activator"
            >Agence Web<i class="material-icons right">more_vert</i></span
          >
        </div>
        <div class="card-reveal">
          <span class="card-title"
            ><i class="material-icons right">close</i></span
          >
          <h3>Intégration d'une maquette</h3>
          <p>
            J'ai réalisé ce site après avoir suivi plusieurs cours en ligne sur
            divers sites Internet comme notamment
            <a href="http://www.openclassrooms">Openclassrooms</a> ou encore la
            plateforme <a href="http://www.udemy.com">Udemy</a> ainsi qu'à
            l'aide de livres sur le sujet. Je disposais d'une image représentant
            le site et le but était de faire l'intégration de la maquette
            fournie au format photoshop .psd. J'ai également utilisé la
            librairie d'icône <a href="www.fontawesome.com">Fontawesome</a>
          </p>
          <div class="card-button">
            <a class="waves-effect waves-light btn">Voir en live</a>
            <i class="fab fa-3x fa-github"></i>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-image waves-effect waves-block waves-light">
          <img class="activator" src="./img/projet2.png" />
        </div>
        <div class="card-content">
          <span class="card-title activator"
            >Mon portfolio v1<i class="material-icons right">more_vert</i></span
          >
          <p><a href="#"></a></p>
        </div>
        <div class="card-reveal">
          <span class="card-title"
            ><i class="material-icons right">close</i></span
          >
          <h3>Portfolio Responsive design</h3>

          <p>
            Site réalisé avec pour objectif de le rendre agréable à naviguer
            aussi bien sur mobile que sur tablette ou PC. Utilisation de média
            queries permettant de cibler le type d'appareil côté client et
            ainsi, d'adapter le design du site. J'ai employé le préprocesseur
            SASS qui aide à écrire un code CSS plus compréhensible
          </p>
          <div class="card-button">
            <a
              class="waves-effect waves-light btn"
              href="./projects/portfolio_v1/dist/index.html"
              >Voir en live</a
            >
            <i class="fab fa-3x fa-github"></i>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-image waves-effect waves-block waves-light">
          <img class="activator" src="./img/projet3.png" />
        </div>
        <div class="card-content">
          <span class="card-title activator"
            >Carte d'anniversaire<i class="material-icons right"
              >more_vert</i
            ></span
          >
          <p><a href="#"></a></p>
        </div>
        <div class="card-reveal">
          <span class="card-title"
            ><i class="material-icons right">close</i></span
          >
          <h3>Carte d'anniversaire dynamique</h3>

          <p>
            J'ai développé cette page web afin de célébrer un anniversaire. Le
            but du développement de cette carte était de me familiariser avec
            jQuery. J'ai donc utilisé ce framework afin de rendre la page
            dynamique avec notamment des évênements qui se déclenchent
            lorsqu'une action est entreprise par l'utilisateur sur la page. A la
            fin de l'animation, un morceau de musique est joué et des contrôles
            sont disponibles afin de le mettre sur pause ou de le rejouer.
          </p>
          <div class="card-button">
            <a
              class="waves-effect waves-light btn"
              href="./projects/portfolio_v1/dist/index.html"
              >Voir en live</a
            >
            <i class="fab fa-3x fa-github"></i>
          </div>
        </div>
      </div>
      <div class="chevron-container">
        <div class="chevron"></div>
        <div class="chevron"></div>
        <div class="chevron"></div>
        <!-- <span class="text">Scroll down</span> -->
      </div>
    </section>
    <section id="cv">
      <div class="skills">
        <div class="hard-skills">
          <h2 class="hard-skills-title">Hard <br />skills</h2>
          <div class="bar-container">
            <p>HTML</p>
            <div class="progress">
              <div class="progress-value bar"></div>
            </div>
          </div>
          <div class="bar-container">
            <p>CSS</p>
            <div class="progress">
              <div class="progress-value bar"></div>
            </div>
          </div>
          <div class="bar-container">
            <p>JavaScript</p>
            <div class="progress">
              <div class="progress-value bar"></div>
            </div>
          </div>
          <div class="bar-container">
            <p>Bootstrap</p>
            <div class="progress">
              <div class="progress-value bar"></div>
            </div>
          </div>
          <div class="bar-container">
            <p>ReactJs</p>
            <div class="progress">
              <div class="progress-value bar"></div>
            </div>
          </div>
          <div class="bar-container">
            <p>PHP</p>
            <div class="progress">
              <div class="progress-value bar"></div>
            </div>
          </div>
          <div class="bar-container">
            <p>Vscode</p>
            <div class="progress">
              <div class="progress-value bar"></div>
            </div>
          </div>
        </div>

        <div class="soft-skills">
          <h2 class="soft-skills-title">Soft <br />skills</h2>
          <p>Travail en équipe</p>
          <p>Adaptation</p>
          <p>
            Résolution de problèmes
          </p>
          <p>Créativité</p>
          <p>Autonomie</p>
          <a class="waves-effect waves-light btn"
            ><i class="material-icons left">file_download</i>Mon CV</a
          >
        </div>
      </div>
    </section>
    <section id="contact">
      <div class="contact-container">
        <h2>Me contacter</h2>
            <form method="post">
          <div class="input-field email-input">
            <i class="material-icons prefix">email</i>
            <input
              id="icon_prefix1"
              type="email"
              name="email"
              class="validate"
            />
            <label for="icon_prefix1">Email</label>
            <span
              class="helper-text"
              data-error="Invalide"
              data-success="Valide"
            ></span>
          </div>

          <div class="input-field textarea-input">
            <i class="material-icons prefix">mode_edit</i>
            <textarea
              id="icon_prefix2"
              class="materialize-textarea"
              name="message"
            ></textarea>
            <label for="icon_prefix2">Message</label>
          </div>
          <button
            class="btn waves-effect waves-light submit-btn modal-trigger"
            type="submit"
            name="submit"
            value="Submit"
            href="#modal1"
          >
            Envoyer
            <i class="material-icons right">send</i>
          </button>
        </form>
        <div id="modal1" class="modal">
          <div class="modal-content">
            <h4>Merci pour votre message</h4>
          </div>
          <div class="modal-footer">
            <a href="#!" class="modal-close waves-effect waves-green btn-flat"
              >Fermer</a
            >
          </div>
        </div>
        <i class="fab fa-github-square fa-5x contact-icon"></i>
        <i class="fab fa-facebook-square fa-5x contact-icon"></i>
        <i class="fab fa-twitter-square fa-5x contact-icon"></i>
      </div>
    </section>
    <script src="./app.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
  </body>
</html>
