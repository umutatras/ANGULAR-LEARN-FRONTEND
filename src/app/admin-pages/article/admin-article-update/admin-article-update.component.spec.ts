import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminArticleUpdateComponent } from './admin-article-update.component';

describe('AdminArticleUpdateComponent', () => {
  let component: AdminArticleUpdateComponent;
  let fixture: ComponentFixture<AdminArticleUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminArticleUpdateComponent]
    });
    fixture = TestBed.createComponent(AdminArticleUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
