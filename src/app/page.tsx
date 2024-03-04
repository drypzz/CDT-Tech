import { Metadata } from 'next';
import HomePage from "./components/Home";

export const metadata: Metadata = {
  title: "CDT Tech",
  description: "Capacitação Digital para a Terceira Idade",
};

export default function Home() {
  return <HomePage />;
}