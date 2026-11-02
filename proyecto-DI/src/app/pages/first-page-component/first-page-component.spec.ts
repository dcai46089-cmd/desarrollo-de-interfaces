import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FirstPageComponent } from './first-page-component';

describe('FirstPageComponent', () => {
  let component: FirstPageComponent;
  let fixture: ComponentFixture<FirstPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FirstPageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
