import { verificarAnio } from "../Services/autos/rules.js";

test("Return true when year is  an integer", () => {
    expect(verificarAnio(2020)).toBe(false);
  });

  test("Return false when year is not an integer", () => {
    expect(verificarAnio(2020)).toBe(true);
  });
  // puede colocar mas pruebas aqui. 