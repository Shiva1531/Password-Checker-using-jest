# Password-Checker-using-jest
The Password Checker  provides functionality to check the strength and validity of passwords


ENUMS: -
PasswordErrors
•	SHORT: Indicates that the password is too short.
•	NO_UPPER_CASE: Indicates that the password requires at least one uppercase letter.
•	NO_LOWER_CASE: Indicates that the password requires at least one lowercase letter.
•	NO_NUMBER: Indicates that the password requires at least one number.


I have created a file name with PasswordChecker.ts in my app directory src-->app--> pass_checker--> PasswordChecker.ts

I have break the validations into three iterations.


•	Before we get into the iterations part we need to write little bit of coding for PasswordChecker class creation.
export class PasswordChecker {
 public checkPassword(){
 }
 }
 


We should write the above code in our ts file  with this part of code we will write the test case to check the it should do nothing at this moment.

•	Now lets start writing the code for test case validation in  PasswordChecker.test.ts file

import { PasswordChecker,PasswordErrors } from "../../pass_checker/PasswordChecker";


describe('PasswordChecker test suite', ()=>{

    let sut: PasswordChecker;

    beforeEach(()=>{
        sut = new PasswordChecker();
    })
    it('should do nothing for the moment', ()=>{
     sut.checkPassword();
     })
     })
       

1.	In the above code I have imported PasswordChecker class from PasswordChecker.ts file.

2.	The describe function is used to define a test suite with the name 'PasswordChecker test suite'.

3.	Inside the test suite, a beforeEach function is defined to create a new instance of the PasswordChecker class before each test case.

4.	This code defines a test case within the test suite using the it function. The test case has a description 'Should do nothing for the moment'. Inside the test case, 
    the checkPassword method of the sut (System Under Test) instance is called.


•	Now lets start writing code for our iteration 1. It consist of test cases 

1.	Password with less than 8 chars is invalid.
2.	Password with greater than 8 chars is ok.
3.	Password with no uppercase letter is invalid.
4.	Password with uppercase letter is valid.
5.	Password with no lowercase letter is invalid.
6.	Password with lowercase letter is valid.

•	For implementing this iteration we need to make some changes in our PasswordChecker.ts file
 

•	Test cases for iteration 1:-

  

Test Case: Password with less than 8 chars is invalid
Description: This test case checks whether a password with less than 8 characters is considered invalid.
Expected behavior: The test expects the checkPassword method to return false when a password with less than 8 characters ('1234567') is provided.

Test Case: Password with more than 8 chars is ok
Description: This test case checks whether a password with more than 8 characters is considered valid
Expected behavior: The test expects the checkPassword method to return true when a password with more than 8 characters ('12345678Aa') is provided.
Test Case: Password with no upper case letter is invalid
Description: This test case checks whether a password without an uppercase letter is considered invalid.
Expected behavior: The test expects the checkPassword method to return false when a password without an uppercase letter ('1234abcd') is provided.

Test Case: Password with upper case letter is valid
Description: This test case checks whether a password with at least one uppercase letter is considered valid.
Expected behavior: The test expects the checkPassword method to return true when a password with at least one uppercase letter ('1234abcdA') is provided.

Test Case: Password with no lower case letter is invalid
Description: This test case checks whether a password without a lowercase letter is considered invalid.
Expected behavior: The test expects the checkPassword method to return false when a password without a lowercase letter ('1234ABCD') is provided.

Test Case: Password with lower case letter is valid
Description: This test case checks whether a password with at least one lowercase letter is considered valid.
Expected behavior: The test expects the checkPassword method to return true when a password with at least one lowercase letter ('1234ABCDa') is provided..



•	Test cases for iteration 2:-

•	Same test cases with different approach. Before we write the test cases need to do some changes in PasswordChecker.ts file and as well as test file.

 
•	Interface: CheckResult
Description: The CheckResult interface represents the result of the password check operation.

Properties:

valid (boolean): Indicates whether the password is valid (true) or not (false).

reasons (PasswordErrors[]): An array of PasswordErrors indicating the reasons for any failed checks.

Now we are going make changes in PasswordChecker.test.ts for approaching the same test cases in different way.
 

Test Case: Password with less than 8 chars is invalid

Description: This test case checks whether a password with less than 8 characters is considered invalid.
Expected behavior: The test expects the checkPassword method to return valid as false and the reasons array to contain PasswordErrors.SHORT when a password with less than 8 characters is provided.

Test Case: Password with more than 8 chars is ok
Description: This test case checks whether a password with more than 8 characters is considered valid.
Expected behavior: The test expects the checkPassword method to return valid as true and the reasons array not to contain PasswordErrors.SHORT when a password with more than 8 characters is provided.

Test Case: Password with no upper case letter is invalid
Description: This test case checks whether a password without an uppercase letter is considered invalid.
Expected behavior: The test expects the checkPassword method to return valid as false and the reasons array to contain PasswordErrors.NO_UPPER_CASE when a password without an uppercase letter is provided.

Test Case: Password with upper case letter is valid
Description: This test case checks whether a password with at least one uppercase letter is considered valid.
Expected behavior: The test expects the checkPassword method not to include PasswordErrors.NO_UPPER_CASE in the reasons array when a password with at least one uppercase letter is provided.

Test Case: Password with no lower case letter is invalid
Description: This test case checks whether a password without a lowercase letter is considered invalid.
Expected behavior: The test expects the checkPassword method to include PasswordErrors.NO_LOWER_CASE in the reasons array when a password without a lowercase letter is provided.

Test Case: Password with lower case letter is valid
Description: This test case checks whether a password with at least one lowercase letter is considered valid.
Expected behavior: The test expects the checkPassword method not to include PasswordErrors.NO_LOWER_CASE in the reasons array when a password with at least one lowercase letter is provided.

Test Case: Complex password is valid
Description: This test case checks whether a complex password with a combination of lowercase, uppercase, and numeric characters is considered valid.

