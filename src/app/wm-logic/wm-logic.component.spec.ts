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
    expect(component.stack.length === 2).toBeTruthy();
    expect(component.stack[0] === 1).toBeTruthy();
    expect(component.stack[1] === 1).toBeTruthy();
  });

  it('should add 1, 2, and duplicate 2', ()=> {
    component.input([1, 2, 'DUP']);
    const arr = [1, 2, 2];
    expect(component.stack.length === 3).toBeTruthy();
    expect(JSON.stringify(component.stack) === JSON.stringify(arr)).toBeTruthy();
  })

  it('should add 1 and pop 1', ()=> {
    component.input([1, 'POP']);
    expect(component.stack.length === 0).toBeTruthy();
    expect(JSON.stringify(component.stack) === JSON.stringify([])).toBeTruthy();
  });

  it('should add 1, 2 and pop 2', ()=> {
    component.input([1, 2, 'POP']);
    expect(component.stack.length === 1).toBeTruthy();
    expect(JSON.stringify(component.stack) === JSON.stringify([1])).toBeTruthy();
  });

  it('should execute 1 1 + and return 2', ()=> {
    component.input([1, 1, '+']);
    expect(component.stack.length === 1).toBeTruthy();
    expect(JSON.stringify(component.stack) === JSON.stringify([2])).toBeTruthy();
  });

  it('should execute 1 1 2 + and return 1, 3', ()=> {
    component.input([1, 1, 2, '+']);
    expect(component.stack.length === 2).toBeTruthy();
    expect(JSON.stringify(component.stack) === JSON.stringify([1, 3])).toBeTruthy();
  });

  it('should execute 1 1 - and return 0', ()=> {
    component.input([1, 1, '-']);
    expect(component.stack.length === 1).toBeTruthy();
    expect(JSON.stringify(component.stack) === JSON.stringify([0])).toBeTruthy();
  });

  it('should execute 1 2 1 - and return 1, 1', ()=> {
    component.input([1, 2, 1, '-']);
    expect(component.stack.length === 2).toBeTruthy();
    expect(JSON.stringify(component.stack) === JSON.stringify([1, 1])).toBeTruthy();
  });

  it('should execute 23 DUP 4 POP 5 DUP + DUP + - and return 23, 3', ()=> {
    component.input([23, 'DUP', 4, 'POP', 5, 'DUP', '+', 'DUP', '+', '-']);
    expect(component.stack.length === 2).toBeTruthy();
    expect(JSON.stringify(component.stack) === JSON.stringify([23, 3])).toBeTruthy();
  });
  
  it('should throw error for 5 6 + -', ()=> {
    expect(
      function() {
        component.processCommand(component.input([5, 6, '+', '-']))
      }
      ).toThrow(new Error('Can not be parsed'));
  });
});
