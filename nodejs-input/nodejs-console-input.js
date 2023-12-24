const readline = require('node:readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const kerdes = msg => new Promise(resolve =>
  readline.question(msg, response => resolve(response))
);

const osszegzes = (elsoSzam, masodikSzam) =>
  elsoSzam + masodikSzam
;

const szamolas = async () => {
  const elsoSzam = await kerdes("Az első szám: ");
  const masodikSzam = await kerdes("A második szám: ");
  console.log(osszegzes(+elsoSzam, +masodikSzam));
  readline.close();
};

szamolas();
