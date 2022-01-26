/* eslint-disable */
import Bowerman from '../bowerman';

test('\'Имя\' недолжно быть меньше 2 и больше 10 символов', () => {
  function checkLengthName() {
    return new Bowerman('Очень много', 'Bowerman');
  }
  expect(checkLengthName).toThrowError(new Error('Имя должно быть не менее 2 символов и не более 10'));
});

test('\'Имя\' нестрока', () => {
  function setNumberToName() {
    return new Bowerman(7, 'Bowerman');
  }
  expect(setNumberToName).toThrowError(new Error('Имя должно быть строкой'));
});

test('\'Тип\' нестрока', () => {
  function setNumberToType() {
    return new Bowerman('Имя', 5);
  }
  expect(setNumberToType).toThrowError(new Error('Тип должн быть строкой'));
});

test('Создан Bowerman', () => {
  const bowerman = new Bowerman('Имя', 'Bowerman');
  const expected = {
    name: 'Имя', 
    type: 'Bowerman', 
    health: 100, 
    level: 1, 
    attack: 25, 
    defence: 25
  };
  expect(bowerman).toEqual(expected);
});

test('неверно созданный персонаж', () => {
  function setBadType() {
    return new Bowerman('Маг', 'Magician');
  }
  expect(setBadType).toThrowError(new Error('некорректное значение type'));
});

test('Повышение Уровня', () => {
  const bowerman = new Bowerman('Имя', 'Bowerman');
  bowerman.levelUp();
  const expected = {
    name: 'Имя', 
    type: 'Bowerman', 
    health: 200, 
    level: 2, 
    attack: 45, 
    defence: 45
  };
  expect(bowerman).toEqual(expected);
});

test('Персонаж мертв', () => {
  const bowerman = new Bowerman('Имя', 'Bowerman');
  function died() {
    bowerman.health = 0;
    return bowerman.levelUp();
  }
  expect(died).toThrowError(new Error('нельзя повысить левел умершего'));
});

test('Персонаж получает урон', () => {
  const bowerman = new Bowerman('Имя', 'Bowerman');
  bowerman.damage(10);
  const expected = {
    name: 'Имя', 
    type: 'Bowerman', 
    health: 92.5, 
    level: 1, 
    attack: 25, 
    defence: 25
  };
  expect(bowerman).toEqual(expected);
});

test('Персонаж мертв и не может получить урон', () => {
  const bowerman = new Bowerman('Имя', 'Bowerman');
  function died() {
    bowerman.health = 0;
    return bowerman.damage(10);
  }
  expect(died).toThrowError(new Error('Персонаж не может получить урон'));
});