import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestablececlavePage } from './restablececlave.page';

describe('RestablececlavePage', () => {
  let component: RestablececlavePage;
  let fixture: ComponentFixture<RestablececlavePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RestablececlavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
