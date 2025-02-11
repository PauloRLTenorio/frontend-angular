import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemService } from './services/item.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule], // Suporte para *ngFor
  templateUrl: './app.component.html',
  standalone: true,
})
export class AppComponent implements OnInit {
  title = 'CRUD_Angular';
  items: any[] = [];
  constructor(private readonly itemService: ItemService) {}

  ngOnInit(): void {
    this.itemService.getItems().subscribe({
      next: (data) => {
        console.log('✅ Dados recebidos da API:', data);
        this.items = data;
      },
      error: (error) => {
        console.error('❌ Erro na requisição:', error);
      },
      complete: () => {
        console.log('✔ Requisição finalizada com sucesso.');
      }
    });
  }
}
