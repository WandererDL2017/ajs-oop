import Character from './character';

export default class Daemon extends Character {
  constructor(name, type) {
    super(name, type);
    if (type !== 'Daemon') {
      throw new Error('некорректное значение type');
    }
    super.attack = 10;
    super.defence = 40;
  }
}
