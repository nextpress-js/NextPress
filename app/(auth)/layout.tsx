import "../globals.css";
import { Toaster }  from "@/components/ui/toaster"

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{
          background: "url(/authLight.jpg) fixed bottom no-repeat",
          backgroundSize: 'cover'
        }}
      >
        <div className="flex justify-center items-center h-screen">{children}</div>
        <Toaster />
      </body>
    </html>
  );
}
