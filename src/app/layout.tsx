import Header from '@/components/Header';
import '@/styles/tailwind.css';

function MainLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="p-2  bg-neutral-100">
        <Header />
        {children}
      </body>
    </html>
  );
}

export default MainLayout;
