import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-json-formatter',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './json-formatter.component.html',
  styleUrl: './json-formatter.component.less'
})
export class JsonFormatterComponent {
  jsonInput: string = '';
  formattedJson: string = '';

  beautifyJson() {
    try {
      this.formattedJson = JSON.stringify(JSON.parse(this.jsonInput), null, 4);
    } catch (e) {
      this.formattedJson = 'Invalid JSON';
    }
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.formattedJson).then(() => alert('Copied!'));
  }
}
