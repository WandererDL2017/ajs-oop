export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Имя должно быть не менее 2 символов и не более 10');
    }
    if (typeof name !== 'string') {
      throw new Error('Имя должно быть строкой');
    }
    if (typeof type !== 'string') {
      throw new Error('Тип должн быть строкой');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = 0;
    this.defence = 0;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('нельзя повысить левел умершего');
    }
    this.health += 100;
    this.level += 1;
    this.attack += 20;
    this.defence += 20;
  }

  damage(points) {
    if (this.health <= 0) {
      throw new Error('Персонаж не может получить урон');
    }
    this.health -= points * (1 - this.defence / 100);
  }
}
