import "../globals.css";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{
          background: "url(/authDark.jpg) fixed center no-repeat",
          backgroundSize: 'cover'
        }}
      >
        <div className="flex justify-center items-center h-screen">{children}</div>
      </body>
    </html>
  );
}
