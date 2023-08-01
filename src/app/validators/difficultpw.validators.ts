import { AbstractControl, ValidationErrors } from "@angular/forms";

export class difficultPw{
  static difficultPwValidations(abc:AbstractControl):ValidationErrors|null{
    let abcValue = abc.value as string;
    if (abcValue && abcValue.length >= 6) {
      const hasUpperCase = /[A-Z]/.test(abcValue);
      const hasLowerCase = /[a-z]/.test(abcValue);
      const hasNumber = /\d/.test(abcValue);

      if (!hasUpperCase || !hasLowerCase || !hasNumber) {
        return { difficultPwValidations: true };
      }
    }
    return null
  }
}
