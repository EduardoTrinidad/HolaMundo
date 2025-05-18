test('mensaje de saludo', () => {
  const saludo = 'Hola mundo!\nEduardo Trinidad\nGrupo IDSW41\nMaestro Elizondo';
  expect(saludo).toMatch(/Hola mundo!/);
  expect(saludo).toMatch(/Eduardo Trinidad/);
  expect(saludo).toMatch(/IDSW41/);
  expect(saludo).toMatch(/Elizondo/);
});
