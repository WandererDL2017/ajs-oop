import Character from './character';

export default class Magician extends Character {
  constructor(name, type) {
    super(name, type);
    if (type !== 'Magician') {
      throw new Error('некорректное значение type');
    }
    super.attack = 10;
    super.defence = 40;
  }
}
