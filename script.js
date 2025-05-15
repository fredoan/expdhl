document.addEventListener('DOMContentLoaded', function() {
    const formSuivi = document.querySelector('.form-suivi');
    const codeSuiviInput = document.getElementById('code-suivi');
    const resultatsSuivi = document.getElementById('resultats-suivi');
    const codeAffiche = document.getElementById('code-affiche');
    const statusColis = document.getElementById('status-colis');
    const dernierUpdate = document.querySelector('#resultats-suivi p:last-of-type');
    const nomArticle = document.getElementById('nom-article');
    const colisImage = document.querySelector('.colis-image img');

    formSuivi.addEventListener('submit', function(event) {
        event.preventDefault();

        const codeSuivi = codeSuiviInput.value.trim();
        if (codeSuivi === '') {
            alert('Veuillez entrer un code de suivi valide.');
            return;
        }

        // Mise à jour des informations de suivi
        codeAffiche.textContent = codeSuivi;
        resultatsSuivi.style.display = 'block';

        // Simulation de résultats pour démonstration
        setTimeout(function() {
            if (codeSuivi === 'IT9115884645') {
                statusColis.textContent = 'En transit';
                nomArticle.textContent = 'Iphone 15 pro max';
                colisImage.src = 'iphon.jpg'; // Remplacer par l'image de l'article
                dernierUpdate.textContent = "Dernière mise à jour : 12 mai 2025 - Le colis est en transit vers l’aéroport de Paris.";
            } else if (codeSuivi === '456') {
                statusColis.textContent = 'Livré';
                nomArticle.textContent = 'Laptot ABC';
                colisImage.src = 'assets/laptop.jpg'; // Remplacer par l'image de l'article
                dernierUpdate.textContent = "Dernière mise à jour : 11 mai 2025 - Le colis a été livré à la destination.";
            } else {
                statusColis.textContent = 'Non trouvé';
                nomArticle.textContent = 'Aucun article trouvé';
                colisImage.src = 'assets/no-image.jpg'; // Image d'absence de produit
                dernierUpdate.textContent = "Dernière mise à jour : 12 mai 2025 - Aucun colis trouvé avec ce code.";
            }
        }, 1000); // Simule un délai de 1 seconde
    });
});