import { TestBed } from '@angular/core/testing';
import { PokemonService } from './pokemon.service';
describe('PokemonService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(PokemonService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=pokemon.service.spec.js.map