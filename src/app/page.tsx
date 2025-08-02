import { Suspense } from 'react';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Programs from './components/Programs';
import Faculty from './components/Faculty';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Programs />
      <Faculty />
      <Footer />
    </main>
  );
}
