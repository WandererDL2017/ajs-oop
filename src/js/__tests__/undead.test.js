/* eslint-disable */
import Undead from '../undead';

test('Создан Undead', () => {
  const undead = new Undead('Имя', 'Undead');
  const expected = {
    name: 'Имя', 
    type: 'Undead', 
    health: 100, 
    level: 1, 
    attack: 25, 
    defence: 25
  };
  expect(undead).toEqual(expected);
});

test('неверно созданный персонаж', () => {
  function setBadType() {
    return new Undead('Маг', 'Zombie');
  }
  expect(setBadType).toThrowError(new Error('некорректное значение type'));
});

test('Повышение Уровня', () => {
  const undead = new Undead('Имя', 'Undead');
  undead.levelUp();
  const expected = {
    name: 'Имя', 
    type: 'Undead', 
    health: 200, 
    level: 2, 
    attack: 45, 
    defence: 45
  };
  expect(undead).toEqual(expected);
});

test('Персонаж мертв', () => {
  const undead = new Undead('Имя', 'Undead');
  function died() {
    undead.health = 0;
    return undead.levelUp();
  }
  expect(died).toThrowError(new Error('нельзя повысить левел умершего'));
});

test('Персонаж получает урон', () => {
  const undead = new Undead('Имя', 'Undead');
  undead.damage(10);
  const expected = {
    name: 'Имя', 
    type: 'Undead', 
    health: 92.5, 
    level: 1, 
    attack: 25, 
    defence: 25
  };
  expect(undead).toEqual(expected);
});

test('Персонаж мертв и не может получить урон', () => {
  const undead = new Undead('Имя', 'Undead');
  function died() {
    undead.health = 0;
    return undead.damage(10);
  }
  expect(died).toThrowError(new Error('Персонаж не может получить урон'));
});