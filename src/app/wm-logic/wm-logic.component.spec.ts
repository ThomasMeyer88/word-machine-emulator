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

  it('should add a 1 to stack', () => {
    component.input([1]);
    expect(component.stack.length === 1).toBeTruthy();
    expect(component.stack[0] === 1).toBeTruthy;
  });

  it('should add a 1, 2 to stack', () => {
    component.input([1, 2]);
    expect(component.stack.length === 2).toBeTruthy();
    expect(component.stack[0] === 1).toBeTruthy;
    expect(component.stack[1] === 2).toBeTruthy;
  });

  it('should add 1 and duplicate it', ()=> {
    component.input([1, 'DUP']);
    console.log(component.stack);
    expect(component.stack.length === 2).toBeTruthy();
    expect(component.stack[0] === 1).toBeTruthy();
    expect(component.stack[1] === 1).toBeTruthy();
  });
});
