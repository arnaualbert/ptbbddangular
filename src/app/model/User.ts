export class User {


    #username: string | undefined;
    #password: string | undefined;
    #name: string | undefined;
    #lastname: string | undefined;
    #role: string | undefined;
    #mail: string | undefined;
    #number: number | undefined;
    #age: number | undefined;

    constructor(username?: string, password?: string, name?: string, lastname?: string, role?: string, mail?: string, number?: number, age?: number) {
        this.#username = username;
        this.#password = password;
        this.#name = name;
        this.#lastname = lastname;
        this.#role = role;
        this.#mail = mail;
        this.#number = number;
        this.#age = age;
    }

    public get username() {
        return this.#username!;
    }
    public get password() {
        return this.#password!;
    }
    public get name() {
        return this.#name!;
    }
    public get lastname() {
        return this.#lastname!;
    }
    public get role() {
        return this.#role!;
    }
    public get mail() {
        return this.#mail!;
    }
    public get number() {
        return this.#number!;
    }
    public get age() {
        return this.#age!;
    }
    public set username(username: string) {
        this.#username = username;
    }
    public set password(password: string) {
        this.#password = password;
    }
    public set name(name: string) {
        this.#name = name;
    }
    public set lastname(lastname: string) {
        this.#lastname = lastname;
    }
    public set role(role: string) {
        this.#role = role;
    }
    public set mail(mail: string) {
        this.#mail = mail;
    }
    public set number(number: number) {
        this.#number = number;
    }
    public set age(age: number) {
        this.#age = age;
    }
}