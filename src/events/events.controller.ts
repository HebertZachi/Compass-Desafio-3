import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { Serialize } from 'src/Interceptors/serialize.Interceptors';
import { CreateEventDto } from './dto/create-event.dto';
import { EventDTO } from './dto/event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { EventsService } from './events.service';

@Serialize(EventDTO)
@Controller('/api/v1/events')
export class EventsController {
  constructor(private eventsService: EventsService,) {}

  @Post('/')
  createEvent(@Body() data: CreateEventDto) {
    this.eventsService.create(data.description, data.userId, data.location, data.latitude, data.longitude);
  }

  @Get('/')
  findAllEvents(@Query('location') location: string) {
    return this.eventsService.find(location);
  }

  @Get('/:id')
  findEvent(@Param('id') id: string) {
    return this.eventsService.findOne(parseInt(id));
  }

  @Patch('/:id')
  updateEvent(@Param('id') id: string, @Body() data: UpdateEventDto) {
    return this.eventsService.update(parseInt(id), data);
  }

  @Delete('/:id')
  removeEvent(@Param('id') id: string) {
    return this.eventsService.remove(parseInt(id));
  }
}
