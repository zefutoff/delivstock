export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen flex justify-center items-center">
      <div className="">{children}</div>
    </section>
  );
}

//inline-block max-w-lg text-center justify-center flex items-center justify-center
