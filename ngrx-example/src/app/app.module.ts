import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DBModule } from '@ngrx/db';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MaterialModule } from '@angular/material';

import { ComponentsModule } from './components';
import { BookEffects } from './effects/book';
import { CollectionEffects } from './effects/collection';
import { BookExistsGuard } from './guards/book-exists';

import { AppComponent } from './containers/app';
import { FindBookPageComponent } from './containers/find-book-page';
import { ViewBookPageComponent } from './containers/view-book-page';
import { SelectedBookPageComponent } from './containers/selected-book-page';
import { CollectionPageComponent } from './containers/collection-page';
import { NotFoundPageComponent } from './containers/not-found-page';

import { GoogleBooksService } from './services/google-books';

import { routes } from './routes';
import { reducer } from './reducers';
import { schema } from './db';



@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    MaterialModule,
    ComponentsModule,
    RouterModule.forRoot(routes, { useHash: true }),
    StoreModule.provideStore(reducer),
    RouterStoreModule.connectRouter(),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(BookEffects),
    EffectsModule.run(CollectionEffects),
    DBModule.provideDB(schema),
  ],
  declarations: [
    AppComponent,
    FindBookPageComponent,
    SelectedBookPageComponent,
    ViewBookPageComponent,
    CollectionPageComponent,
    NotFoundPageComponent
  ],
  providers: [
    BookExistsGuard,
    GoogleBooksService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
