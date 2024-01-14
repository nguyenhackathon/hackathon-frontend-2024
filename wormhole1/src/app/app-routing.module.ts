import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlatformComponent } from './platform/platform.component';
import { LoginComponent } from './login/login.component';
import { PlatformLoginComponent } from './platform-login/platform-login.component';
import { SchemaShowingComponent } from './schema-showing/schema-showing.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'platform-config', component: PlatformComponent },
  { path: 'snowflake-login', component: PlatformLoginComponent },
  { path: 'schema-showing', component: SchemaShowingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }