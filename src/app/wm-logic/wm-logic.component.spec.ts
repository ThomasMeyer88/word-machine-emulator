import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WmLogicComponent } from './wm-logic.component';

describe('WmLogicComponent', () => {
  let component: WmLogicComponent;
  let fixture: ComponentFixture<WmLogicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WmLogicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WmLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should execute 23 DUP 4 POP 5 DUP + DUP + - and return 23, 3', ()=> {
    component.input('23 DUP 4 POP 5 DUP + DUP + -');
    expect(component.stack.length === 2).toBeTruthy();
    expect(JSON.stringify(component.stack) === JSON.stringify([23, 3])).toBeTruthy();
  });
  
  it('should throw error for 5 6 + -', ()=> {
    expect(
      function() {
        component.processCommand(component.input('5 6 + -'))
      }
      ).toThrow(new Error('Can not be parsed'));
  });
});
