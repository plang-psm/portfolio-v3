import About from '@components/About';
import Skills from '@components/Skills';
import Projects from '@components/Projects';
import Header from '@components/Header';
import Contact from '@components/Contact';

export default function Home() {
  return (
    <div className='py-20 flex flex-col gap-2 text-lg'>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
