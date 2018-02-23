import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRemitosComponent } from './add-remitos.component';

describe('AddRemitosComponent', () => {
  let component: AddRemitosComponent;
  let fixture: ComponentFixture<AddRemitosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRemitosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRemitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
