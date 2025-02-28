import { Component } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { sampleJsonInput1 } from '../json-formatter/sample-json';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-json-beautifier',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './json-beautifier.component.html',
  styleUrl: './json-beautifier.component.less'
})
export class JsonBeautifierComponent {
 jsonInput1: string = '';
  comparisonResult: string = '';
  highlightedJson1: SafeHtml = '';

  constructor(private sanitizer: DomSanitizer) {}

  addSample() {
    this.jsonInput1 = JSON.stringify(sampleJsonInput1, null, 4);
  }

  beautifyJson() {
    try {
      this.highlightedJson1 = JSON.stringify(JSON.parse(this.jsonInput1), null, 4);
    } catch (e) {
      this.jsonInput1 = 'Invalid JSON';
    }
  }

  copyToClipboardOutput1() {
    navigator.clipboard.writeText(this.jsonInput1).then(() => alert('Copied!'));
  }

  clearAll() {
    this.jsonInput1 = '';
    this.comparisonResult= '';
    this.highlightedJson1= '';
  }

  copyToClipboardOutput2() {
    navigator.clipboard.writeText(this.highlightedJson1+'').then(() => alert('Copied!'));
  }


}
