import { AbstractControl,ValidationErrors } from '@angular/forms'
import { environment } from 'src/environments/environment';

export class CustomVelidators{
    // static cannotContainSpace(control :AbstractControl):ValidationErrors | null{
    //     if((control.value as string).indexOf(' ')>=0){
    //         return { cannotContainSpace:true}
    //     }
    //     return null;
    // }
    static shouldBeUnique(control: AbstractControl):Promise<ValidationErrors | null>{
        return new Promise((resolve) => {
            setTimeout(() => {
                let departmentType=environment.departmentType
                // console.log(control.value.toUpperCase());
                for (let i = 0; i < departmentType.length; i++) {    
                    if(control.value.toLowerCase()  === departmentType[i].toLowerCase()){
                        resolve({ shouldBeUnique:true})
                        break
                    }
                }
                resolve(null);                
                
            }, 2000);
        });
    }
}