const { Observable, of } = require('rxjs');
const { exhaustMap, delay, tap } = require('rxjs/operators');


/*
exhaustMap
Ignorance des Nouvelles Émissions : Pendant qu'une souscription à un Observable interne est active, toutes les nouvelles valeurs émises par l'Observable source sont ignorées.
Utilisation Typique : Utile pour éviter les traitements redondants, comme dans les cas où vous ne voulez pas démarrer un nouveau traitement tant que le précédent n'est pas terminé (par exemple, pour éviter les envois multiples d'un formulaire).
Comportement : Si la source émet une nouvelle valeur alors qu'une souscription interne est en cours, cette nouvelle valeur est complètement ignorée. La souscription interne continue jusqu'à son achèvement sans être affectée par les nouvelles émissions.
*/

// exhaustMap continue avec la souscription interne en cours et ignore toute nouvelle émission jusqu'à ce que cette souscription soit complétée
// Fonction pour simuler une recherche API
function simulateApiSearch(query) {
  console.log(`Début de la recherche API pour: ${query}`);
  return of(`Résultat pour '${query}'`).pipe(
    delay(2000), // Temps de traitement plus long pour bien voir l'effet d'exhaustMap
    tap(() => console.log(`Recherche terminée pour: ${query}`))
  );
}

// Création d'un Observable pour simuler des changements de saisie utilisateur
const simulateInputChanges = new Observable(subscriber => {
  setTimeout(() => {
    subscriber.next('chat');
  }, 500);

  setTimeout(() => {
    subscriber.next('chien'); // Cette entrée sera ignorée
  }, 1000);

  setTimeout(() => {
    subscriber.next('oiseau'); // Cette entrée sera traitée
  }, 4000);
});

simulateInputChanges.pipe(
  exhaustMap(query => simulateApiSearch(query))
).subscribe(result => {
  console.log(result);
});
