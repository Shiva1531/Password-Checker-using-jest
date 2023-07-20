//iteration 2
export enum PasswordErrors {
    SHORT = 'Password is too short!',
    NO_UPPER_CASE = 'Upper case letter required!',
    NO_LOWER_CASE = 'Lower case letter required!',
    //itr 3
    NO_NUMBER = 'At least one number required!'
}
export interface CheckResult {
    valid: boolean,
    reasons: PasswordErrors[]
}
export class PasswordChecker {
    //iteration 1
  //  public checkPassword(password: string): boolean{
        //iteration 2
        public checkPassword(password: string): CheckResult{
            const reasons:PasswordErrors[] = [];
            //itr 3
            this.checkForLength(password, reasons);
            this.checkForUpperCase(password, reasons);
            this.checkForLowerCase(password, reasons);
            return {
                valid: reasons.length > 0 ? false : true,
                reasons: reasons
            };   
        }
            public checkAdminPassword(password: string): CheckResult{
                const basicCheck = this.checkPassword(password);
                this.checkForNumber(password, basicCheck.reasons);
                return {
                    valid: basicCheck.reasons.length > 0 ? false : true,
                    reasons: basicCheck.reasons
                };  
            }
            private checkForNumber(password: string, reasons: PasswordErrors[]){
                const hasNumber = /\d/; 
                if(!hasNumber.test(password)) {
                    reasons.push(PasswordErrors.NO_NUMBER);
                }
            }

            private checkForLength(password: string, reasons: PasswordErrors[]){
                if(password.length < 8) {
                    reasons.push(PasswordErrors.SHORT);
                }
            }
        
            private checkForUpperCase(password: string, reasons: PasswordErrors[]){
                if (password == password.toLowerCase()) {
                    reasons.push(PasswordErrors.NO_UPPER_CASE);
                }
            }
        
            private checkForLowerCase(password: string, reasons: PasswordErrors[]){
                if (password == password.toUpperCase()) {
                    reasons.push(PasswordErrors.NO_LOWER_CASE);
                }
            //itr 2
        //if(password.length < 8) {
            //iter 1
           // return false;
           //iter 2
            //reasons.push(PasswordErrors.SHORT);
      //  }
      //itr 2
       // if (password == password.toLowerCase()) {
            //iter 1
          //  return false;
          //iter 2
          //  reasons.push(PasswordErrors.NO_UPPER_CASE);

       // }
       //itr 2
      //  if (password == password.toUpperCase()) {
            //iter 1
           // return false;
           //iter 2
           // reasons.push(PasswordErrors.NO_LOWER_CASE);
      //  }
        //iter 1
      //  return true; 
      //iter 2
      //itr 3 same as itr 2
     //   return {
       //     valid: reasons.length > 0 ? false : true,
        //    reasons: reasons
       // };           
    }
}