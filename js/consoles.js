// Fonction pour afficher les consoles PlayStation
function consolesPlaystation() {
    const container1 = document.getElementById('playstation-container');
    
    // Création de la première console
    const console1 = document.createElement('div');
    console1.className = 'console';
    console1.innerHTML = `
        <img src="img/Playstation/ps1.png" alt="PS1">
        <h3>PlayStation 1</h3>
        <p>Date de sortie : le 29 septembre 1995 (en France)</p>
        <p>Prix de sortie : 3 499 francs (environ 535 €)</p>
    `;
    
    // Création de la deuxième console
    const console2 = document.createElement('div');
    console2.className = 'console';
    console2.innerHTML = `
        <img src="img/Playstation/ps2.png" alt="PS2">
        <h3>PlayStation 2</h3>
        <p>Date de sortie : 30 novembre 2000 (en France)</p>
        <p>Prix de sortie : 3 299 francs (environ 500 €)</p>
    `;
    
    // Création de la troisième console
    const console3 = document.createElement('div');
    console3.className = 'console';
    console3.innerHTML = `
        <img src="img/Playstation/ps3.png" alt="PS3">
        <h3>PlayStation 3</h3>
        <p>Date de sortie : 23 mars 2007 (en France)</p>
        <p>Prix de sortie : 599 € (modèle 60 Go)</p>
    `;
    
    // Création de la quatrième console
    const console4 = document.createElement('div');
    console4.className = 'console';
    console4.innerHTML = `
        <img src="img/Playstation/ps4.png" alt="PS4">
        <h3>PlayStation 4</h3>
        <p>Date de sortie : 29 novembre 2013</p>
        <p>Prix de sortie : 399 € (modèle standard)</p>
    `;
    
    // Création de la cinquième console
    const console5 = document.createElement('div');
    console5.className = 'console';
    console5.innerHTML = `
        <img src="img/Playstation/ps5.png" alt="PS5">
        <h3>PlayStation 5</h3>
        <p>Date de sortie : 19 novembre 2020</p>
        <p>Prix de sortie : 499 € (modèle standard) / 399 € (modèle numérique)</p>
    `;

    // Ajout des consoles au conteneur
    container1.appendChild(console1);
    container1.appendChild(console2);
    container1.appendChild(console3);
    container1.appendChild(console4);
    container1.appendChild(console5);
}

// Fonction pour afficher les consoles Xbox
function consolesXbox() {
    const container2 = document.getElementById('xbox-container');
    
    // Création de la première console
    const console1 = document.createElement('div');
    console1.className = 'console';
    console1.innerHTML = `
        <img src="img/Xbox/xbox.png" alt="XBOX">
        <h3>Xbox</h3>
        <p>Date de sortie : le 14 Mars 2002 (en France)</p>
        <p>Prix de sortie : 399 €</p>
    `;

    // Création de la deuxième console
    const console2 = document.createElement('div');
    console2.className = 'console';
    console2.innerHTML = `
        <img src="img/Xbox/xbox-360.png" alt="XBOX 360">
        <h3>Xbox 360</h3>
        <p>Date de sortie : le 2 Décembre 2005 (en France)</p>
        <p>Prix de sortie : 399 € (modèle premium)</p>
    `;

    // Création de la troisième console
    const console3 = document.createElement('div');
    console3.className = 'console';
    console3.innerHTML = `
        <img src="img/Xbox/xbox-one.png" alt="XBOX One">
        <h3>Xbox One</h3>
        <p>Date de sortie : le 22 Novembre 2013 (en France)</p>
        <p>Prix de sortie : 499 € (modèle standard)</p>
    `;

    // Création de la quatrième console
    const console4 = document.createElement('div');
    console4.className = 'console';
    console4.innerHTML = `
        <img src="img/Xbox/xbox-one-s.png" alt="XBOX One S">
        <h3>Xbox One S</h3>
        <p>Date de sortie : le 2 Août 2016 (en France)</p>
        <p>Prix de sortie : 299 €</p>
    `;

    // Création de la cinquième console
    const console5 = document.createElement('div');
    console5.className = 'console';
    console5.innerHTML = `
        <img src="img/Xbox/xbox-one-x.png" alt="XBOX One X">
        <h3>Xbox One X</h3>
        <p>Date de sortie : le 7 Novembre 2017 (en France)</p>
        <p>Prix de sortie : 499 €</p>
    `;

    // Création de la cinquième console
    const console6 = document.createElement('div');
    console6.className = 'console';
    console6.innerHTML = `
        <img src="img/Xbox/xbox-series-x.png" alt="XBOX Series X">
        <h3>Xbox Series X</h3>
        <p>Date de sortie : le 10 Novembre 2020 (en France)</p>
        <p>Prix de sortie : 499 €</p>
    `;

    // Création de la cinquième console
    const console7 = document.createElement('div');
    console7.className = 'console';
    console7.innerHTML = `
        <img src="img/Xbox/xbox-series-s.png" alt="XBOX Series S">
        <h3>Xbox Series S</h3>
        <p>Date de sortie : le 10 Novembre 2020 (en France)</p>
        <p>Prix de sortie : 299 €</p>
    `;

    // Ajout des consoles au conteneur
    container2.appendChild(console1);
    container2.appendChild(console2);
    container2.appendChild(console3);
    container2.appendChild(console4);
    container2.appendChild(console5);
    container2.appendChild(console6);
    container2.appendChild(console7);
}

function chooseConsole(option) {
    const playstationContainer = document.getElementById('playstation-container');
    const xboxContainer = document.getElementById('xbox-container');

    playstationContainer.innerHTML = ''; // Vide le conteneur PlayStation
    xboxContainer.innerHTML = ''; // Vide le conteneur Xbox

    switch (option) {
        case 1:
            // Appel de la fonction pour afficher toutes les Playstations
            consolesPlaystation();
            break;
        case 2:
            // Appel de la fonction pour afficher toutes les Xbox
            consolesXbox();
            break;
    }
}