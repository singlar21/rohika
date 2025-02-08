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
  jsonInput1: string = '';
  jsonInput2: string = '';
  comparisonResult: string = '';

  beautifyJson() {
    try {
      this.jsonInput1 = JSON.stringify(JSON.parse(this.jsonInput1), null, 4);
    } catch (e) {
      this.jsonInput1 = 'Invalid JSON';
    }

    try {
      this.jsonInput2 = JSON.stringify(JSON.parse(this.jsonInput2), null, 4);
    } catch (e) {
      this.jsonInput2 = 'Invalid JSON';
    }
  }

  compareJson() {
    try {
      const obj1 = JSON.parse(this.jsonInput1);
      const obj2 = JSON.parse(this.jsonInput2);
      this.comparisonResult = this.findDifferences(obj1, obj2);
    } catch (e) {
      this.comparisonResult = 'Invalid JSON input';
    }
  }

  findDifferences(obj1: any, obj2: any): string {
    const differences: string[] = [];

    function compareKeys(o1: any, o2: any, path: string = '') {
      for (const key in o1) {
        const fullPath = path ? `${path}.${key}` : key;
        if (!(key in o2)) {
          differences.push(`❌ Missing in JSON 2: ${fullPath}`);
        } else if (typeof o1[key] === 'object' && typeof o2[key] === 'object') {
          compareKeys(o1[key], o2[key], fullPath);
        } else if (o1[key] !== o2[key]) {
          differences.push(`🔄 Value mismatch: ${fullPath} (JSON 1: ${o1[key]}, JSON 2: ${o2[key]})`);
        }
      }

      for (const key in o2) {
        if (!(key in o1)) {
          const fullPath = path ? `${path}.${key}` : key;
          differences.push(`➕ Extra in JSON 2: ${fullPath}`);
        }
      }
    }

    compareKeys(obj1, obj2);
    return differences.length ? differences.join('\n') : '✅ JSONs are identical';
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.comparisonResult).then(() => alert('Copied!'));
  }
}
