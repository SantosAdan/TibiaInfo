import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  rashidCity: string = ''
  partyInfo: {
    playerLvl: string,
    minLvl: string,
    maxLvl: string
  }

  constructor(public navCtrl: NavController) {
    this.partyInfo = {
      playerLvl: '0',
      minLvl: '0',
      maxLvl: '0'
    }
  }

  ionViewDidEnter () {
    this.rashidCity = this.getRashidCity()
    
    
  }

  getRashidCity () {
    const today: Date = new Date()
    const dayOfWeek: number = today.getDay()

    switch (dayOfWeek) {
      case 0:
        return 'Carlin'
      case 1:
        return 'Svargrond'
      case 2:
        return 'Liberty Bay'
      case 3:
        return 'Port Hope'
      case 4:
        return 'Ankrahmun'
      case 5:
        return 'Darashia'
      case 6:
        return 'Darashia'
      case 7:
        return 'Edron'
    }
  }

  getPartyInfo () {
    this.partyInfo = {
      playerLvl: this.partyInfo.playerLvl,
      minLvl: JSON.stringify(Math.ceil(parseInt(this.partyInfo.playerLvl)*(2/3))),
      maxLvl: JSON.stringify(Math.ceil(parseInt(this.partyInfo.playerLvl)*(3/2)))
    }
  }

}
