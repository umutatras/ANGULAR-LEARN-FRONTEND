import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminArticleInsertComponent } from './admin-article-insert.component';

describe('AdminArticleInsertComponent', () => {
  let component: AdminArticleInsertComponent;
  let fixture: ComponentFixture<AdminArticleInsertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminArticleInsertComponent]
    });
    fixture = TestBed.createComponent(AdminArticleInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
