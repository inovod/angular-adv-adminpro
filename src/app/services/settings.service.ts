import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private  linkThem =  document.querySelector('#theme');
  constructor() {
    const url  = localStorage.getItem('theme') || `./assets/css/colors/red-dark.css`;
    this.linkThem.setAttribute('href' , url);
  }
  // tslint:disable-next-line:typedef
  changeTheme(theme: string) {
    const url = `./assets/css/colors/${ theme }.css`;
    this.linkThem.setAttribute('href' , url);
    localStorage.setItem('theme', url);
    this.chekCurrentTheme();
  }
  // tslint:disable-next-line:typedef
  chekCurrentTheme() {
    const links = document.querySelectorAll('.selector');
    links.forEach( elemt => {
        const btnTheme = elemt.getAttribute('data-theme');
        const btnThemeUrl = `./assets/css/colors/${ btnTheme }.css`;
        const btnCurrentThemUrl = this.linkThem.getAttribute('href');
        if ( btnThemeUrl === btnCurrentThemUrl){
          elemt.classList.add('working');
        }
        else{
          elemt.classList.remove('working');
        }
    });
  }
}
