import PlayNav from "@/components/PlayNav";

export default function PlayLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="md:mx-12 lg:mx-24">

      <PlayNav />

      {children}

    </section>
  );
}
