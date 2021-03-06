import { Component, OnInit } from '@angular/core';
import {StorageService} from "../services/storage/storage.service";
import {Language} from "../app.interfaces";

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.css']
})

export class SettingsPageComponent implements OnInit {

  languages: Language[] = [
    {display: 'Английский', value: 'ru-en'},
    {display: 'Немецкий', value: 'ru-de'},
    {display: 'Французкий', value: 'ru-fr'},
    {display: 'Итальянский', value: 'ru-it'},
    {display: 'Испанский', value: 'ru-es'},
  ];

  levels = [
    5,
    10,
    20,
    50,
    100
  ];

  selectedLang: Language;
  selectedLevel: number;

  constructor(private storage: StorageService) { }

  ngOnInit() {
    this.setInitialState();
  }

  setInitialState() {
    this.selectedLang = this.storage.getLang();
    this.selectedLevel = this.storage.getLevel();
  }

  onChangeLangSelect(eventValue: string) {
    this.selectedLang = this.languages.find(({value}) => value === eventValue)
  }

  onAgreeClick() {
    this.storage.setLang(this.selectedLang);
    this.storage.setLevel(this.selectedLevel)
  }

}
