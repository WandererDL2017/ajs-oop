import Character from './character';

export default class Swordsman extends Character {
  constructor(name, type) {
    super(name, type);
    if (type !== 'Swordsman') {
      throw new Error('некорректное значение type');
    }
    super.attack = 40;
    super.defence = 10;
  }
}
