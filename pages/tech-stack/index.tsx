import Head from 'next/head';
import { TechStack } from '../../components/TechStack';
import { skills } from '../../config/skills';

const TechStackPage = () => {
  return (
    <>
      <Head>
        <title>Daniel Developer - Tech Stack</title>
      </Head>
      <TechStack skills={skills} />
    </>
  );
};

export default TechStackPage;
