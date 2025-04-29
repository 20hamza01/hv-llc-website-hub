
import Home from './Home';
import { LazyMotion, domAnimation } from 'framer-motion';

const Index = () => {
  return (
    <LazyMotion features={domAnimation}>
      <Home />
    </LazyMotion>
  );
};

export default Index;
