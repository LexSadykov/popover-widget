export default class Popover {
    constructor(button, title, text) {
      this.button = button;
      this.title = title;
      this.text = text;
      this.popover = null;
    }
  
    createPopover() {
      const popover = document.createElement('div');
      popover.classList.add('popover');
  
      const titleEl = document.createElement('div');
      titleEl.classList.add('popover-title');
      titleEl.textContent = this.title;
  
      const textEl = document.createElement('div');
      textEl.classList.add('popover-text');
      textEl.textContent = this.text;
  
      popover.appendChild(titleEl);
      popover.appendChild(textEl);
  
      document.body.appendChild(popover);
      this.popover = popover;
    }
  
    showPopover() {
      if (this.popover) {
        this.popover.remove();
        this.popover = null;
        return;
      }
  
      this.createPopover();
      const { top, left, width } = this.button.getBoundingClientRect();
      this.popover.style.top = `${top - this.popover.offsetHeight}px`;
      this.popover.style.left = `${left + width / 2 - this.popover.offsetWidth / 2}px`;
    }
}