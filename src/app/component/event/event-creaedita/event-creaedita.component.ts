import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder,AbstractControl } from '@angular/forms';
import { ActivatedRoute,Params,Router } from '@angular/router';
import * as moment from 'moment';
import { Event } from 'src/app/model/event';
import { EventService } from 'src/app/service/event.service';
@Component({
  selector: 'app-event-creaedita',
  templateUrl: './event-creaedita.component.html',
  styleUrls: ['./event-creaedita.component.css']
})
export class EventCreaeditaComponent implements OnInit{
  form:FormGroup=new FormGroup({});
  event:Event=new Event();
  mensaje:string='';
  id:number=0;
  edicion:boolean=false;
  constructor(private eS:EventService,private router:Router, private formBuilder:FormBuilder, private route:ActivatedRoute){}
  ngOnInit(): void {
    this.route.params.subscribe((data:Params)=>{
      this.id=data['id'];
      this.edicion=data['id']!=null;
      this.init();
    });
    this.form=this.formBuilder.group({
      idEvent:['',],
      theme:['',Validators.required],
      descriptionEvent:['',Validators.required],
    });
  }

  
  init(){}
}
