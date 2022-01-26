import Character from './character';

export default class Bowerman extends Character {
  constructor(name, type) {
    super(name, type);
    if (type !== 'Bowerman') {
      throw new Error('некорректное значение type');
    }
    super.attack = 25;
    super.defence = 25;
  }
}
