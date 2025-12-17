
import React from 'react';
import { usePageTitle } from '../hooks/usePageTitle';

const PageHeader: React.FC<{ title: string }> = ({ title }) => (
  <div className="bg-backgroundDark py-16 sm:py-20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-4xl md:text-5xl font-bold font-heading text-textHeadingDarkBg">{title}</h1>
    </div>
  </div>
);

const ContentBlock: React.FC = () => (
  <div className="prose prose-lg lg:prose-xl max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-gray-700 leading-relaxed">
    <h2>Our Mission</h2>
    <p>
      The Blessed Children's Hope Foundation is founded on a simple yet profound principle: every child deserves a healthy start in life. Our core mission is to provide relief from sickness and to actively preserve the health of children, particularly those in underserved communities. We believe that by ensuring access to quality healthcare, nutritional support, and a safe environment, we can unlock a world of potential for every child we reach.
    </p>
    
    <img src="https://picsum.photos/800/500?image=177" alt="A caring healthcare professional listening to a child's heartbeat." className="rounded-lg shadow-md my-8"/>

    <h2>Our History</h2>
    <p>
      Established over a decade ago by a group of compassionate healthcare professionals and community leaders, our foundation was born from the direct observation of health disparities affecting children. What began as a small, local initiative providing basic health check-ups has grown into a comprehensive organization with multiple programs addressing the complex health needs of children today. Through years of dedicated service and the generous support of our community, we have become a steadfast beacon of hope for countless families.
    </p>

    <h2>Our Team</h2>
    <p>
      Our strength lies in our people. The Blessed Children's Hope Foundation is powered by a dedicated team of medical experts, program coordinators, administrative staff, and a vast network of passionate volunteers. Each member of our team brings a unique set of skills and an unwavering commitment to our cause. We work collaboratively, with integrity and compassion, to ensure that every resource is maximized for the benefit of the children we serve. We are united in our vision of a world where all children are healthy, safe, and empowered to reach their full potential.
    </p>
  </div>
);

const AboutPage: React.FC = () => {
  usePageTitle("About | Blessed Children's Hope Foundation");
  return (
    <>
      <PageHeader title="About Us" />
      <ContentBlock />
    </>
  );
};

export default AboutPage;
