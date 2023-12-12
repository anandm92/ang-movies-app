import { Pipe,PipeTransform } from "@angular/core";

@Pipe({name:"profit"})

export class ProfitPipe implements PipeTransform{
    transform(value: number, profitPercentage:number, gross:number):number {
        return (gross*profitPercentage/100);
    }

}