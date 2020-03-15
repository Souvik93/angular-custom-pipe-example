import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { StringLengthPipe } from './string-length.pipe';
import { CustomPipeExampleComponent } from './custom-pipe-example/custom-pipe-example.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, StringLengthPipe, CustomPipeExampleComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
