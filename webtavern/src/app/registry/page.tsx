import ExploreComponents from '@/components/explore/ExploreComponents';
import ChainTitle from '@/components/base/ChainTitle';

export default function Registry() {
  return (
    <main className='font-signika'>
       <ExploreComponents />
  </main>
    // <main className='items-center py-12 md:py-24 font-anon'>
    //   <section className='pt-36 min-w-full'>
    //     <ChainTitle title='Registry' />
    //   </section>
    //   <section id='intro' className=' items-center p-12 md:p-24 '>
    //     <div className='flex'>
    //       <div className='justify-right md:w-1/2'></div>
    //       <div className='justify-right md:w-1/2 '>
    //         <p>
    //           These components are the building blocks of games.  
    //           Each one provides both game functions, which you can use for your gameplay, 
    //           as well as config functions, which you can use to customize, stylize, 
    //           and personalize the rules.
    //           <br />
    //           <br />
    //           Every function in a component has required keys and created keys.  
    //           Required keys can either be passed in by the player when they execute a Flow, 
    //           they can be hardcoded by the game creator, or they can be
    //           created by another preceding component in a Flow.  
     
    //         </p>
    //       </div>

    //     </div>
    //   </section>
    //   <ExploreComponents />
    // </main>
  );
}
