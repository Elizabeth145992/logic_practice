const persona = {
    nombre: 'Elizabeth',

    saludar(){
        console.log(`Hola ${this.nombre}`);
    }
}

persona.saludar();
const saludar = persona.saludar;

saludar();

const persona2 = {
  nombre: "Elizabeth",

  saludar: () => {
    console.log(this.nombre);
  }
};

persona2.saludar();