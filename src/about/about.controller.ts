import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { AboutService } from './about.service';

@Controller('about')
export class AboutController {
    constructor(private readonly aboutService: AboutService) { }

    @Get()
    root(@Res() res: Response) {
        return res.render(
            this.aboutService.getView(), 
            {
                title: 'About Us',
                class: 'tutorial-page'
            }
        );
    }
    
}
