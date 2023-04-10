<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Document</title>
   <script src="https://cdn.tailwindcss.com"></script>
    
</head>

<body>
    <header>
        <nav class="text-center text-red-600">

            <a href="index.php">Accueil</a>
            <a href="index.php">Inscription</a>
            <a href="index.php">Connexion</a>
            <a href="index.php">Rechercher</a>

        </nav>


    </header>

    <section>

        <form method="post">
            <label for="madame">Madame</label>
            <input type="radio" name="radio">

            <label for="monsieur">Monsieur</label>
            <input type="radio" name="radio">

            <label for="prenom">Prénom</label>
            <input type="text" name="prenom">

            <label for="nom">Nom</label>
            <input type="text" name="nom">

            <label for="adresse">Adresse</label>
            <input type="text" name="adresse">

            <label for="email">Email</label>
            <input type="email" name="email">

            <label for="password">Mot de Passe</label>
            <input type="password" name="password">
            
            <label for="c_password">Confirmer Mot de Passe</label>
            <input type="password" name="c_password">

            <label for="informatique">Informatique</label>
            <input type="checkbox" name="informatique">

            <label for="voyages">Voyages</label>
            <input type="checkbox" name="voyages">

            <label for="sport">Sport</label>
            <input type="checkbox" name="sport">

            <label for="lecture">Lecture</label>
            <input type="checkbox" name="lecture">

            
            <input type="submit" name="valider" value="Valider">


        </form>

    </section>










    <footer>

        <nav>

            <a href="index.php">Accueil</a>
            <a href="index.php">Inscription</a>
            <a href="index.php">Connexion</a>
            <a href="index.php">Rechercher</a>

        </nav>


    </footer>






</body>

</html>