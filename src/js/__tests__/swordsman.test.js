/* eslint-disable */
import Swordsman from '../swordsman';

test('Создан Swordsman', () => {
  const swordsman = new Swordsman('Имя', 'Swordsman');
  const expected = {
    name: 'Имя', 
    type: 'Swordsman', 
    health: 100, 
    level: 1, 
    attack: 40, 
    defence: 10
  };
  expect(swordsman).toEqual(expected);
});

test('неверно созданный персонаж', () => {
  function setBadType() {
    return new Swordsman('Маг', 'Daemon');
  }
  expect(setBadType).toThrowError(new Error('некорректное значение type'));
});

test('Повышение Уровня', () => {
  const swordsman = new Swordsman('Имя', 'Swordsman');
  swordsman.levelUp();
  const expected = {
    name: 'Имя', 
    type: 'Swordsman', 
    health: 200, 
    level: 2, 
    attack: 60, 
    defence: 30
  };
  expect(swordsman).toEqual(expected);
});

test('Персонаж мертв', () => {
  const swordsman = new Swordsman('Имя', 'Swordsman');
  function died() {
    swordsman.health = 0;
    return swordsman.levelUp();
  }
  expect(died).toThrowError(new Error('нельзя повысить левел умершего'));
});

test('Персонаж получает урон', () => {
  const swordsman = new Swordsman('Имя', 'Swordsman');
  swordsman.damage(10);
  const expected = {
    name: 'Имя', 
    type: 'Swordsman', 
    health: 91, 
    level: 1, 
    attack: 40, 
    defence: 10
  };
  expect(swordsman).toEqual(expected);
});

test('Персонаж мертв и не может получить урон', () => {
  const swordsman = new Swordsman('Имя', 'Swordsman');
  function died() {
    swordsman.health = 0;
    return swordsman.damage(10);
  }
  expect(died).toThrowError(new Error('Персонаж не может получить урон'));
});