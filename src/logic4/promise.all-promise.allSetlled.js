const p1 = Promise.resolve("A");

const p2 = new Promise((resolve) => {
  setTimeout(() => resolve("B"), 1000);
});

const p3 = Promise.resolve("C");

async function ejemplo() {
  console.log("Inicio");

  const resultado1 = await Promise.all([p1, p2, p3]);
  const resultado2 = await Promise.allSettled([p1, p2, p3]);

  console.log(resultado1);
  console.log(resultado2);

  console.log("Fin");
}

ejemplo();

console.log("Programa sigue");