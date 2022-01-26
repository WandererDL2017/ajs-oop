import Character from './character';

export default class Zombie extends Character {
  constructor(name, type) {
    super(name, type);
    if (type !== 'Zombie') {
      throw new Error('некорректное значение type');
    }
    super.attack = 40;
    super.defence = 10;
  }
}
