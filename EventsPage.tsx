
import React from 'react';
import { usePageTitle } from '../hooks/usePageTitle';

const PageHeader: React.FC<{ title: string }> = ({ title }) => (
  <div className="bg-backgroundDark py-16 sm:py-20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-4xl md:text-5xl font-bold font-heading text-textHeadingDarkBg">{title}</h1>
      <p className="mt-4 text-lg text-textBodyDarkBg max-w-3xl mx-auto">Join us for our upcoming events, workshops, and community gatherings. Let's make a difference together.</p>
    </div>
  </div>
);

interface Event {
  title: string;
  date: string;
  location: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

const events: Event[] = [
  {
    title: "Annual Hope Gala & Fundraiser",
    date: "November 18, 2024",
    location: "The Grand Ballroom, City Center",
    description: "An elegant evening of dining, entertainment, and auctions to raise critical funds for our specialized medical aid program. Your attendance supports life-saving treatments for children.",
    imageUrl: "https://picsum.photos/600/400?image=1074",
    imageAlt: "A beautifully decorated ballroom set for a gala event."
  },
  {
    title: "Community Health Fair",
    date: "September 22, 2024",
    location: "Westside Community Park",
    description: "A free, fun-filled day for families. Our mobile clinics will be on-site providing health screenings, and we'll have workshops on nutrition and wellness.",
    imageUrl: "https://picsum.photos/600/400?image=106",
    imageAlt: "A vibrant outdoor community fair with tents and families."
  },
  {
    title: "Volunteer Orientation Day",
    date: "August 15, 2024",
    location: "Our Foundation Headquarters",
    description: "Interested in joining our cause? Come learn about volunteer opportunities, meet our team, and see how you can contribute your time and skills to help children.",
    imageUrl: "https://picsum.photos/600/400?image=1079",
    imageAlt: "A diverse group of people sitting and listening during a presentation."
  },
];

const EventList: React.FC = () => (
  <div className="bg-white py-20 sm:py-24">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="space-y-12">
        {events.map((event, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center bg-gray-50 rounded-lg shadow-md overflow-hidden gap-8">
            <img src={event.imageUrl} alt={event.imageAlt} className="w-full md:w-1/3 h-64 md:h-full object-cover" />
            <div className="p-8">
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                <span>{event.date}</span>
                <span>&bull;</span>
                <span>{event.location}</span>
              </div>
              <h3 className="text-2xl font-bold font-heading text-textLightBg mb-3">{event.title}</h3>
              <p className="text-gray-600 mb-4">{event.description}</p>
              <a href="#" className="font-semibold text-primaryBrand hover:text-sky-700 transition-colors">
                Learn More &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);


const EventsPage: React.FC = () => {
  usePageTitle("Events | Blessed Children's Hope Foundation");
  return (
    <>
      <PageHeader title="Upcoming Events" />
      <EventList />
    </>
  );
};

export default EventsPage;
