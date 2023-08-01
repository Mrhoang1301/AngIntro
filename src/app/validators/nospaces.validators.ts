import { AbstractControl, ValidationErrors } from "@angular/forms";

export class noSpace{
  static noSpaceValidations(abc:AbstractControl):ValidationErrors|null{
    let abcValue = abc.value as string
    if(abcValue.indexOf(' ')>=0){
      return {noSpaceValidations:true}
    }else{
      return null;
    }
  }
}

