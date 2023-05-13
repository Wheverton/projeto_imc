import { Component } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  peso! :number;
  altura! :number;
  nome! :string;
  email! :string;
  resultado :number = 0;
  condicao! :string;
  comentario! :string;

  calcularImc(): void{
    this.resultado = this.peso/this.altura**2;
    this.verificarCondicao();
    this.gerarComentario();
  }
  verificarCondicao(): void{
    if (this.resultado < 18.5){
      this.condicao = 'Magreza';
    }
    if ((this.resultado >= 18.5) && (this.resultado <= 24.9)) {
      this.condicao = 'Peso Ideal';
    }
    if ((this.resultado >= 25) && (this.resultado <= 29.9)) {
      this.condicao = 'Sobrepeso';
    }
    if ((this.resultado >= 30) && (this.resultado <= 34.9)) {
      this.condicao = 'Obesidade grau I';
    }
    if ((this.resultado >= 35) && (this.resultado <= 39.9)) {
      this.condicao = 'Obesidade grau II';
    }
    if (this.verificarObesidadeMorbida()) {
      this.condicao = 'Obesidade mórbida';
    }
    if (this.resultado >= 50) {
      this.condicao = 'Superobesos mórbidos';
    }
  }
  gerarComentario(): void {
    if (this.resultado < 18.5){
      this.comentario = 'Ta na capa do Batma em. Vamos aumentar alimentação';
    }
    if ((this.resultado >= 18.5) && (this.resultado <= 24.9)) {
      this.comentario = 'Mantenha o ritmo';
    }
    if ((this.resultado >= 25) && (this.resultado <= 29.9)) {
      this.comentario = 'Feche a boca um pounco em.';
    }
    if ((this.resultado >= 30) && (this.resultado <= 34.9)) {
      this.comentario = 'Tranque a boca com cadeado';
    }
    if ((this.resultado >= 35) && (this.resultado <= 39.9)) {
      this.comentario = 'Tranque a boca com cadeado e jogue a chave fora';
    }
    if (this.verificarObesidadeMorbida()) {
      this.comentario = 'O sinal esta mais do que vermelho para você';
    }
    if (this.resultado >= 50) {
      this.comentario = 'Estais prestes a conhecer Jesus';
    }
  }

  verificarObesidadeMorbida(): boolean {
    return (this.resultado >= 40) && (this.resultado <= 49.9);
  }
}

