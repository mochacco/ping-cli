import { Injectable } from "@angular/core";

@Injectable()
export class ExperimentProvider {
    
  public tokenExperiment: string; // CAN BE 'INCENTIVE', or 'LICENSE'.
  public currencyExperiement: string; // CAN BE 'PNG', 'ETH', 'BTC', or 'DOLLAR'.
  
  constructor() { 
    this.initExperiments();
  }
  
  private initExperiments() {
    this.tokenExperiment = "INCENTIVE";
    this.currencyExperiement = "PNG";
  }
  
}