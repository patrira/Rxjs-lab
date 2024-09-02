import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsTasksComponent } from './rxjs-tasks.component';

describe('RxjsTasksComponent', () => {
  let component: RxjsTasksComponent;
  let fixture: ComponentFixture<RxjsTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RxjsTasksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
