

class DataGenerator {

    correctPwdToLogin;
    dataBank;
    nums;
    charts;
    simbols;

    constructor(){
        this.correctPwdToLogin = "pwd"
        this.dataBank = [];
        this.nums = "0123456789";
        this.charts = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this.simbols = ".?,-_!¡¿*%&$#[]{}<>@";
    }

    get dataBank() {
        return this.dataBank;
    }

    get correctPwdToLogin() {
        return this.correctPwdToLogin;
    }

    fakeDataGenerator (arraySize, longitud) {
        let toDo = this.nums + this.charts + this.simbols;
        for(let i = 0; i < arraySize; i++) {
            let data = "";
            for(let j = 0; j < longitud; j++){
                let random = Math.floor(Math.random()*toDo.length);
                data += toDo.charAt(random);
            }
            this.dataBank.push(data);
        }
    }
}

const dataGenerator = new DataGenerator();
export default dataGenerator;