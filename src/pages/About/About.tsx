import * as React from 'react';
import Meta from '@/components/Meta';
import Founder from '@/components/About/Founder';
import Approach from '@/components/About/Approach';
import Recovery from '@/components/About/Recovery';
import Mission from '@/components/About/Mission';
import Reason from '@/components/About/Reason';
import Contact from '@/components/About/Contact';


export default function AboutPage() {
  return (
    <>
      <Meta title="About" />
      <Founder />
      <div>
        <Recovery />
        <Mission />
        <Reason />
        <Approach />
        <Contact />
      </div>
    </>
      
  );
}
