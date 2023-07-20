import { PasswordChecker,PasswordErrors } from "../../pass_checker/PasswordChecker";


describe('PasswordChecker test suite', ()=>{

    let sut: PasswordChecker;

    beforeEach(()=>{
        sut = new PasswordChecker();
    })

    //passchecker itretaion 1
    it('Password with less than 8 chars is invalid', () => {
        const actual = sut.checkPassword('1234567');
       //itr 1 expect(actual).toBe(false);
       //itr 2
       expect(actual.valid).toBe(false);
        expect(actual.reasons).toContain(PasswordErrors.SHORT);
    });

    it('Password with more than 8 chars is ok', () => {
        //itr 1
       // const actual = sut.checkPassword('12345678Aa');
       // expect(actual).toBe(true);
       //itr 2
       const actual = sut.checkPassword('12345678');
        expect(actual.reasons).not.toContain(PasswordErrors.SHORT);
    });

    it('Password with no upper case letter is invalid', () => {
        //itr 1
       // const actual = sut.checkPassword('1234abcd');
        //expect(actual).toBe(false);
        //itr 2
        const actual = sut.checkPassword('abcd');
        expect(actual.valid).toBe(false);
        expect(actual.reasons).toContain(PasswordErrors.NO_UPPER_CASE)
    });

    it('Password with upper case letter is valid', () => {
        //itr 1
       // const actual = sut.checkPassword('1234abcdA');
       // expect(actual).toBe(true);
       //itr 2
       const actual = sut.checkPassword('abcD');
       expect(actual.reasons).not.toContain(PasswordErrors.NO_UPPER_CASE)
    });

    it('Password with no lower case letter is invalid', () => {
        //itr 1
       // const actual = sut.checkPassword('1234ABCD');
       // expect(actual).toBe(false);
       //itr 2
       const actual = sut.checkPassword('ABCD');
        expect(actual.reasons).toContain(PasswordErrors.NO_LOWER_CASE)
    });

    it('Password with lower case letter is valid', () => {
        //itr 1
       // const actual = sut.checkPassword('1234ABCDa');
        //expect(actual).toBe(true);
        //itr 2
        const actual = sut.checkPassword('ABCDa');
        expect(actual.reasons).not.toContain(PasswordErrors.NO_LOWER_CASE)
    });

    //passchecker iteration 2
    it('Complex password is valid', () => {
        const actual = sut.checkPassword('1234abcD');
        expect(actual.reasons).toHaveLength(0);
        expect(actual.valid).toBe(true);
    });

    //itr 3 admin password checking
    it('Admin password with no number is invalid', () => {
        const actual = sut.checkAdminPassword('abcdABCD')
        expect(actual.reasons).toContain(PasswordErrors.NO_NUMBER)
        expect(actual.valid).toBe(false);
    });

    it('Admin password with number is valid', () => {
        const actual = sut.checkAdminPassword('abcdABCD7')
        expect(actual.reasons).not.toContain(PasswordErrors.NO_NUMBER)
    });

})