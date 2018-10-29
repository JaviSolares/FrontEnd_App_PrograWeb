import { TestBed } from '@angular/core/testing';
import { MensajeService } from './mensaje.service';
describe('MensajeService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(MensajeService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=mensaje.service.spec.js.map