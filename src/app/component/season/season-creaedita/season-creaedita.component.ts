import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as moment from 'moment';
import { Season } from 'src/app/model/season';
import { SeasonService } from 'src/app/service/season.service';

@Component({
  selector: 'app-season-creaedita',
  templateUrl: './season-creaedita.component.html',
  styleUrls: ['./season-creaedita.component.css']
})
export class SeasonCreaeditaComponent {
  form: FormGroup = new FormGroup({});
  season: Season = new Season();
  mensaje: string = '';
  id: number = 0;
  edicion: boolean = false;
  startDate = new FormControl(new Date());
  endDate: Date = moment().add(+3, 'months').toDate();
  constructor(
    private cS: SeasonService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.form = this.formBuilder.group({
      idSeason: [''],
      nameSeason: ['', Validators.required],
      startDate: ['', Validators.required],
      descriptionSeason: ['', Validators.required],
    });
  }
  aceptar() {
    if (this.form.valid) {
      this.season.idSeason = this.form.value.idSeason;
      this.season.nameSeason = this.form.value.nameSeason;
      this.season.startDate = this.form.value.startDate;
      this.season.endDate = this.endDate;
      this.season.descriptionSeason = this.form.value.descriptionSeason;
      if (this.edicion) {
        this.cS.update(this.season).subscribe(() => {
          this.cS.list().subscribe((data) => {
            this.cS.setList(data);
          });
        });
      } else {
        this.cS.insert(this.season).subscribe((data) => {
          this.cS.list().subscribe((data) => {
            this.cS.setList(data);
          });
        });
      }
      this.router.navigate(['components/seasons']);
    } else {
      this.mensaje = 'Revise los campos!!!';
    }
  }

  obtenerControlCampo(nombreCampo: string): AbstractControl {
    const control = this.form.get(nombreCampo);
    if (!control) {
      throw new Error(`Control no encontrado para el campo ${nombreCampo}`);
    }
    return control;
  }
  init() {
    if (this.edicion) {
      this.cS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          idSeason: new FormControl(data.idSeason, Validators.required),
          nameSeason: new FormControl(data.nameSeason, Validators.required),
          startDate: new FormControl(data.startDate, Validators.required),
          endDate: new FormControl(data.endDate, Validators.required),
          descriptionSeason: new FormControl(data.descriptionSeason, Validators.required),
        });
      });
    }
  }
}
