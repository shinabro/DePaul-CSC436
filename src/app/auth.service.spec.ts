import { TestBed } from '@angular/core/testing';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import firebase from 'firebase/app'

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [AngularFireAuthModule, RouterTestingModule, FormsModule]
    });
    service = TestBed.inject(AuthService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
