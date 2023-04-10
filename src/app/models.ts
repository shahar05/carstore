export const CAR_INTEREST = 14;

export enum UrlPage{
    Home = "",
    Model = "model",
    CarGame = "cargame"
}

export interface BaseSection {
    name: string;
    image: string;
}

export interface Brand extends BaseSection{
    
}

export interface Model extends BaseSection {
    price: number;
    fuelType: string;
    class: string;
    year: number;
    transmission:string;
    cityMpg: number;
    combinationMpg:number;
    highwayMpg: number;
    make: string;
}


export interface ApiModel{
    city_mpg: number,
    combination_mpg: number,
    cylinders: number,
    displacement: number,
    highway_mpg: number,
    year: number,
    class:string,
    drive:string,
    fuel_type:string,
    make:string,
    model:string,
    transmission:string,
}

export interface FinanceData {
    carName: string;
    carModel: string;
    price: number;
}