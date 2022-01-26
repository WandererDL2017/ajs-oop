/* eslint-disable */
import Zombie from '../zombie';

test('Создан Zombie', () => {
  const zombie = new Zombie('Имя', 'Zombie');
  const expected = {
    name: 'Имя', 
    type: 'Zombie', 
    health: 100, 
    level: 1, 
    attack: 40, 
    defence: 10
  };
  expect(zombie).toEqual(expected);
});

test('неверно созданный персонаж', () => {
  function setBadType() {
    return new Zombie('Маг', 'Magician');
  }
  expect(setBadType).toThrowError(new Error('некорректное значение type'));
});

test('Повышение Уровня', () => {
  const zombie = new Zombie('Имя', 'Zombie');
  zombie.levelUp();
  const expected = {
    name: 'Имя', 
    type: 'Zombie', 
    health: 200, 
    level: 2, 
    attack: 60, 
    defence: 30
  };
  expect(zombie).toEqual(expected);
});

test('Персонаж мертв', () => {
  const zombie = new Zombie('Имя', 'Zombie');
  function died() {
    zombie.health = 0;
    return zombie.levelUp();
  }
  expect(died).toThrowError(new Error('нельзя повысить левел умершего'));
});

test('Персонаж получает урон', () => {
  const zombie = new Zombie('Имя', 'Zombie');
  zombie.damage(10);
  const expected = {
    name: 'Имя', 
    type: 'Zombie', 
    health: 91, 
    level: 1, 
    attack: 40, 
    defence: 10
  };
  expect(zombie).toEqual(expected);
});

test('Персонаж мертв и не может получить урон', () => {
  const zombie = new Zombie('Имя', 'Zombie');
  function died() {
    zombie.health = 0;
    return zombie.damage(10);
  }
  expect(died).toThrowError(new Error('Персонаж не может получить урон'));
});