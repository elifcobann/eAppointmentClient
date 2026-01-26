import { DepartmentModel } from "./models/doctor.model";

export const api : string = "http://localhost:5012/api"

export const departments : DepartmentModel[] = [
    {
        name: "Acil",
        value: 1
    },
    {
        name: "Radyoloji",
        value: 2
    },
    {
        name: "Kardiyoloji",
        value: 3    
    },
    {
        name: "Dermatoloji",
        value: 4        
    },
    {
        name: "Endokrinoloji",  
        value: 5      
    },
    {   
        name: "Gastroenteroloji",
        value: 6        
    },  
    {
        name: "GenelCerrahi",
        value: 7
    },
    {
        name: "JinekolojiveObstetrik",
        value: 8    
    },
    {
        name: "Hematoloji", 
        value: 9
    },
    {
        name: "EnfeksiyonHastalıkları",
        value: 10
    },
    {   
        name: "Nefroloji",
        value: 11        
    },
    {
        name: "Nöroloji",
        value: 12
    },
    {
        name: "Ortopedi",
        value: 13    
    },
    {
        name: "Pediatri", 
        value: 14
    },
    {
        name: "Psikiyatri",
        value: 15
    },
    {
        name: "Pulmonoloji",
        value: 16        
    }
];

 