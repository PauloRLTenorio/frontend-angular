import { Component, OnInit } from '@angular/core';
import { ItemService } from './services/item.service';

@Component({
  selector: 'app-root',
  template: `<h1>Testando o ItemService</h1>`, // Temporário, pode ser removido depois
})
export class AppComponent implements OnInit {
  constructor(private readonly itemService: ItemService) {}

  ngOnInit(): void {
    // Testando a requisição diretamente no console do navegador
    this.itemService.getItems().subscribe({
      next: (data) => {
        console.log('✅ Dados recebidos da API:', data);
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
