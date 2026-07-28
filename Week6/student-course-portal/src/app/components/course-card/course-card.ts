import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { EnrollmentService } from '../../services/enrollment';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCardComponent implements OnChanges {

  @Input()
  course: any;

  @Output()
  enrollRequested = new EventEmitter<number>();

  isExpanded = false;

  constructor(
    public enrollmentService: EnrollmentService,
    private router: Router
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  enroll(): void {

    if (this.enrollmentService.isEnrolled(this.course.id)) {

      this.enrollmentService.unenroll(this.course.id);

    } else {

      this.enrollmentService.enroll(this.course.id);

      this.enrollRequested.emit(this.course.id);

    }

  }

  toggleDetails(): void {

    this.isExpanded = !this.isExpanded;

  }

  viewDetails(): void {

    this.router.navigate(['/courses', this.course.id]);

  }

  get cardClasses() {

    return {

      'card--enrolled': this.enrollmentService.isEnrolled(this.course.id),

      'card--full': this.course.credits >= 4,

      'expanded': this.isExpanded

    };

  }

  get borderColor() {

    switch (this.course.gradeStatus) {

      case 'passed':
        return 'green';

      case 'failed':
        return 'red';

      default:
        return 'gray';

    }

  }

}