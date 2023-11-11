import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  AbstractControl,
} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as moment from 'moment';
import { TypeClothing } from 'src/app/model/typeclothing';
import { TypeclothingService } from 'src/app/service/typeclothing.service';
@Component({
  selector: 'app-typeclothing-creaedita',
  templateUrl: './typeclothing-creaedita.component.html',
  styleUrls: ['./typeclothing-creaedita.component.css'],
})
export class TypeclothingCreaeditaComponent implements OnInit{
  form:FormGroup=new FormGroup({});
  typeClothing:TypeClothing=new TypeClothing();
  mensaje:string='';
  id:number=0;
  edicion:boolean=false;
  //SIZE
  tallas:{value:string,viewValue:string}[]=[
    {value:'XS',viewValue:'XS'},
    {value:'S',viewValue:'S'},
    {value:'M',viewValue:'M'},
    {value:'L',viewValue:'L'},
    {value:'XL',viewValue:'XL'},
    {value:'XLL',viewValue:'XLL'},
  ];
  //GENDER
  generos:{value:string,viewValue:string}[]=[
    {value:'Masculino',viewValue:'Masculino'},
    {value:'Femenino',viewValue:'Femenino'},
  ];
  //CATEGORY
  categoria:{value:string,viewValue:string}[]=[
    {value:'Pantalon',viewValue:'Pantalon'},
    {value:'Camisa',viewValue:'Camisa'},
    {value:'Sudadera',viewValue:'Sudadera'},
    {value:'Short',viewValue:'Short'},
    {value:'Zapatos',viewValue:'Zapatos'},
    {value:'Zapatillas',viewValue:'Zapatillas'},
  ];
  constructor(private tcS:TypeclothingService,private router:Router,private formBuilder:FormBuilder,private route:ActivatedRoute){ }

  ngOnInit(): void {
    this.route.params.subscribe((data:Params)=>{
      this.id=data['id'];
      this.edicion=data['id']!=null;
      this.init();
    });
    this.form=this.formBuilder.group({
      idTypeClothing:['',],
      size:['',Validators.required],
      gender:['',Validators.required],
      description:['',Validators.required],
      category:['',Validators.required],
      occasion:['',Validators.required],
    });
  }

  registrar(){
    if(this.form.valid){
      this.typeClothing.idTypeClothing=this.form.value.idTypeClothing;
      this.typeClothing.size=this.form.value.size;
      this.typeClothing.gender=this.form.value.gender;
      this.typeClothing.description=this.form.value.description;
      this.typeClothing.category=this.form.value.category;
      this.typeClothing.occasion=this.form.value.occasion;
      if(this.edicion){
        this.tcS.update(this.typeClothing).subscribe(()=>{
          this.tcS.list().subscribe(data=>{
            this.tcS.setList(data);
          })
        })
      }else{
        this.tcS.insert(this.typeClothing).subscribe((data)=>{
          this.tcS.list().subscribe((data)=>{
            this.tcS.setList(data);
          });
        });
      }this.router.navigate(['components/typeClothings'])
    }else{
      this.mensaje="Por favor, revise los campos"
    }
  }
  obtenerControlCampo(nombreCampo:string):AbstractControl{
    const control=this.form.get(nombreCampo);
    if(!control){
      throw new Error(`Control no encontrado para el campo ${nombreCampo}`);
    }
    return control;
  }
  init(){
    if(this.edicion){
      this.tcS.listId(this.id).subscribe((data)=>{
        this.form=new FormGroup({
          idTypeClothing:new FormControl(data.idTypeClothing),
          size:new FormControl(data.size),
          gender:new FormControl(data.gender),
          description:new FormControl(data.description),
          category:new FormControl(data.category),
          occasion:new FormControl(data.occasion),
        });
      });
    }
  }
}

