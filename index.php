<?php 
if(isset($_POST['submit'])){
  $to = "larrieu.arnaud@gmail.com"; 
  $from = $_POST['email']; 
  $subject = "Form submission";  
  $message = $from . " a ecrit le message suivant:" . "\n\n" . $_POST['message'];
  $headers = "From:" . $from; 
  mail($to,$subject,$message,$headers);
  // echo "Email envoye, je vous repondrais rapidement";
  }
  ?>

<!DOCTYPE html>
<html
  lang="fr"
  xml:lang="fr"
  translate="no"
  xmlns="http://www.w3.org/1999/xhtml"
>
  <head>
    <meta charset="UTF-8" />
    <meta name="google" value="notranslate" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="Description" content="Portfolio de Arnaud Larrieu" />
    <link rel="canonical" href="https://arnaudlarrieu.fr" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
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

    <link rel="stylesheet" href="./autostyles.css" />
    <script
      src="https://kit.fontawesome.com/cc83cc28bd.js"
      crossorigin="anonymous"
    ></script>
    <title>Portfolio de Arnaud Larrieu</title>
  </head>
  <body class="notranslate">
    <div class="menu-click menu-btn" id="menu">
      <div class="menu-text">Menu</div>
    </div>
    <div class="video-container">
      <video src="./img/chess.mp4" autoplay muted loop></video>
    </div>
    <main>
      <section id="intro">
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

        <ul class="menu-items menu-items-appear">
          <li><a class="home-link">Accueil</a></li>
          <li><a class="work-link">Travaux</a></li>
          <li><a class="cv-link">Skills & CV</a></li>
          <li><a class="contact-link">Me contacter</a></li>
        </ul>
        <img class="portrait" src="./img/portrait.jpg" alt="My face :)" />
      </section>

      <section id="work">
        <h2>Quelques travaux</h2>
        <div class="cards-container">
          <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="activator" src="./img/projet1-opti.jpg" />
            </div>
            <div class="card-content">
              <a
                class="btn-floating halfway-fab waves-effect waves-light red activator"
                ><i class="material-icons">add</i></a
              >
              <span class="card-title activator">Agence Web</span>
            </div>
            <div class="card-reveal">
              <span class="card-title"
                ><h3>Intégration d'une maquette</h3>
                <i class="fas fa-2x fa-times"></i
              ></span>

              <p>
                J'ai réalisé ce site après avoir suivi plusieurs cours en ligne
                sur divers sites Internet comme notamment
                <a href="http://www.openclassrooms">Openclassrooms</a> ou encore
                la plateforme <a href="http://www.udemy.com">Udemy</a> ainsi
                qu'à l'aide de livres sur le sujet. Je disposais d'une image
                représentant le site et le but était de faire l'intégration de
                la maquette fournie au format photoshop .psd. J'ai également
                utilisé la librairie d'icône
                <a href="www.fontawesome.com">Fontawesome</a>
              </p>
              <div class="card-button">
                <a
                  class="waves-effect waves-light btn"
                  href="./projet1/index.html"
                  target="_blank"
                  >Voir en live</a
                >
                <a href="https://github.com/NaNostyle/Projet1" target="_blank"
                  ><i class="fab fa-3x fa-github"></i
                ></a>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="activator" src="./img/projet2-opti.jpg" />
            </div>
            <div class="card-content">
              <a
                class="btn-floating halfway-fab waves-effect waves-light red activator"
                ><i class="material-icons">add</i></a
              >
              <span class="card-title activator">Mon portfolio v1</span>
            </div>
            <div class="card-reveal">
              <span class="card-title"
                ><h3>Portfolio responsive Design</h3>
                <i class="fas fa-2x fa-times"></i
              ></span>

              <p>
                Site réalisé avec pour objectif de le rendre agréable à naviguer
                aussi bien sur mobile que sur tablette ou PC. Utilisation de
                média queries permettant de cibler le type d'appareil côté
                client et ainsi, d'adapter le design du site. J'ai employé le
                préprocesseur SASS qui aide à écrire un code CSS plus
                compréhensible
              </p>
              <div class="card-button">
                <a
                  class="waves-effect waves-light btn"
                  href="./projet2/index.html"
                  target="_blank"
                  >Voir en live</a
                >
                <a
                  href="https://github.com/NaNostyle/portfolio_v1"
                  target="_blank"
                  ><i class="fab fa-3x fa-github"></i
                ></a>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="activator" src="./img/projet3-opti.jpg" />
            </div>
            <div class="card-content">
              <a
                class="btn-floating halfway-fab waves-effect waves-light red activator"
                ><i class="material-icons">add</i></a
              >
              <span class="card-title activator">Carte d'anniversaire</span>
            </div>
            <div class="card-reveal">
              <span class="card-title"
                ><h3>Carte d'anniversaire dynamique</h3>
                <i class="fas fa-2x fa-times"></i
              ></span>

              <p>
                J'ai développé cette page web afin de célébrer un anniversaire.
                Le but du développement de cette carte était de me familiariser
                avec jQuery. J'ai donc utilisé ce framework afin de rendre la
                page dynamique avec notamment des évênements qui se déclenchent
                lorsqu'une action est entreprise par l'utilisateur sur la page.
                A la fin de l'animation, un morceau de musique est joué et des
                contrôles sont disponibles afin de le mettre sur pause ou de le
                rejouer.
              </p>
              <div class="card-button">
                <a
                  class="waves-effect waves-light btn"
                  href="./projet3/index.html"
                  target="_blank"
                  >Voir en live</a
                >
                <a
                  href="https://github.com/NaNostyle/Birthday-Card"
                  target="_blank"
                  ><i class="fab fa-3x fa-github"></i
                ></a>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="activator" src="./img/projet4-opti.jpg" />
            </div>
            <div class="card-content">
              <a
                class="btn-floating halfway-fab waves-effect waves-light red activator"
                ><i class="material-icons">add</i></a
              >
              <span class="card-title activator">Github Finder</span>
            </div>
            <div class="card-reveal">
              <span class="card-title"
                ><h3>Github Finder</h3>
                <i class="fas fa-2x fa-times"></i
              ></span>

              <p>
                J'ai développé cette application pour apprendre les bases du
                framework JavaScript ReactJs de Facebook. Lorsque un utlisateur
                entre un nom de développeur, cela envoi une requête à l'api de
                Github qui retourne les noms des développeurs contenant la
                chaine de caractère entrée. Lorsque l'on clique sur le nom du
                développeur, quelques informations supplémentaires apparaissent
                telles que les noms des derniers repositories, ses followers, sa
                biographie, et un lien vers son profil complet.
              </p>
              <div class="card-button">
                <a
                  class="waves-effect waves-light btn"
                  href="https://githubfindertutorial.netlify.app/"
                  target="_blank"
                  >Voir en live</a
                >
                <a
                  href="https://github.com/NaNostyle/github_finder"
                  target="_blank"
                  ><i class="fab fa-3x fa-github"></i
                ></a>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="activator" src="./img/projet5-opti.jpg" />
            </div>
            <div class="card-content">
              <a
                class="btn-floating halfway-fab waves-effect waves-light red activator"
                ><i class="material-icons">add</i></a
              >
              <span class="card-title activator">Mon premier site</span>
            </div>
            <div class="card-reveal">
              <span class="card-title"
                ><h3>Mon premier site</h3>
                <i class="fas fa-2x fa-times"></i
              ></span>

              <p>
                Ceci est le premier site web que j'ai réalisé. Il s'agissait
                d'un exercice que j'ai réalisé a la suite d'un cours donné par
                le site Openclassrooms. C'est sur ce site que j'ai écris mes
                premières lignes de code html et css. Avant de devenir
                Openclassrooms, j'ai appris les bases sur "le site du zéro".
              </p>
              <div class="card-button">
                <a
                  class="waves-effect waves-light btn"
                  href="./projet5/index.html"
                  target="_blank"
                  >Voir en live</a
                >
                <a href="https://github.com/NaNostyle/sdz" target="_blank"
                  ><i class="fab fa-3x fa-github"></i
                ></a>
              </div>
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
        <div class="skills-titles">
          <h2 class="hard-skills-title">Hard <br />skills</h2>
          <h2 class="soft-skills-title">Soft <br />skills</h2>
        </div>
        <div class="skills">
          <div class="hard-skills">
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
            <ul>
              <li>Travail en équipe</li>
              <li>Adaptation</li>
              <li>Résolution de problèmes</li>
              <li>Créativité</li>
              <li>Autonomie</li>
            </ul>
            <a
              class="waves-effect waves-light btn"
              href="./img/Cv_Arnaud_Larrieu.pdf"
              target="_blank"
              ><i class="fas fa-file-download"></i>Mon CV</a
            >
          </div>
        </div>
      </section>
      <section id="contact">
        <img class="portrait" src="./img/portrait.jpg" alt="My face :)" />
        <div class="contact-container">
          <h2>Me contacter</h2>
          <iframe
            name="dummyframe"
            id="dummyframe"
            style="display: none;"
          ></iframe>
          <form method="post" target="dummyframe">
            <div class="input-field email-input">
              <i class="material-icons prefix notranslate" translate="no"
                >email</i
              >
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
              <i class="material-icons prefix notranslate" translate="no"
                >mode_edit</i
              >
              <textarea
                id="icon_prefix2"
                class="materialize-textarea"
                name="message"
              ></textarea>
              <label for="icon_prefix2">Message</label>
            </div>
            <button
              class="btn waves-effect waves-light submit-btn"
              type="submit"
              name="submit"
              value="Submit"
            >
              Envoyer
              <i class="material-icons right notranslate" translate="no"
                >send</i
              >
            </button>
            <button class="modal-trigger btn-hidden" href="#modal1"></button>
          </form>
          <div id="modal1" class="modal">
            <div class="modal-content">
              <h4>Merci pour votre message</h4>
              <p>Je vous répondrai sous 24 heures</p>
              <br /><br />
              <p class="barcelony">Arnaud</p>
            </div>
            <div class="modal-footer">
              <a href="#!" class="modal-close waves-effect waves-green btn-flat"
                >Fermer</a
              >
            </div>
          </div>
          <a href="https://www.github.com/NaNostyle" target="_blank"
            ><i class="fab fa-github-square fa-5x contact-icon"></i
          ></a>
          <a href="https://www.linkedin.com/in/arnaudlarrieu/" target="_blank"
            ><i class="fab fa-linkedin fa-5x contact-icon"></i
          ></a>
          <a href="https://twitter.com/ArnaudLarrieu" target="_blank">
            <i class="fab fa-twitter-square fa-5x contact-icon"></i
          ></a>
        </div>
      </section>
    </main>
    <script src="./app.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
  </body>
</html>
