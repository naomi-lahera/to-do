import { ArgumentMetadata, Injectable, PipeTransform, BadRequestException } from '@nestjs/common';
import { Status } from '../entity/todo.entity';

@Injectable()
export class StatusPipe implements PipeTransform {

  transform(value: any) {
    console.log('status pipe')
    console.log(this.validate(value))

    if(value && !this.validate(value))
      throw new BadRequestException(`${value} is a no valid status`);
    return value;
  }

  validate(value: any){
    return value == Status.open || value == Status.onProgres || value == Status.done;
  }
}
