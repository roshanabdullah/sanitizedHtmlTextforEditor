import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Pipe({
  name: 'sanitized'
})
export class SanitizedPipe implements PipeTransform {

  constructor(private sanitized: DomSanitizer) {}

  transform(value: any): any {
      //console.log(this.sanitized.bypassSecurityTrustHtml(value))
      //return this.sanitized.bypassSecurityTrustHtml(value)
      const htmlElement=new DOMParser().parseFromString(value, `text/html`)
      const htmlText=htmlElement.body.outerText
      const sanitizedHtmlText=this.sanitized.bypassSecurityTrustHtml(htmlText)
      return sanitizedHtmlText
  }

}


//for html file
 <div [outerHTML]="message.message | sanitized"></div>
<quill-editor [(ngModel)]="text" customToolbarPosition="bottom"  #editor placeholder="Type your message..."  [styles]="toolbarStyle">
  
  
  //ts file
@ViewChild('editor', { static: false }) editor!: QuillEditorComponent;
