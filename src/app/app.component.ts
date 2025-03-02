import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';
//import { DatabindingComponent } from './databinding/databinding.component';
//import { StructuralDirComponent } from './components/directive/structural-dir/structural-dir.component';


@Component({
  selector: 'app-root',
  imports: [AdminComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent {
  title = 'my-angular-app';
}
