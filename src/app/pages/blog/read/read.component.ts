import { Component } from '@angular/core';
import {MarkdownComponent} from 'ngx-markdown';

@Component({
    selector: 'app-read',
    templateUrl: './read.component.html',
    styleUrls: ['./read.component.scss'],
    standalone: true,
    imports: [
        MarkdownComponent
    ]
})
export class ReadComponent {
  data = `## Markdown __rulez__!
  ---

  ### Syntax highlight
  \`\`\`typescript
  const language = 'typescript';
  \`\`\`

  ### Lists
  1. Ordered list
  2. Another bullet point
     - Unordered list
     - Another unordered bullet

  ### Blockquote
  > Blockquote to the max`
}
