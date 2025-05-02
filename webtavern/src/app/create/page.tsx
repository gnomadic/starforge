import TwoPaneCreate from '@/components/create/TwoPaneCreate';
import { Button } from '@/components/ui/button';

export default function Create() {

  return (

    <main className=' font-signika min-h-screen'>
      <section>
        <div className='mx-auto px-24 pt-48 text-2xl'>
          Creating your own games with Tavern is coming soon!
        </div>
        <div className='mx-auto px-24 p-8 text-2xl'>
          In the meantime, join us on telegram to get the latest updates and be the first to know when this feature is available.
        </div>
        <div className='px-24 p-8 text-2xl'>
          <Button variant='outline' className='bg-white text-black hover:bg-gray-200'>
            <a href='https://t.me/+Js2_GaKRbkBkZGE5' target='_blank' rel='noopener noreferrer'>
              Join our Telegram
            </a>
          </Button>
        </div>
      </section>
    </main>

  );
}
