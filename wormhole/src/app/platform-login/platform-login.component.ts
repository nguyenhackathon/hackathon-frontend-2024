import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-platform-login',
  templateUrl: './platform-login.component.html',
  styleUrls: ['./platform-login.component.scss']
})
export class PlatformLoginComponent {
  constructor(private router: Router) {}
  
  showSchemas() {
    this.router.navigate(['/schema-showing'])
  }
}
