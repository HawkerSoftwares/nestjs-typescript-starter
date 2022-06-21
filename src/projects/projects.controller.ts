import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
    constructor(private readonly projectsService: ProjectsService) {}

    @Get()
    root(@Res() res: Response) {
      return res.render(
        this.projectsService.getView(),
        {
          title: 'Projects we delivered',
          class: 'tutorial-page'
        }
      );
    }

}
