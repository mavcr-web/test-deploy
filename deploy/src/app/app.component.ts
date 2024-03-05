import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'deploy';

  test: {} = {};

  _httpClient: HttpClient = inject(HttpClient);

  ngOnInit() {
    this._httpClient
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .subscribe((data) => {
        this.test = data;
      });
  }
}
