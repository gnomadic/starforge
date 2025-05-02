type TitleProps = {
  title: string;
}

export default function BigTitle(props: TitleProps) {
  return (
    <div className='uppercase text-7xl md:text-9xl border-t-2 border-b-2 border-white text-center '>
      {props.title}
    </div>
  );
}
