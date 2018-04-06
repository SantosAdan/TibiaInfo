import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  
  goldTokenPrice: number = null;
  generalImbuements: any[] = [];
  tokenImbuements: any[] = [];

  constructor(public navCtrl: NavController) {
    this.generalImbuements = [
      { 
        name: 'Scorch',
        description: 'Converte % do dano fisico em dano de fogo.',
        basic: 'fiery heart',
        intricate: 'green dragon scale',
        powerfull: 'demon horn'
      },
      { 
        name: 'Venom',
        description: 'Converte % do dano fisico em dano de terra.',
        basic: 'swamp grass',
        intricate: 'poisonous slime',
        powerfull: 'slime heart'
      },
      { 
        name: 'Frost', 
        description: 'Converte % do dano fisico em dano de gelo.',
        basic: 'frosty heart',
        intricate: 'seacrest hair',
        powerfull: 'polar bear paw'
      },
      { 
        name: 'Electrify', 
        description: 'Converte % do dano fisico em dano de energia.',
        basic: 'rorc feathers',
        intricate: 'peacock feather fan',
        powerfull: 'energy vein'
      },
      { 
        name: 'Reap', 
        description: 'Converte % do dano fisico em dano de morte.'
      },
      { 
        name: 'Lich Shroud', 
        description: 'Reduz uma % do dano de morte.'
      },
      { 
        name: 'Snake Skin', 
        description: 'Reduz uma % do dano de morte.'
      },
      { 
        name: 'Dragon Hide', 
        description: 'Reduz uma % do dano de fogo.'
      },
      { 
        name: 'Quara Scale', 
        description: 'Reduz uma % do dano de gelo.'
      },
      { 
        name: 'Cloud Fabric', 
        description: 'Reduz uma % do dano de energia.'
      },
      { 
        name: 'Demon Presence', 
        description: 'Reduz uma % do dano de sagrado.'
      },
      { 
        name: 'Swiftness', 
        description: 'Aumenta a velocidade.'
      },
      { 
        name: 'Chop', 
        description: 'Aumenta o Skill de Axe.'
      },
      { 
        name: 'Slash', 
        description: 'Aumenta o Skill de Sword.'
      },
      { 
        name: 'Bash', 
        description: 'Aumenta o Skill de Club.'
      },
      { 
        name: 'Precision', 
        description: 'Aumenta o Skill de Distance.'
      },
      { 
        name: 'Blockade', 
        description: 'Aumenta o Skill de Shield.'
      },
      { 
        name: 'Epiphany', 
        description: 'Aumenta o Skill de Magic Level.'
      },
      { 
        name: 'Featherweight', 
        description: 'Aumenta a capacidade total.'
      },
    ]

    this.tokenImbuements = [
      { 
        name: 'Vampirism', 
        description: 'Converte % do dano causado em vida (probabilidade de 100%).',
        basic: 'vampire teeth',
        intricate: 'bloody pincers',
        powerfull: 'piece of dead brain'
      },
      { 
        name: 'Void', 
        description: 'Converte % do dano causado em mana (probabilidade de 100%).',
        basic: 'rope belt',
        intricate: 'silencer claws',
        powerfull: 'some grimeleech wings'
      },
      { 
        name: 'Strike', 
        description: 'Aumenta a % do dano crítico (probabilidade de 10%).',
        basic: 'protective charm',
        intricate: 'sabretooth',
        powerfull: 'vexclaw talon'
      },
    ]
  }

  calculateWithGoldToken () {

  }
}
