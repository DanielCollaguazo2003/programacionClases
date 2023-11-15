import { TestBed } from '@angular/core/testing';

import { ContactoFirebaseService } from './contacto-firebase.service';

describe('ContactoFirebaseService', () => {
  let service: ContactoFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactoFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
