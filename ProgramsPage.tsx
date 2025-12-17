
import React from 'react';
import { usePageTitle } from '../hooks/usePageTitle';

const PageHeader: React.FC<{ title: string }> = ({ title }) => (
  <div className="bg-backgroundDark py-16 sm:py-20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-4xl md:text-5xl font-bold font-heading text-textHeadingDarkBg">{title}</h1>
      <p className="mt-4 text-lg text-textBodyDarkBg max-w-3xl mx-auto">Discover the initiatives we've created to provide critical health support and promote well-being for children.</p>
    </div>
  </div>
);

interface Program {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

const programs: Program[] = [
  {
    title: "Mobile Health Clinics",
    description: "Our fully-equipped mobile clinics travel to remote and underserved areas, providing essential primary care, vaccinations, and health screenings directly to children who need it most.",
    imageUrl: "https://picsum.photos/600/400?image=24",
    imageAlt: "A friendly doctor smiling inside a mobile health clinic van."
  },
  {
    title: "Nutritional Support Program",
    description: "We combat malnutrition by distributing vital food packages and providing educational workshops for parents on healthy eating, ensuring children receive the nutrients they need to grow strong.",
    imageUrl: "https://picsum.photos/600/400?image=180",
    imageAlt: "A volunteer handing a bag of fresh vegetables to a grateful mother and child."
  },
  {
    title: "Mental Wellness Workshops",
    description: "In partnership with child psychologists, we offer workshops and counseling services to support the mental and emotional well-being of children, creating safe spaces for them to express themselves.",
    imageUrl: "https://picsum.photos/600/400?image=29",
    imageAlt: "A group of children sitting in a circle during a guided wellness activity."
  },
  {
    title: "Play Therapy Sessions",
    description: "Utilizing therapeutic play, our certified therapists help children process difficult experiences and develop healthy coping mechanisms in a supportive and engaging environment.",
    imageUrl: "https://picsum.photos/600/400?image=145",
    imageAlt: "A child happily playing with colorful building blocks during a therapy session."
  },
  {
    title: "Health Education for Families",
    description: "We empower families with knowledge about hygiene, disease prevention, and first aid through community-based training sessions, creating a healthier home environment for children.",
    imageUrl: "https://picsum.photos/600/400?image=200",
    imageAlt: "A health educator presenting to an engaged group of parents in a community hall."
  },
  {
    title: "Specialized Medical Aid",
    description: "For children with chronic or complex illnesses, we provide financial assistance and logistical support to help them access specialized medical treatments and therapies.",
    imageUrl: "https://picsum.photos/600/400?image=10",
    imageAlt: "A hopeful portrait of a child looking out a hospital window."
  }
];

const ProgramList: React.FC = () => (
  <div className="bg-white py-20 sm:py-24">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map((program) => (
          <div key={program.title} className="bg-gray-50 rounded-lg shadow-md overflow-hidden flex flex-col transition-transform transform hover:-translate-y-2">
            <img src={program.imageUrl} alt={program.imageAlt} className="w-full h-56 object-cover" />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold font-heading text-textLightBg mb-2">{program.title}</h3>
              <p className="text-gray-600 flex-grow">{program.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ProgramsPage: React.FC = () => {
  usePageTitle("Our Programs | Blessed Children's Hope Foundation");
  return (
    <>
      <PageHeader title="Our Programs" />
      <ProgramList />
    </>
  );
};

export default ProgramsPage;
