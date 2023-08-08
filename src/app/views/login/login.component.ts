import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  usuario={
    email: '',
    password: ''
  }
  constructor(private authService:AuthService) {

  }
  ingresar(){
    if (this.usuario.email=='' || this.usuario.password==''){
      alert('Por favor ingrese todos los datos solicitados.');
    }
    else{
      console.log(this.usuario);
      const{email, password}=this.usuario;
      this.authService.login(email, password).then(res=>{
        console.log("se registro", res);
        alert('Bienvenido a nuestra comunidad de Pluralcafé'+ ' ' + this.usuario.email);
          window.location.href='/home'
          return;
      })
    }

  }

   /* constructor(private router:Router){}
    login={
     user:'',
    pass:''
   }

    public usuarios=[{user:'maria@gmail.com', pass:'123'},
              {user:'luis@gmail.com', pass:'456'},
              {user:'miguel@gmail.com', pass:'456'}
    ];


    agregar () {
      if(this.login.pass==''){
        alert('Por favor complete ingrese la información solicitada');
        this.login.pass='';
        this.login.user='';
        return;
      }
      if(this.login.user==''){
        alert('Por favor complete ingrese la información solicitada');
        this.login.pass='';
        this.login.user='';
        return;
      }

      for(let x=0;x<this.usuarios.length;x++)
      {

      if (this.usuarios[x].user==this.login.user)
      {
        if (this.usuarios[x].pass==this.login.pass)
      {
        alert('Bienvenido a nuestra comunidad de Pluralcafé'+ ' ' + this.login.user);
        this.router.navigate(['home']);
        return;
      }
      else {
        alert(this.login.user + "1");
        alert('Usuario y/o contraseña incorrecta, por favor verifique la informaciòn');
        this.login.pass='';
        this.login.user='';
        return;
      }
     }
  /////////////////////////////////////////////////
      if (this.usuarios[x].pass==this.login.pass)
      {
        if (this.usuarios[x].user==this.login.user)
      {
        alert('Bienvenido a nuestra comunidad de Pluralcafé' + ' ' +this.login.user);
        this.router.navigate(['home']);
        //document.getElementById("")
        return;

      }
      else {
        alert('Usuario y/o contraseña incorrecta, por favor verifique la informaciòn');
        this.login.pass='';
        this.login.user='';
        return;
      }
    }


    /////////////////////////////////////////
    if (this.usuarios[x].pass!=this.login.pass)
      {

        if (this.usuarios[x].user!=this.login.user)
      {
        alert('Usuario y/o contraseña incorrecta, por favor verifique la informaciòn');
        this.login.pass='';
        this.login.user='';
        return;

      }

      }
     // this.usuarios.push({ user:this.login.user,
       //                    pass:this.login.pass });
    }
  }*/
  }





