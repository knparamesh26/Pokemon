import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class PokemonIndexController extends Controller {
    // queryParams = ['search'];

    queryParams = {
        category: {
            refreshModel: true
        },
        sort: {
            refreshModel: true
        }
    };

    @tracked search = null;
    @tracked sort = false;

    @tracked model;

    @action
    toggleProp(){
        this.sort = !this.sort;
    }

    compare( a , b ){
        if( a.name < b.name ){
            return -1;
        }
        if( a.name > b.name ){
            return 1;
        }
        return 0;
    }

    get resultArray(){
        if(this.search && this.sort){
            return this.model.filter(a => a.name.includes(this.search.toLowerCase())).sort(this.compare);
        }
        else if(this.search && !this.sort){
            return this.model.filter(a => a.name.includes(this.search.toLowerCase()))
        }
        else if(this.sort){
            return this.model.sort(this.compare);
        }
        else{
            return this.model;
        }
    }
}
