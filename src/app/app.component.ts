import { Component, computed, effect, inject, OnInit, signal } from '@angular/core';
import { TestService } from './service/test.service';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  title = 'client';

  counter = signal<number>(0)
  private testService = inject(TestService)

  constructor(){}

  x = signal<number>(3)
  y = signal<number>(5)
  
  z = computed(() => this.x() + this.y())

  ngOnInit(): void {
    
      this.x.set(10)

  }
} 
