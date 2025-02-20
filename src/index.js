import './style.css';
import Popover from './popover';

const button = document.getElementById('popover-btn');
const popover = new Popover(button, 'Заголовок Popover', 'Текст popover');

button.addEventListener('click', () => popover.showPopover());