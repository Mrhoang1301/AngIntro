import { Component, ViewChild, AfterViewInit, OnInit,OnChanges,DoCheck,AfterViewChecked,OnDestroy } from '@angular/core';
import { PostComponent } from './post/post.component';
import { FormArray, FormBuilder, FormControl, NgForm, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { __values } from 'tslib';
import { noSpace } from './validators/nospaces.validators';
import { upperFirst } from './validators/upperfirst.validators';
import { difficultPw } from './validators/difficultpw.validators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title: any;
  form:any
  constructor(fb:FormBuilder){
      this.form = fb.group({
        username:['',[
          Validators.required,
          Validators.minLength(6),
          noSpace.noSpaceValidations
        ]],

        password:['',[
          Validators.required,
          Validators.minLength(6),
          upperFirst.upperFirstValidations,
          difficultPw.difficultPwValidations
        ]]
      })

  }
  get element(){
    return this.form.controls;
  }
  hacker(){
    console.log(this.form.value)
  }
}
