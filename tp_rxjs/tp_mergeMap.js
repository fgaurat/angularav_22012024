const { Observable, of } = require('rxjs');
const { mergeMap, delay, tap } = require('rxjs/operators');

// Fonction pour simuler une recherche API
function simulateApiSearch(query) {
  console.log(`Début de la recherche API pour: ${query}`);
  return of(`Résultat pour '${query}'`).pipe(
    delay(1000), // Délai pour simuler le temps de traitement
    tap(() => console.log(`Recherche terminée pour: ${query}`))
  );
}

// Création d'un Observable pour simuler des changements de saisie utilisateur
const simulateInputChanges = new Observable(subscriber => {
  setTimeout(() => {
    subscriber.next('chat');
  }, 500);

  setTimeout(() => {
    subscriber.next('chien'); // Cette entrée sera également traitée
  }, 1000);

  setTimeout(() => {
    subscriber.next('oiseau'); // Cette entrée sera également traitée
  }, 1500);
});

simulateInputChanges.pipe(
  mergeMap(query => simulateApiSearch(query))
).subscribe(result => {
  console.log(result);
});
