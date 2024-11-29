import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SwiperComponent } from './swiper.component';
import { CommonModule } from '@angular/common';  // Nếu sử dụng các directive phổ biến như ngIf, ngFor,...

describe('SwiperComponent', () => {
  let component: SwiperComponent;
  let fixture: ComponentFixture<SwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SwiperComponent],  // Đảm bảo khai báo component ở đây
      imports: [CommonModule],  // Import các module cần thiết, như CommonModule nếu có ngIf, ngFor
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
