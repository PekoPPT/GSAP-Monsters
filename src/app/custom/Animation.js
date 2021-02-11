import Monster from './Monster';

export default class Animation {
  constructor() {
    this.monsters = [];
  }

  async init() {
    const monsterElements = await document.querySelectorAll('.monster');

    for (const monster of monsterElements) {
      this.monsters.push(new Monster(monster));
    }
    const otherMonsters = this.monsters.slice();

    this.monsters.forEach((monster) => {
      monster.element.addEventListener('mouseenter', () => {
        monster.expand();
        otherMonsters.filter((monsterElement) => monsterElement !== monster).forEach((monster) => monster.contract());
      });

      document.getElementById('container').addEventListener('mouseout', () => { monster.reset(); });
    });
  }
}
