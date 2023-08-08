import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/views/login/login.component';


@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent {
  constructor(private router:Router){}
  login={
    user:'',
    pass:'',
    passw:'',
    nombre:''
  }


  agregar(){
    if(this.login.pass=='' ||this.login.user==''||this.login.nombre==''||this.login.passw==''){
      alert('Por favor complete ingrese la información solicitada');

      return;
    }
    else{

      alert('Bienvenido a nuestra comunidad de Pluralcafé' + ' ' +this.login.nombre);
        this.router.navigate(['home']);
        return;
    }

}


}
