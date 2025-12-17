
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
  <div className="prose prose-lg max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-gray-700 leading-relaxed">
    <h2>DMCA Notification</h2>
    <p>
      Blessed Children's Hope Foundation respects the intellectual property rights of others and expects its users to do the same. In accordance with the Digital Millennium Copyright Act of 1998, the text of which may be found on the U.S. Copyright Office website at http://www.copyright.gov/legislation/dmca.pdf, we will respond expeditiously to claims of copyright infringement committed using our website that are reported to our Designated Copyright Agent.
    </p>

    <h2>Notification of Infringement</h2>
    <p>
      If you are a copyright owner, authorized to act on behalf of one, or authorized to act under any exclusive right under copyright, please report alleged copyright infringements taking place on or through the site by completing the following DMCA Notice of Alleged Infringement and delivering it to our Designated Copyright Agent. Upon receipt of the Notice as described below, we will take whatever action, in our sole discretion, we deem appropriate, including removal of the challenged material from the site.
    </p>

    <p>To file a notice of infringement with us, you must provide a written communication that sets forth the items specified below. Please note that you will be liable for damages (including costs and attorneys' fees) if you materially misrepresent that a product or activity is infringing your copyrights.</p>

    <ul>
        <li>A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</li>
        <li>Identification of the copyrighted work claimed to have been infringed.</li>
        <li>Identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be disabled, and information reasonably sufficient to permit us to locate the material.</li>
        <li>Information reasonably sufficient to permit us to contact you, such as an address, telephone number, and, if available, an electronic mail address at which you may be contacted.</li>
        <li>A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.</li>
        <li>A statement that the information in the notification is accurate, and under penalty of perjury, that you are authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</li>
    </ul>

    <h2>Contact Information</h2>
    <p>
      Please send your DMCA notice to our designated agent at info@coalitionforcyf-charity.org.
    </p>
  </div>
);

const DmcaPage: React.FC = () => {
  usePageTitle("DMCA Policy | Blessed Children's Hope Foundation");
  return (
    <>
      <PageHeader title="DMCA Policy" />
      <ContentBlock />
    </>
  );
};

export default DmcaPage;
