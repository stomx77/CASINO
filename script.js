// Gestion simple du formulaire de connexion
document.getElementById("connexionForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email && password) {
        alert("Connexion réussie avec " + email);
        // Ici tu peux ajouter une logique de validation d'email/mot de passe
    } else {
        alert("Veuillez remplir tous les champs !");
    }
});