import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentFeedsComponent } from './content-feeds.component';

describe('ContentFeedsComponent', () => {
  let component: ContentFeedsComponent;
  let fixture: ComponentFixture<ContentFeedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentFeedsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentFeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
