import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MainModule } from './main/main.module';
import { LibrosMockService } from './services/libros-mock.service';
import { LibrosService } from './services/libros.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MainModule,
    SharedModule
  ],
  providers: [
    LibrosMockService,
    LibrosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
