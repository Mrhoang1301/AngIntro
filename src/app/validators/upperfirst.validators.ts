import { AbstractControl, ValidationErrors, Validators } from "@angular/forms"

export class upperFirst{
  static upperFirstValidations(abc: AbstractControl): ValidationErrors | null {
    const abcValue = abc.value as string;
    if (abcValue && abcValue.length > 0) {
      const firstCharacter = abcValue.charAt(0);
      const firstLetter = abcValue[0];
      if (!isNaN(Number(firstCharacter))) {
        return { upperFirstValidations: true };
      }
      if (firstLetter !== firstLetter.toUpperCase()) {
        return { upperFirstValidations: true };
      }
    }
    return null;
  }
}
