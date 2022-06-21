import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { ContactsService } from './contacts.service';

@Controller('contact-us')
export class ContactsController {
    constructor(private readonly contactsService: ContactsService) { }

    @Get()
    root(@Res() res: Response) {
        return res.render(
            this.contactsService.getView(),
            {
                title: 'Contact Us',
                class: 'tutorial-page'
            }
        );
    }
    
}
