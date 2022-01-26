/* eslint-disable */
import Magician from '../magician';

test('\'Имя\' недолжно быть меньше 2 и больше 10 символов', () => {
  function checkLengthName() {
    return new Magician('Очень много', 'Magician');
  }
  expect(checkLengthName).toThrowError(new Error('Имя должно быть не менее 2 символов и не более 10'));
});

test('\'Имя\' нестрока', () => {
  function setNumberToName() {
    return new Magician(7, 'Magician');
  }
  expect(setNumberToName).toThrowError(new Error('Имя должно быть строкой'));
});

test('\'Тип\' нестрока', () => {
  function setNumberToType() {
    return new Magician('Имя', 5);
  }
  expect(setNumberToType).toThrowError(new Error('Тип должн быть строкой'));
});

test('Создан magician', () => {
  const magician = new Magician('Имя', 'Magician');
  const expected = {
    name: 'Имя', 
    type: 'Magician', 
    health: 100, 
    level: 1, 
    attack: 10, 
    defence: 40
  };
  expect(magician).toEqual(expected);
});

test('неверно созданный персонаж', () => {
  function setBadType() {
    return new Magician('Маг', 'Daemon');
  }
  expect(setBadType).toThrowError(new Error('некорректное значение type'));
});

test('Повышение Уровня', () => {
  const magician = new Magician('Имя', 'Magician');
  magician.levelUp();
  const expected = {
    name: 'Имя', 
    type: 'Magician', 
    health: 200, 
    level: 2, 
    attack: 30, 
    defence: 60
  };
  expect(magician).toEqual(expected);
});

test('Персонаж мертв', () => {
  const magician = new Magician('Имя', 'Magician');
  function died() {
    magician.health = 0;
    return magician.levelUp();
  }
  expect(died).toThrowError(new Error('нельзя повысить левел умершего'));
});

test('Персонаж получает урон', () => {
  const magician = new Magician('Имя', 'Magician');
  magician.damage(10);
  const expected = {
    name: 'Имя', 
    type: 'Magician', 
    health: 94, 
    level: 1, 
    attack: 10, 
    defence: 40
  };
  expect(magician).toEqual(expected);
});

test('Персонаж мертв и не может получить урон', () => {
  const magician = new Magician('Имя', 'Magician');
  function died() {
    magician.health = 0;
    return magician.damage(10);
  }
  expect(died).toThrowError(new Error('Персонаж не может получить урон'));
});