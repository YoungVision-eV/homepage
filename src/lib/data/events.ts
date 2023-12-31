import EventImage1 from '$lib/assets/projects-event-image-1.jpeg?enhanced';
import EventImage2 from '$lib/assets/projects-event-image-2.jpeg?enhanced';
import EventImage3 from '$lib/assets/projects-event-image-3.jpeg?enhanced';
import calendarCover from '$lib/assets/calendar-cover.jpeg?enhanced';
import pastEvent from '$lib/assets/calendar-past-event.jpeg?enhanced';
import thirdEvent from '$lib/assets/calendar-third-event.jpeg?enhanced';
import type { Testimonial } from './testimonials';

type YVEvent = {
	slug: string;
	title: string;
	day: string;
	month: string;
	short_description: string;
	image: string;
	for_all: boolean;
	testimonials: Testimonial[];
	future?: string;
};

const yearlyEvents: YVEvent[] = [
	{
		slug: 'summer-gathering',
		title: 'Sommer Gathering',
		day: '2',
		month: 'September',
		short_description:
			'Unsere jährliche Sommerveranstaltung ist für viele das Highlight des Jahres!',
		image: EventImage1,
		for_all: true,
		testimonials: []
	},
	{
		slug: 'silvester',
		title: 'Silvester',
		day: '31',
		month: 'Dezember',
		short_description:
			'Lass uns das vergangene Jahr ausklingen lassen und gemeinsam in das neue Jahr starten!',
		image: EventImage2,
		for_all: true,
		testimonials: []
	},
	{
		slug: 'mitgliederversammlung',
		title: 'Mitgliederversammlung',
		day: '4',
		month: 'April',
		short_description: 'Werde Mitglied und entscheide gemeinsam über die Zukunft von YoungVision!',
		image: EventImage3,
		for_all: false,
		testimonials: []
	}
];

const next3Events = [
	{
		title: 'Silvester',
		date: new Date(2023, 11, 29),
		description: 'Lass uns gemeinsam in das neue Jahr starten!',
		image: {
			src: thirdEvent
		}
	},
	{
		title: 'Bauwoche in Rosow',
		date: new Date(2024, 3, 1),
		description: 'Können wir das schaffen? Yo wir schaffen das!',
		image: {
			src: calendarCover
		}
	},
	{
		title: 'Mitgliederversammlung',
		date: new Date(2024, 3, 4),
		description: 'Alle Jahre wieder: Sei dabei, entscheide und gestalte mit!',
		image: {
			src: pastEvent
		}
	}
	/*{
		title: 'Gathering',
		date: new Date(2024, 9, 2),
		description: 'Das Highlight des Jahres',
		image: {
			src: thirdEvent
		}
	}*/
];

export function getEventBySlug(slug: string) {
	return yearlyEvents.find((e) => e.slug === slug);
}

export function getAllYearlyEvents() {
	return yearlyEvents;
}

export function getNext3Events() {
	return next3Events;
}
