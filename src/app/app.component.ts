import { Component, ViewChild, AfterViewInit, OnInit,OnChanges,DoCheck,AfterViewChecked,OnDestroy } from '@angular/core';
import { PostComponent } from './post/post.component';
import { FormArray, FormBuilder, FormControl, NgForm, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title:string="Angular Pipes"
  form:any;
  contactDetails:any
  emailRegex:string='[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$'
  contactRegex:string='[789][0-9]{10}'
  constructor( fb: FormBuilder){

    this.form=fb.group({
      fullName:['',[
        Validators.required,
        Validators.minLength(6)
      ]],

      email:['',[
        Validators.required,
        Validators.email
      ]],

      contactDetails: fb.group({
        address:['',Validators.required],
        shippingAddress:['',Validators.required],
        contactNo:['',[
          Validators.required,
          Validators.pattern(this.contactRegex)
        ]]
      }),

      skills:fb.array([])
    })

    // this.form=new FormGroup({
    //   fullName:new FormControl('',
    //   [Validators.required,
    //   Validators.minLength(6)
    // ]),
    //   email:new FormControl('',
    //   [Validators.required,
    //   // Validators.pattern(this.emailRegex)
    //   Validators.email
    // ]),
    // contactDetails: new FormGroup({
    //   address:new FormControl('',Validators.required),
    //   shippingAddress: new FormControl('',Validators.required),
    //   contactNo:new FormControl('',[Validators.required,
    //   Validators.pattern(this.contactRegex)
    //   ])
    // }),
    // skills: new FormArray([],Validators.required)
    // });
  }
  get Email(){
    return this.form.get('email')
  }
  get fullname (){
    return this.form.get('fullName');
  }
  get Address(){
    return this.form.get('contactDetails.address')
  }
  get ShippingAddress(){
    return this.form.get('contactDetails.shippingAddress')
  }
  get Contact(){
    return this.form.get('contactDetails.contactNo')
  }
  get Skills(){
    return this.form.get('skills') as FormArray
  }
  addSkills(skill:HTMLInputElement){
    this.Skills.push(
      new FormControl(skill.value)
    )
    skill.value=''
    console.log(this.Skills);

  }
  removeSkills(i:any){
    this.Skills.removeAt(i)
  }
  Submit(){
    console.log(this.form.value);
  }
  onSubmit(mess:NgForm){
    console.log(mess.value)
  }
  getValue(f:any){
    console.log(f)
  }
}
