import { Module } from '@nestjs/common';
import { ContactsController } from './contacts.controller';
import { ContactsService } from './contacts.service';

@Module({
  providers: [ContactsService],
  controllers: [ContactsController]
})
export class ContactsModule {}
