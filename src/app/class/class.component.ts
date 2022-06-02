import {Component, Input, OnInit} from '@angular/core';
import {Classe} from "../models/classe.model";
import {ClasseService} from "../services/classe.service";
import {ActivatedRoute, Router} from "@angular/router";
import {StudentService} from "../services/student.service";

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit {
  @Input() classe!: Classe;
  classes!: Classe[];
  public classeID: any;

  classSelected = '';

  constructor(private classeService: ClasseService,
              private studentService: StudentService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const routeQuery = this.route.snapshot.queryParamMap;
    this.classeID = routeParams.get('classeId');
    this.classes = this.classeService.getAllClasses();

  }

  onViewClasse() {
    this.router.navigateByUrl(`classes/${this.classe.id}`);
  }
}
