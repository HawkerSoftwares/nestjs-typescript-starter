import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { TechnologiesService } from './technologies.service';

@Controller('technologies')
export class TechnologiesController {
    constructor(private readonly technologiesService: TechnologiesService) {}

    @Get()
    root(@Res() res: Response) {
      return res.render(
        this.technologiesService.getView(), 
        {
          title: 'Technologies We use',
          class: 'index-page'
        }
      );
    }

}
