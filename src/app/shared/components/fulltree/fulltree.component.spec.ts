import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FulltreeComponent } from './fulltree.component';

describe('FulltreeComponent', () => {
  let component: FulltreeComponent;
  let fixture: ComponentFixture<FulltreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FulltreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FulltreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
