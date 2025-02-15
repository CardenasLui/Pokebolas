import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeapiService } from '../pokeapi.service';
import { IonicModule } from '@ionic/angular';// estos dos los agregue para que funcione angular en los que no son home 
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-detail-pokemon',
  templateUrl: 'detail-pokemon.component.html',
  imports: [IonicModule, CommonModule],
  styleUrls: ['detail-pokemon.component.scss'],
})
export class DetailPokemon implements OnInit {

  pokemon: any;

  constructor(private route: ActivatedRoute, private pokeService: PokeapiService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id'); // Obtiene el ID desde la URL

    if (id) {
      this.pokeService.getPokemonById(id).subscribe(data => {
        this.pokemon = data;
      });
    }
  }
}