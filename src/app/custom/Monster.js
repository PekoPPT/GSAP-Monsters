import { gsap } from 'gsap/all';

export default class Monster {
  constructor(monsterElement) {
    this.element = monsterElement;
  }

  expand() {
    gsap.to(this.element, { id: 'expand', duration: 0.5, width: '80%' });
  }

  contract() {
    gsap.to(this.element, { id: 'contract', duration: 0.5, width: '4%' });
  }

  reset() {
    gsap.to(this.element, { id: 'reset', duration: 0.5, width: '16.6%' });
  }
}
