import { Header } from "./header";
import { Footer } from "./footer";

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
    </>
  );
}
