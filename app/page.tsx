

import HeroText from '@/Components/heroText'
import logo from './logo1.png';
export default function Home() {
  return (
   <div>
    <div className='p-6 w-80 h-auto'>
    <img src={logo.src} alt="logo" />
    </div>
    <HeroText />
   </div>
  );
}
