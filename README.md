# Workshop Nextjs
Dans ce workshop nous allons apprendre les différents avantages qu'apportent nextjs que se soit au niveau du routage ou des différentes balises. Tout cela passera par la création de plusieurs pages importantes "_app.jsx", "_document.jsx" et "404.jsx"

## Pour commencer
Dans un premier temps, il vous faut installer node et yarn

### Installation et configuration

Pour Linux
Executez la commande ``apt install node`` pour installer node
Puis executez la commande ``apt install npm`` puis ``npm install –global yarn``pour installer yarn

Pour Mac
Executez la commande ``brew install node`` pour installer node
Puis executez la commande ``brew install npm`` puis ``npm install –global yarn``pour installer yarn

Vous aurez aussi npm vu qu'il faut npm pour installer yarn

## Début des exercices
Il vous faudra créer un dossier page = "pages" contenant "_app.jsx", "_document.jsx" et "404.jsx" plus au moins 2 pages aux design de votre choix. Vous devrez pouvoir naviguer entre vos pages 

Après avoir fini les 3 fichiers nommés si dessus avec la documentation que je vous ai mis en dessous, il faudra faire une navbar ou un footer de votre choix et l'implémenter, il devra être statique. 

Pour tester votre site web aller sur http://localhost:3000

## Pour les plus rapide
Dans un premier temps lisez la documentation ci-dessous et essayer de créer une Api qui vous renverra "Bonjour"
Si vous êtes vraiment déter et que vous kiffer nextjs j'ai encore un petit exo à vous donner
Créer une Api qui vous donnera la météo de "strasbourg"


## Documentations

Pour "_app", "_document" et "404"
- https://nextjs.org/docs/advanced-features/custom-app
- https://nextjs.org/docs/advanced-features/custom-document
- https://nextjs.org/docs/advanced-features/custom-error-page#404-page

Quelques balises qui vous seront utiles "link", "Image"
- https://nextjs.org/docs/api-reference/next/link
- https://nextjs.org/docs/api-reference/next/image

Pour les plus rapide
- https://nextjs.org/docs/api-routes/introduction
- https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch
