type TitleProps = {
  title: string;
}

export default function SmallTitle(props: TitleProps) {
  
  return (
    <div className='text-center text-3xl md:text-5xl border-b-2 border-t-2 border-white py-2 uppercase'>
      {props.title}
    </div>
  );
}
