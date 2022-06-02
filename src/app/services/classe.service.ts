import {Injectable} from "@angular/core";
import {Classe } from "../models/classe.model";

@Injectable({
  providedIn:'root'
})
export class ClasseService {
  classes: Classe[] =[
    {
      id:1,
      title: 'TS2A',
    },
    {
      id:2,
      title: 'Second'

    },
    {
      id:3,
      title: 'Premiere S1',

    },
    {
      id:4,
      title: 'Second L',
    },
    {
      id:5,
      title: 'Terminal L2'
    }
  ];
  //find all classes
  getAllClasses(): Classe[]{
    return this.classes;
  }
  //find one classe by id

  getClasseById(classeId:number): Classe{
    const classe= this.classes.find(classe=>classe.id===classeId);
    if (!classe){
      throw new Error('Classe not found');
    } else{
      return classe;
    }
  }

  // classeById(classId:number): void{
  //   const classe = this.getClasseById(classId);
  // }

}
