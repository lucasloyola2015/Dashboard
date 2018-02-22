import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemitosComponent } from './remitos.component';

describe('RemitosComponent', () => {
  let component: RemitosComponent;
  let fixture: ComponentFixture<RemitosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemitosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
