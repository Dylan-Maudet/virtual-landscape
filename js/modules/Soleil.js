import { AbstractForm } from './AbstractForm.js';

/**
 * Dessine un Soleil
 */
export class Soleil extends AbstractForm {

  // you create new Rectangles by calling this as a function
  // these are the arguments you pass in
  // add default values to avoid errors on empty arguments
  constructor(
    x = 0,
    y = 0,
    width = 0,
    height = 0,
    fillColor = '',
    strokeColor = '',
    strokeWidth = 2,
    pesanteur = false,
    ordreConstruction = 100
  ) {
    super(x, y, width, height, fillColor, strokeColor, strokeWidth, pesanteur, ordreConstruction)
  }

  /**
   * Dessine la forme spécifique à cette classe
   * @param ctx contexte 2D du canvas
   */
  draw(ctx) {

    ctx.save()

    ctx.beginPath();
    ctx.rect(200, 75, 50, 0);
    ctx.moveTo(165, 75);
    ctx.fillStyle = '#FFD700'
    ctx.fill();

    ctx.restore()
  }

  /**
   * get array of forms
   * @return {[Soleil,...]}
   */
  static buildForms() {
    let widthCase = 100;
    let max = Math.floor(Math.random() * 5) + 3
    let forms = []
    for (let i = 0; i < max; i++) {
      forms.push(new Soleil(
        Math.floor(Math.random() * window.innerWidth),
        Math.floor(Math.random() * 400) + 10,
        Math.floor(Math.random() * (widthCase) + 20),
        Math.floor(Math.random() * (widthCase * 2) + 30),
        (i % 2 === 0) ? 'gold' : 'gray',
        'black',
        1,
        true
      ))
    }
    return forms
  }
}