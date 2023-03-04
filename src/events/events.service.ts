import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from './events.entity';


@Injectable()
export class EventsService {
  constructor(@InjectRepository(Event) private repoE: Repository<Event>) {}

  create(description: string, userId: string, location: string, latitude: number, longitude: number) {
    const event = this.repoE.create({ description, userId, location, latitude, longitude });

    return this.repoE.save(event);
  }

  findOne(id: number) {
    return this.repoE.findOneBy({ id });
  }

  find(location: string) {
    return this.repoE.find({ where: { location } });
  }

  async update(id: number, attrs: Partial<Event>) {
    const event = await this.findOne(id);
    if (!event) {
      throw new Error('event not found');
    }
    Object.assign(event, attrs);
    return this.repoE.save(event);
  }

  async remove(id: number) {
    const event = await this.findOne(id);
    if (!event) {
      throw new Error('event not found');
    }
    return this.repoE.remove(event);
  }
}
