import { Selection } from '../components/selection';
import { Events } from '../types';
import './landing.css';

interface LandingProps {
  topic: string;
  sock: (type: Events, data: {}) => void;
}

export const Landing = ({ topic, sock }: LandingProps) => {
  return (
    <>
      <h2>{topic}</h2>
      <p className='description'>
        For these courses, you will use your local development environment to
        complete interactive tutorials and build projects.
      </p>
      <p>
        These courses start off with basic cryptographic concepts. Using Nodejs,
        you will learn everything from cryptographic hash functions to building
        your own blockchain.
      </p>
      <p>Next, you will learn about different consensus mechanisms.</p>
      <p>
        Finally, you will learn Rust, and WASM in the context of a blockchain.
      </p>
      <a className='faq' href='#'>
        Link to FAQ related to course
      </a>
      <Selection {...{ topic, sock }} />
    </>
  );
};
