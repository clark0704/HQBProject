/**
 *
 * 
 * @export
 * @class Student
 */
export default class Student{
    constructor(name,sex,age){
        this.name = name;
        this.sex = sex;
        this.age = age;
    }
    toString(){
        return '姓名:' + this.name + '  性别:'+this.sex + '  年龄:'+this.age;
    }
    
    

}