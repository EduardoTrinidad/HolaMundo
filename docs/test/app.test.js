const obtenerSaludo = require('../saludo'); // Corrige la ruta si es necesario

test('mensaje de saludo', () => {
  const saludo = obtenerSaludo();
  expect(saludo).toMatch(/Hola mundo!/);
  expect(saludo).toMatch(/Eduardo Trinidad/);
  expect(saludo).toMatch(/IDSW41/);
  expect(saludo).toMatch(/Elizondo/);
});
