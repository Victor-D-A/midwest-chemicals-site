import Footer from "../outputs/Footer";
import Header from "../outputs/Header";
import Hero from "../outputs/Hero";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="app__main">
        {/* Placeholder copy: replace with the real wording before launch. */}
        <Hero
          title="Placeholder headline goes here"
          subtitle="A short placeholder sentence describing what the company does and who it serves."
          ctaLabel="Placeholder button"
          ctaHref="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}
