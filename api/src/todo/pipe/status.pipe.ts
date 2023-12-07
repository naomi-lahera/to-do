import { ArgumentMetadata, Injectable, PipeTransform, BadRequestException } from '@nestjs/common';
import { Status } from '../entity/todo.entity';

@Injectable()
export class StatusPipe implements PipeTransform {

  transform(value: any) {
    console.log(Status[value])
    if(!Status[value])
      throw new BadRequestException(`${value} is a no valid status`);
    return value;
  }
}
