const { Observable, of, combineLatest } = require('rxjs');
const { switchMap, delay, tap } = require('rxjs/operators');

// Fonction pour simuler une recherche API
function simulateApiSearch(query) {
    console.log(`Début de la recherche API pour: ${query}`);    
  return of(`Résultat pour '${query}'`).pipe(
    delay(1000), // Délai pour simuler le temps de traitement
    tap(() => console.log(`Recherche terminée pour: ${query}`))
  );
}

// Création de trois Observables pour simuler des changements de saisie utilisateur
const simulateInputChanges1 = new Observable(subscriber => {
  setTimeout(() => subscriber.next('chat'), 500);
  setTimeout(() => subscriber.next('singe'), 3000);
});
const simulateInputChanges2 = new Observable(subscriber => {
  setTimeout(() => subscriber.next('chien'), 1000);
});
const simulateInputChanges3 = new Observable(subscriber => {
  setTimeout(() => subscriber.next('oiseau'), 2000);
});

// Utilisation de combineLatest avec switchMap pour fusionner et résoudre les Observables
combineLatest([
  simulateInputChanges1.pipe(switchMap(query => simulateApiSearch(query))),
  simulateInputChanges2.pipe(switchMap(query => simulateApiSearch(query))),
  simulateInputChanges3.pipe(switchMap(query => simulateApiSearch(query)))
]).subscribe(results => {
  console.log('Derniers résultats combinés:', results);
});
