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
      { name: 'Scorch', description: 'Converte 10% do dano fisico em dano de fogo.'},
      { name: 'Venom', description: 'Converte 10% do dano fisico em dano de terra.'},
      { name: 'Frost', description: 'Converte 10% do dano fisico em dano de gelo.'},
      { name: 'Electrify', description: 'Converte 10% do dano fisico em dano de energia.'},
      { name: 'Reap', description: 'Converte 10% do dano fisico em dano de morte.'},

      { name: 'Lich Shroud', description: 'Reduz o dano de morte em 3%.'},
      { name: 'Snake Skin', description: 'Reduz o dano de morte em 3%.'},
      { name: 'Dragon Hide', description: 'Reduz o dano de fogo em 3%.'},
      { name: 'Quara Scale', description: 'Reduz o dano de gelo em 3%.'},
      { name: 'Cloud Fabric', description: 'Reduz o dano de energia em 3%.'},
      { name: 'Demon Presence', description: 'Reduz o dano de sagrado em 3%.'},

      { name: 'Swiftness', description: 'Aumenta a velocidade em 10.'},
      { name: 'Chop', description: 'Aumenta o Skill de Axe em 1.'},
      { name: 'Slash', description: 'Aumenta o Skill de Sword em 1.'},
      { name: 'Bash', description: 'Aumenta o Skill de Club em 1.'},
      { name: 'Precision', description: 'Aumenta o Skill de Distance em 1.'},
      { name: 'Blockade', description: 'Aumenta o Skill de Shield em 1.'},
      { name: 'Epiphany', description: 'Aumenta o Skill de Magic Level em 1.'},
      { name: 'Featherweight', description: 'Aumenta a capacidade total em 3%.'},
    ]

    this.tokenImbuements = [
      { name: 'Vampirism', description: 'Converte 5% do dano causado em vida (probabilidade de 100%).'},
      { name: 'Void', description: 'Converte 3% do dano causado em mana (probabilidade de 100%).'},
      { name: 'Strike', description: 'Aumenta o dano crítico em 15% (probabilidade de 10%).'},
    ]
  }

  calculateWithGoldToken () {

  }
}
