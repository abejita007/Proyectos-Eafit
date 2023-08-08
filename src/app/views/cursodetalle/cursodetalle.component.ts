import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';


//declare var paypal: { Buttons: () => { (): any; new(): any; render: { (arg0: any): void; new(): any; }; }; };
declare var paypal:any;
@Component({
  selector: 'app-cursodetalle',
  templateUrl: './cursodetalle.component.html',
  styleUrls: ['./cursodetalle.component.css']
})
export class CursodetalleComponent implements OnInit{

  constructor(){}

  @ViewChild('paypal', { static: true }) paypalElement!: ElementRef;

  product={
    descripcion:'Curso catacion de cafe',
    precio:599.99,
    img: 'imagen producto'
  };
  paidFor=false;
 ngOnInit(){
   paypal
  .Buttons(

      {
      createOrder: (_data:any, actions:any) =>{
      return actions.order.create({
        purchase_units:[
          {
          description:this.product.descripcion,
          amount:{
            currency_code:'USD',
            value:this.product.precio
          }
        }
      ],
      })
    },
    onApprove:async(_data: any, actions:any)=>{
      const order =await actions.order.capture();
      this.paidFor=true;
      console.log(order)
    },
    onError: (err: any) =>{
      console.log(err);
    }
  } )

    .render(this.paypalElement.nativeElement);
  }




}
