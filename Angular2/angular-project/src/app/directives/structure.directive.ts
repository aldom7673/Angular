import { Directive, ElementRef, Input, OnInit, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
	selector:'[myStructureDirective]'
})

export class StructureDirective implements OnInit{
    @Input() set myStructureDirective(n:number){
        for(var i = 0; i < n; i++){
            this.vcRef.createEmbeddedView(this.templateRef);
        }
    }

    constructor(private templateRef:TemplateRef<any>, private vcRef:ViewContainerRef){
    }

    ngOnInit(){
    }

}
