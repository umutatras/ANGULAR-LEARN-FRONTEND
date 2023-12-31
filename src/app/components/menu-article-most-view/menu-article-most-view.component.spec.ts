import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuArticleMostViewComponent } from './menu-article-most-view.component';

describe('MenuArticleMostViewComponent', () => {
  let component: MenuArticleMostViewComponent;
  let fixture: ComponentFixture<MenuArticleMostViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuArticleMostViewComponent]
    });
    fixture = TestBed.createComponent(MenuArticleMostViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
