import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuArchiveComponent } from './menu-archive.component';

describe('MenuArchiveComponent', () => {
  let component: MenuArchiveComponent;
  let fixture: ComponentFixture<MenuArchiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuArchiveComponent]
    });
    fixture = TestBed.createComponent(MenuArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
