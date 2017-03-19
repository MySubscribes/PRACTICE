import {Injectable} from "@angular/core";
import {images} from "../shared/img";

@Injectable()
export class ImgService {
  images: Images[]= images;
  getImg(){
    return this.images;
  }
}

export interface Images{
  id: number;
  view: any;
}
