import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Hero} from './hero'
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';




@Component({
    selector: 'my-heroes',
    //template: ``,
    templateUrl: 'app/heroes.component.html',
    //styles:[``],
    styleUrls: ['app/heroes.component.css'],
    directives: [HeroDetailComponent],
    //providers: [HeroService] // added this in the new app.component.ts as that becomes the top level

               
})



export class HeroesComponent implements OnInit {
    public title = 'Tour of Heroes';
    public heroes ;
    selectedHero: Hero;
    
    onSelect(hero: Hero) { this.selectedHero = hero; }
    
    constructor(
        private _router: Router,
        private _heroService: HeroService) {}
    
    //equivalent to function(heroes){this.heroes = heroes}
    getHeroes(){
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    
    ngOnInit(){
        this.getHeroes();
    }
    
   gotoDetail() {
       this._router.navigate(['HeroDetail', { id: this.selectedHero.id }])
   }
    
    
}


