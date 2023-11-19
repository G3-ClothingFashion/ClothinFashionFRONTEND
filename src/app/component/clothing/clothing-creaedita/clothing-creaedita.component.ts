import { ActivatedRoute, Params, Router } from '@angular/router';
import { Clothing } from './../../../model/clothing';
import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  FormControl,
} from '@angular/forms';
import { ClothingService } from 'src/app/service/clothing.service';
import { Texture } from 'src/app/model/texture';
import { Color } from 'src/app/model/color';
import { Catalog } from 'src/app/model/catalog';
import { Store } from 'src/app/model/store';
import { Closet } from 'src/app/model/closet';
import { Brand } from 'src/app/model/brand';
import { Event } from 'src/app/model/event';
import { TypeClothing } from 'src/app/model/typeclothing';
import { TextureService } from 'src/app/service/texture.service';
import { ColorService } from 'src/app/service/color.service';
import { CatalogService } from 'src/app/service/catalog.service';
import { StoreService } from 'src/app/service/store.service';
import { ClosetService } from 'src/app/service/closet.service';
import { BrandService } from 'src/app/service/brand.service';
import { TypeclothingService } from 'src/app/service/typeclothing.service';
import { EventService } from 'src/app/service/event.service';
import { Season } from 'src/app/model/season';
import { SeasonService } from 'src/app/service/season.service';

@Component({
  selector: 'app-clothing-creadita',
  templateUrl: './clothing-creaedita.component.html',
  styleUrls: ['./clothing-creaedita.component.css'],
})
export class ClothingCreaditaComponent {
  form: FormGroup = new FormGroup({});
  clothing: Clothing = new Clothing();
  mensaje: string = '';
  id: number = 0;
  edicion: boolean = false;
  listaTexturas: Texture[] = [];
  listaColores: Color[] = [];
  listaCatalogos: Catalog[] = [];
  listaTiendas: Store[] = [];
  listaArmarios: Closet[] = [];
  listaMarcas: Brand[] = [];
  listaTipos: TypeClothing[] = [];
  listaEventos: Event[] = [];
  listaTemporadas: Season[] = [];

  constructor(
    private cC: ClothingService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private tS: TextureService,
    private cS: ColorService,
    private catS: CatalogService,
    private sS: StoreService,
    private cloS: ClosetService,
    private bS: BrandService,
    private tcS: TypeclothingService,
    private eS: EventService,
    private temS: SeasonService
  ) {}




  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.form = this.formBuilder.group({
      idClothing: [''],
      season: ['', Validators.required],
      texture: ['', Validators.required],
      color: ['', Validators.required],
      event: ['', Validators.required],
      catalog: ['', Validators.required],
      store: ['', Validators.required],
      closet: ['', Validators.required],
      brand: ['', Validators.required],
      typeClothing: ['', Validators.required],
    });
    this.tS.list().subscribe((data) => {
      this.listaTexturas = data
    });
    this.cS.list().subscribe((data) => {
      this.listaColores = data
    });
    this.catS.list().subscribe((data) => {
      this.listaCatalogos = data
    });
    this.sS.list().subscribe((data) => {
      this.listaTiendas = data
    });
    this.bS.list().subscribe((data) => {
      this.listaMarcas = data
    });
    this.tcS.list().subscribe((data) => {
      this.listaTipos = data
    });
    this.cloS.list().subscribe((data) => {
      this.listaArmarios = data
    });
    this.eS.list().subscribe((data) => {
      this.listaEventos = data
    });
    this.temS.list().subscribe((data) => {
      this.listaTemporadas = data
    });
  }
  registrar() {
    if (this.form.valid) {
      this.clothing.idClothing = this.form.value.idClothing;
      this.clothing.season.idSeason = this.form.value.season;
      this.clothing.texture.idTexture = this.form.value.texture;
      this.clothing.color.idColor = this.form.value.color;
      this.clothing.event.idEvent = this.form.value.event;
      this.clothing.catalog.idCatalog = this.form.value.catalog;
      this.clothing.store.idStore = this.form.value.store;
      this.clothing.closet.idCloset = this.form.value.closet;
      this.clothing.brand.idBrand = this.form.value.brand;
      this.clothing.typeClothing.idTypeClothing = this.form.value.typeClothing;
      if (this.edicion) {
        this.cC.update(this.clothing).subscribe(() => {
          this.cC.list().subscribe((data) => {
            this.cC.setList(data);
          });
        });
      } else {
        this.cC.insert(this.clothing).subscribe((data) => {
          this.cC.list().subscribe((data) => {
            this.cC.setList(data);
          });
        });
      }
      this.router.navigate(['components/clothings']);
    } else {
      this.mensaje = 'Por favor, revise los campos';
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
      this.cC.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          idClothing: new FormControl(data.idClothing, Validators.required),
          season: new FormControl(data.season.idSeason, Validators.required),
          texture: new FormControl(data.texture.idTexture, Validators.required),
          color: new FormControl(data.color.idColor, Validators.required),
          event: new FormControl(data.event.idEvent, Validators.required),
          catalog: new FormControl(data.catalog.idCatalog, Validators.required),
          store: new FormControl(data.store.idStore, Validators.required),
          closet: new FormControl(data.closet.idCloset, Validators.required),
          brand: new FormControl(data.brand.idBrand, Validators.required),
          typeClothing: new FormControl(data.typeClothing.idTypeClothing, Validators.required),
        });
      });
    }
  }
}
