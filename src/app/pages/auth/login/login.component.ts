import { Component, afterNextRender } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  email:string = '';
  password:string = '';
  code_user:string = '';

  constructor(
    private authService: AuthService,
    public router: Router,
    public activedRoute: ActivatedRoute,
    
    ) {
  }

  ngOnInit(): void {
    if(this.authService.token && this.authService.user){
      setTimeout(() => {
        this.router.navigateByUrl("/");
      }, 500);
      return;
    }
    this.activedRoute.queryParams.subscribe((resp:any) => {
      this.code_user = resp.code;
    })

    if(this.code_user){
      let data = {
        code_user: this.code_user,
      }
      this.authService.verifiedAuth(data).subscribe((resp:any) => {
        console.log(resp);
        if(resp.message == 403){
          console.log("Validacion","EL codigo no pertenece a ningun usuario");
        }
        if(resp.message == 200){
          console.log("Exito","EL correo ha sido verificado ingresar a la tienda");
          setTimeout(() => {
            this.router.navigateByUrl("/login");
          }, 500);
        }
      })
    }
  }

  login(){
    
    if(!this.email || !this.password){
      console.log("Validacion","Necesitas ingresar todos los campos");
      return;
    }
    this.authService.login(this.email,this.password).subscribe((resp:any) => {
      console.log(resp);
      if(resp.error && resp.error.error == 'Unauthorized'){
        console.log("Validacion",'Las credenciales son incorrectas');
        return;
      }
      if(resp == true){
        console.log("Exito",'Bienvenido a la tienda');
        setTimeout(() => {
          this.router.navigateByUrl("/");
        }, 500);
      }
    },(error) => {
      console.log(error);
    })
  }

  showSuccess() {
    console.log('Hello world!', 'Toastr fun!');
  }
  
}
