import { Metadata } from 'next';
import { Suspense } from 'react';

import HomePage from "./components/Home";
import Loading from './loading';

export const metadata: Metadata = {
  title: "CDT Tech",
  description: "Capacitação Digital para a Terceira Idade",
};

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <HomePage />
    </Suspense>  
  );
}