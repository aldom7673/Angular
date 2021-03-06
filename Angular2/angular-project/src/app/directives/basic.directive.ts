import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
	selector:'[myDirective]'
})

export class BasicDirective implements OnInit{
    constructor(private elementRef: ElementRef){
    }

    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor = 'blue';
        this.elementRef.nativeElement.style.color = 'white';
    }

}
