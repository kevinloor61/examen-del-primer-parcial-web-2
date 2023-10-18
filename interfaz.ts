export interface Isoftware{
    id: Number,
    name: String,
    price:Number,
    detail:String,
    requirements:IRequirement [];
}

export interface IRequirement{
    id: Number,
    description: String;
    cost:Number;
    effort:Number;
    softwareID:Number;
}

export const  Isoftware: Isoftware[] = [
    {id:1,name:'kevin',price:11,detail:'bueno',requirements:[
        {id:2,description:'ok',cost:22,effort:33,softwareID:1},
        {id:2,description:'malo',cost:22,effort:33,softwareID:1}
    ],},
    {id:1,name:'pablo',price:11,detail:'bueno',requirements:[
        {id:3,description:'malo',cost:23,effort:34,softwareID:2},
        {id:3,description:'malo',cost:23,effort:34,softwareID:2}
    ],},
    {id:1,name:'carlos',price:11,detail:'bueno',requirements:[
        {id:4,description:'ok',cost:22,effort:33,softwareID:3},
        {id:4,description:'ok',cost:22,effort:33,softwareID:3}
    ],},
];






