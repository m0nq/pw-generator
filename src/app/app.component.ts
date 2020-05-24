import { Component } from '@angular/core';

@Component({
  selector: 'cq-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length = 0;
  password = '';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  onButtonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '`~!@#$%^&*()_+-=[]\\{}|;\"\',./<>?';
    let validChars = '';
    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }
    let generatedPassword = '';
    for (let i = 0; i < this.length; i += 1) {
      generatedPassword += validChars[Math.floor(Math.random() * validChars.length)];
    }
    this.password = generatedPassword;
  }

  onLetterChange() {
    this.includeLetters = !this.includeLetters;
    console.log('letter checked ->', this.includeLetters);
  }

  onNumberChange() {
    this.includeNumbers = !this.includeNumbers;
    console.log('number checked ->', this.includeNumbers);
  }

  onSymbolChange() {
    this.includeSymbols = !this.includeSymbols;
    console.log('symbol checked ->', this.includeSymbols);
  }

  onLengthChange(value: string) {
    const parseNumber = parseInt(value, 10);
    if (!isNaN(parseNumber)) {
      this.length = parseNumber;
    }
  }
}
