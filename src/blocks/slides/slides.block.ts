import { Component, Input, ViewChild } from "@angular/core";
import { Slides } from "ionic-angular";

@Component({
  selector: "slides-block",
  templateUrl: "slides.block.html"
})
export class SlidesBlock {
    
  @Input()
  public contents: Array<any> = [];
  
  @Input()
  public showPricing: boolean = false;

  @ViewChild(Slides)
  private slides: Slides;
    
  constructor() {
    // Do nothing.
  }
  
  ngAfterViewInit() {
    this.slides.slidesOffsetBefore = 16;
    this.slides.slidesOffsetAfter = 16;
  }

}