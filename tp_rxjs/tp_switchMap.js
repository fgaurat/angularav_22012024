
const { Observable, of } = require('rxjs');
const { switchMap, delay, tap } = require('rxjs/operators');


/*
switchMap
Annulation et Remplacement : Lorsqu'une nouvelle valeur est émise par l'Observable source, switchMap annule la souscription à l'Observable interne actuel et souscrit immédiatement à un nouvel Observable basé sur la nouvelle valeur.
Utilisation Typique : Idéal pour des situations où vous êtes uniquement intéressé par la réponse de la dernière émission. Par exemple, dans les recherches en temps réel, où seule la dernière requête de l'utilisateur est pertinente.
Comportement : Si la source émet une valeur alors qu'une souscription interne est en cours, cette souscription est annulée et remplacée par une nouvelle souscription basée sur la dernière valeur émise.
*/

// switchMap remplace la souscription interne à chaque nouvelle émission,


function simulateApiSearch(query) {
  console.log(`Recherche API pour: ${query}`);
  return of(`Résultat pour '${query}'`).pipe(
    delay(1000),
    tap(() => console.log(`Recherche terminée pour: ${query}`))
  );
}

// Création d'un Observable pour simuler des changements de saisie utilisateur
const simulateInputChanges = new Observable(subscriber => {
  setTimeout(() => {
    subscriber.next('chat');
    subscriber.complete();
  }, 500);

  setTimeout(() => {
    subscriber.next('chien');
  }, 1000);
});

simulateInputChanges.pipe(
  switchMap(query => simulateApiSearch(query))
).subscribe(result => {
  console.log(result);
});
