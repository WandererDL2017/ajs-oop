import Character from './character';

export default class Undead extends Character {
  constructor(name, type) {
    super(name, type);
    if (type !== 'Undead') {
      throw new Error('некорректное значение type');
    }
    this.attack = 25;
    this.defence = 25;
  }
}
