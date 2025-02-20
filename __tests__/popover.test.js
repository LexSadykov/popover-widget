/**
 * @jest-environment jsdom
 */

import Popover from '../src/popover';

test('Popover создаётся и удаляется', () => {
  document.body.innerHTML = '<button id="test-btn">Нажми меня</button>';
  const button = document.getElementById('test-btn');
  const popover = new Popover(button, 'Тест', 'Тестовый popover');

  popover.showPopover();
  expect(document.querySelector('.popover')).not.toBeNull();

  popover.showPopover();
  expect(document.querySelector('.popover')).toBeNull();
});