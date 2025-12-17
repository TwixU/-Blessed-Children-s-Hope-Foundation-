
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
    <h2>1. Agreement to Terms</h2>
    <p>
      By using our website, coalitionforcyf-charity.org (the "Site"), you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use the Site. We may modify these terms at any time, and such modifications shall be effective immediately upon posting the modified terms on the Site.
    </p>

    <h2>2. Use of the Site</h2>
    <p>
      You may use the Site for lawful purposes only. You may not use the Site to post or transmit any material that is unlawful, threatening, abusive, defamatory, obscene, or otherwise objectionable. You are responsible for ensuring that any information you provide is accurate and up-to-date.
    </p>

    <h2>3. Intellectual Property</h2>
    <p>
      The content on the Site, including text, graphics, logos, and images, is the property of Blessed Children's Hope Foundation or its content suppliers and is protected by international copyright and trademark laws. You may not reproduce, distribute, or otherwise use any of the content on the Site without our prior written permission.
    </p>
    
    <h2>4. Links to Third-Party Websites</h2>
    <p>
      The Site may contain links to third-party websites. These links are provided for your convenience only, and we are not responsible for the content or practices of any third-party websites. You access any third-party websites at your own risk.
    </p>
    
    <h2>5. Disclaimer of Warranties</h2>
    <p>
      THE SITE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. WE MAKE NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THE SITE OR THE INFORMATION, CONTENT, MATERIALS, OR PRODUCTS INCLUDED ON THE SITE. TO THE FULL EXTENT PERMISSIBLE BY APPLICABLE LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.
    </p>

    <h2>6. Limitation of Liability</h2>
    <p>
      IN NO EVENT SHALL BLESSED CHILDREN'S HOPE FOUNDATION BE LIABLE FOR ANY DAMAGES OF ANY KIND ARISING FROM THE USE OF THE SITE, INCLUDING, BUT NOT LIMITED TO, DIRECT, INDIRECT, INCIDENTAL, PUNITIVE, AND CONSEQUENTIAL DAMAGES.
    </p>
    
    <h2>7. Governing Law</h2>
    <p>
      These terms shall be governed by and construed in accordance with the laws of the United Kingdom, without giving effect to any principles of conflicts of law.
    </p>
  </div>
);

const TermsPage: React.FC = () => {
  usePageTitle("Terms of Service | Blessed Children's Hope Foundation");
  return (
    <>
      <PageHeader title="Terms of Service" />
      <ContentBlock />
    </>
  );
};

export default TermsPage;
