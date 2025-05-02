import ComponentHeader from '@/components/component/ComponentHeader';
import ComponentStats from '@/components/component/ComponentStats';
import ComponentTabs from '@/components/component/ComponentTabs';
import { Address } from 'viem';

export default function Module({ params }: { params: { address: string } }) {



  return (
    <main className='font-signika px-8 py-20 md:px-16'>
      <section className='border border-white border-dashed'>


      <ComponentHeader moduleAddress={params.address as Address} />
      {/* <Divider /> */}
      <ComponentTabs moduleAddress={params.address as Address} />


      {/* <ComponentStats moduleAddress={params.address as Address} /> */}
      </section>

    </main>
  );
}
