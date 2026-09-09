/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 02 · EXERCICE 20 · NIVEAU 3 : DÉFI (AVANCÉS)
 * CHASSEUR DE NOMBRES D'ARMSTRONG
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Un nombre d'Armstrong à 3 chiffres est égal à la somme des cubes de ses chiffres (ex: 153 = 1³ + 5³ + 3³). Utilisez une boucle allant de 100 à 999 pour trouver et afficher TOUS les nombres d'Armstrong.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-20
 * ▶️ Commande : node day02/exercices/exercice-20.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
for (let i = 100; i <= 999; i++){
    let num = String(i);

    let num1 = Number(num[0]);
    let num2 = Number(num[1]);
    let num3 = Number(num[2]);

    let sum = (num1num1num1) + (num2num2num2) + (num3num3num3);

    if (sum == i) {
        console.log(i);

    }
}

