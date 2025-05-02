import { GlobeAltIcon } from '@heroicons/react/20/solid';

export default function Divider() {
  return (
    <div className='flex w-screen justify-center'>
      <div className='mb-4 border-b-2 border-white w-1/12 mr-8'></div>
      <GlobeAltIcon
        className='w-8 h-8 '
      />
      <div className='mb-4 border-b-2 border-white w-1/12 ml-8'></div>

    </div>
  );
}
