import {Component, OnInit} from '@angular/core';
import {TrainingType, TrainingTypesGroup} from './group-class.interface';
import {GroupClasses} from './group-class';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-group-class',
  templateUrl: './group-class.component.html',
  styleUrls: ['./group-class.component.css']
})
export class GroupClassComponent implements OnInit {

  public classes: TrainingTypesGroup = GroupClasses;
  public training: TrainingType;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if (this.classes[params.get('name')]) {
        this.training = this.classes[params.get('name')];
      } else {
        this.router.navigate(['**']);
      }
    });
  }
}
