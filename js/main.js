const km = parseInt(prompt("Quanti km vuoi percorrere?"));
const age = parseInt(prompt("Quanti anni hai?"));
const costoKm = .21;
const costoKmTotal = km * .21;

console.log(costoKmTotal);
console.log(age);
if (age < 18) {
    const costoTotal = costoKmTotal * .80;
    let num = costoTotal.toFixed(2);
    paragrafo.innerHTML = `Costo biglietto, con l'aggiunta del 20% di sconto: <strong> ${num}Є</strong>`;
} else if (age >= 65) {
    const costoTotal = costoKmTotal * .60;
    let num = costoTotal.toFixed(2);
    paragrafo.innerHTML = `Costo biglietto, con l'aggiunta del 40% di sconto: <strong>${num}Є</strong>`
} else {
    let num = costoKmTotal.toFixed(2);
    paragrafo.innerHTML = `Costo biglietto: <strong>${num}Є</strong>`
}