import { AppointmentEvent, EventType } from "../events/AppointmentEvent";

class EventStore {
  private readonly events: AppointmentEvent[] = [
    {
      id: "event-1",
      type: EventType.CREATED,
      appointment: {
        id: "appointment-1",
        day: "2024-09-15",
        startTime: "10:00",
        endTime: "11:00",
        technician: {
          id: "t1",
          name: "John Doe",
          age: 35,
          gender: "Male",
        },
        taskDescription: "Austauch der Rauchwarnmelder",
      },
      timestamp: new Date("2024-09-01T10:00:00Z"),
    },
  ];

  async saveEvent(event: AppointmentEvent): Promise<void> {
    this.events.push(event);
  }

  async getAllEvents(): Promise<AppointmentEvent[]> {
    return this.events;
  }
}

export default new EventStore();
