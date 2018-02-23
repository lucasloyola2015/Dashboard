import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaRemitosComponent } from './tabla-remitos.component';

describe('TablaRemitosComponent', () => {
  let component: TablaRemitosComponent;
  let fixture: ComponentFixture<TablaRemitosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaRemitosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaRemitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
