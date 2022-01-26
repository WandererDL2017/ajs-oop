/* eslint-disable */
import Daemon from '../daemon';

test('\'Имя\' недолжно быть меньше 2 и больше 10 символов', () => {
  function checkLengthName() {
    return new Daemon('Очень много', 'Daemon');
  }
  expect(checkLengthName).toThrowError(new Error('Имя должно быть не менее 2 символов и не более 10'));
});

test('\'Имя\' нестрока', () => {
  function setNumberToName() {
    return new Daemon(7, 'Daemon');
  }
  expect(setNumberToName).toThrowError(new Error('Имя должно быть строкой'));
});

test('\'Тип\' нестрока', () => {
  function setNumberToType() {
    return new Daemon('Имя', 5);
  }
  expect(setNumberToType).toThrowError(new Error('Тип должн быть строкой'));
});

test('Создан Daemon', () => {
  const daemon = new Daemon('Имя', 'Daemon');
  const expected = {
    name: 'Имя', 
    type: 'Daemon', 
    health: 100, 
    level: 1, 
    attack: 10, 
    defence: 40
  };
  expect(daemon).toEqual(expected);
});

test('неверно созданный персонаж', () => {
  function setBadType() {
    return new Daemon('Маг', 'Magician');
  }
  expect(setBadType).toThrowError(new Error('некорректное значение type'));
});

test('Повышение Уровня', () => {
  const daemon = new Daemon('Имя', 'Daemon');
  daemon.levelUp();
  const expected = {
    name: 'Имя', 
    type: 'Daemon', 
    health: 200, 
    level: 2, 
    attack: 30, 
    defence: 60
  };
  expect(daemon).toEqual(expected);
});

test('Персонаж мертв', () => {
  const daemon = new Daemon('Имя', 'Daemon');
  function died() {
    daemon.health = 0;
    return daemon.levelUp();
  }
  expect(died).toThrowError(new Error('нельзя повысить левел умершего'));
});

test('Персонаж получает урон', () => {
  const daemon = new Daemon('Имя', 'Daemon');
  daemon.damage(10);
  const expected = {
    name: 'Имя', 
    type: 'Daemon', 
    health: 94, 
    level: 1, 
    attack: 10, 
    defence: 40
  };
  expect(daemon).toEqual(expected);
});

test('Персонаж мертв и не может получить урон', () => {
  const daemon = new Daemon('Имя', 'Daemon');
  function died() {
    daemon.health = 0;
    return daemon.damage(10);
  }
  expect(died).toThrowError(new Error('Персонаж не может получить урон'));
});