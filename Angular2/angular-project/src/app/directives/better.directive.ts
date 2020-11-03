import { Directive, ElementRef, Host, HostBinding, HostListener, OnInit, Renderer2 } from "@angular/core";

@Directive({
	selector:'[myBetterDirective]'
})

export class BetterDirective implements OnInit{

    @HostBinding('style.backgroundColor') background : string;
    constructor(private elementRef: ElementRef, private render:Renderer2){
    }

    ngOnInit(){
        this.render.setStyle(this.elementRef.nativeElement,'background-color','red');
    }

    @HostListener('mouseover') OnOverMethod(data:Event){
        // this.render.setStyle(this.elementRef.nativeElement,'background-color','purple');
        this.background = 'purple';
    }

    @HostListener('mouseleave') LeaveMethod(data:Event){
        // this.render.setStyle(this.elementRef.nativeElement,'background-color','green');
        this.background = 'green';
    }

}
