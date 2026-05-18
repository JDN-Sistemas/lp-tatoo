import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight, Clock, MapPin, Layers, Zap, Circle, BookOpen, Search,
  Star, ChevronLeft, ChevronRight, Plus, Menu, X,
  Youtube, Twitter, Instagram
} from 'lucide-react';
import '../fighting-star.css';

const WHATSAPP_URL = 'https://wa.me/5500000000000?text=Olá!%20Gostaria%20de%20agendar%20uma%20visita.';

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('fs-visible'); obs.disconnect(); } },
      { threshold: 0 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return isMobile;
}

function FourPointStar({ size = 28, color = 'var(--fs-accent)' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="16,1 18,9 14,9" fill={color} />
      <rect x="14.5" y="9" width="3" height="10" fill={color} />
      <rect x="9" y="19" width="14" height="2.5" rx="1" fill={color} />
      <rect x="14" y="21.5" width="4" height="7" rx="1.5" fill={color} />
      <ellipse cx="16" cy="29.5" rx="3.5" ry="2" fill={color} />
    </svg>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    if (!isMobile) setMenuOpen(false);
  }, [isMobile]);

  const linkStyle: React.CSSProperties = {
    fontFamily: 'Cinzel, serif',
    fontSize: '0.7rem',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: 'var(--fs-text)',
    textDecoration: 'none',
    transition: 'color 0.25s ease',
    cursor: 'pointer',
  };

  if (isMobile) {
    return (
      <>
        <nav style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          background: scrolled ? 'rgba(18,18,18,0.98)' : 'rgba(14,14,14,0.92)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--fs-divider)',
          padding: '0 20px',
          height: 64,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          transition: 'background 0.3s ease',
        }}>
          <img src="/images/tatuador/logo-tatoo-removebg-preview.png" alt="Logo" style={{ height: 56, width: 56, objectFit: 'contain' }} />
          <button
            onClick={() => setMenuOpen(v => !v)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--fs-text)', padding: 8, display: 'flex', alignItems: 'center' }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile dropdown menu */}
        <div style={{
          position: 'fixed', top: 64, left: 0, right: 0, zIndex: 99,
          background: 'rgba(14,14,14,0.98)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--fs-divider)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0,
          maxHeight: menuOpen ? 300 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.35s ease',
        }}>
          {[
            { label: 'INÍCIO', href: '#inicio' },
            { label: 'PORTFÓLIO', href: '#portfolio' },
            { label: 'DEPOIMENTOS', href: '#depoimentos' },
            { label: 'FAQ', href: '#faq' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              style={{ ...linkStyle, padding: '18px 0', width: '100%', textAlign: 'center', borderBottom: '1px solid var(--fs-divider)' }}
            >
              {label}
            </a>
          ))}
        </div>
      </>
    );
  }

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '32px 0',
      transition: 'background 0.3s ease',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <div style={{
        width: 'fit-content',
        background: scrolled ? 'rgba(18,18,18,0.98)' : 'rgba(14,14,14,0.92)',
        backdropFilter: 'blur(12px)',
        border: '1px solid var(--fs-divider)',
        borderRadius: 50,
        padding: '0 56px',
        height: 64,
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 56,
        transition: 'background 0.3s ease',
      }}>
        <div style={{ display: 'flex', gap: 48 }}>
          {[{ label: 'INÍCIO', href: '#inicio' }, { label: 'PORTFÓLIO', href: '#portfolio' }].map(({ label, href }) => (
            <a key={label} href={href} style={linkStyle}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--fs-green)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--fs-text)')}
            >{label}</a>
          ))}
        </div>
        <img src="/images/tatuador/logo-tatoo-removebg-preview.png" alt="Logo" style={{ height: 120, width: 120, objectFit: 'contain' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
          {[{ label: 'DEPOIMENTOS', href: '#depoimentos' }, { label: 'FAQ', href: '#faq' }].map(({ label, href }) => (
            <a key={label} href={href} style={linkStyle}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--fs-green)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--fs-text)')}
            >{label}</a>
          ))}
        </div>
      </div>
    </nav>
  );
}

const TATTOO_STYLES = ['Realismo', 'Trabalhos Coloridos', 'Artes Exclusivas'];

function HeroSection() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <section id="inicio" style={{ minHeight: '100dvh', paddingTop: 64, position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        <div className="fs-blob" style={{ width: 300, height: 300, right: '-80px', top: '30%', opacity: 0.05 }} />
        <div style={{ width: '100%', padding: '0 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          {/* Hero image on mobile */}
          <div style={{ position: 'relative', width: '100%', maxWidth: 360, height: 'min(300px, 42vh)', marginBottom: 8 }}>
            <img
              src="/images/tatuador/tatuador-hero-removebg.png"
              alt="Figura tatuada"
              style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center bottom' }}
            />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 120, background: 'linear-gradient(to bottom, transparent, var(--fs-bg))' }} />
          </div>

          <div style={{ paddingBottom: 40, animation: 'fadeInUp 0.7s ease 0.2s both' }}>
            <h1 style={{ fontFamily: 'Cinzel Decorative, serif', fontWeight: 700, fontSize: 'clamp(26px, 9vw, 40px)', lineHeight: 1.15, marginBottom: 16 }}>
              <span style={{ display: 'block', fontStyle: 'italic', color: 'var(--fs-accent)' }}>Ninja</span>
              <span style={{ display: 'block', color: 'var(--fs-text)' }}>no preto</span>
              <span style={{ display: 'block', color: 'var(--fs-text)' }}>e cinza</span>
            </h1>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center', marginBottom: 20 }}>
              {TATTOO_STYLES.map(s => (
                <span key={s} style={{ fontFamily: 'Cinzel, serif', fontSize: '0.58rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--fs-accent)', border: '1px solid var(--fs-accent)', borderRadius: 4, padding: '5px 12px', opacity: 0.85 }}>{s}</span>
              ))}
            </div>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 14, marginTop: 8 }}>
              <span style={{ color: 'var(--fs-accent)', fontSize: '1rem', opacity: 0.7 }}>◆</span>
              <button
                style={{
                  background: 'transparent',
                  color: 'var(--fs-accent)',
                  border: '2px solid var(--fs-accent)',
                  borderRadius: 8,
                  fontFamily: 'Cinzel, serif',
                  fontWeight: 700,
                  fontSize: '0.72rem',
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  padding: '16px 32px',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease, background 0.25s ease, color 0.25s ease',
                  boxShadow: '0 6px 28px rgba(114,224,21,0.18)',
                }}
                onClick={() => window.open(WHATSAPP_URL, '_blank')}
              >
                AGENDAR VISITA
              </button>
              <span style={{ color: 'var(--fs-accent)', fontSize: '1rem', opacity: 0.7 }}>◆</span>
            </div>

            <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--fs-muted)', fontFamily: 'Cinzel, serif', fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                <Clock size={15} color="var(--fs-accent)" />
                <span>Atendimento personalizado com hora marcada</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--fs-muted)', fontFamily: 'Cinzel, serif', fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                <MapPin size={15} color="var(--fs-accent)" />
                <span>Região nobre · às margens do lago · próximo ao shopping</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="inicio" style={{ minHeight: '100dvh', paddingTop: 72, position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
      <div className="fs-blob" style={{ width: 500, height: 500, right: '30%', top: '50%', transform: 'translateY(-50%)', opacity: 0.05 }} />
      <div className="fs-blob" style={{ width: 300, height: 300, left: '-80px', bottom: '10%', opacity: 0.07, borderRadius: '50%' }} />
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 64px', width: '100%', display: 'flex', alignItems: 'center', gap: 40 }}>
        <div style={{ flex: '0 0 45%', paddingRight: 40, paddingTop: 48, paddingBottom: 48, animation: 'fadeInUp 0.7s ease 0.1s both' }}>
          <h1 style={{ fontFamily: 'Cinzel Decorative, serif', fontWeight: 700, fontSize: 68, lineHeight: 1.1, marginBottom: 16 }}>
            <span style={{ display: 'block', fontStyle: 'italic', color: 'var(--fs-accent)' }}>Ninja</span>
            <span style={{ display: 'block', color: 'var(--fs-text)' }}>no preto</span>
            <span style={{ display: 'block', color: 'var(--fs-text)' }}>e cinza</span>
          </h1>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
            {TATTOO_STYLES.map(s => (
              <span key={s} style={{ fontFamily: 'Cinzel, serif', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--fs-accent)', border: '1px solid var(--fs-accent)', borderRadius: 4, padding: '5px 14px', opacity: 0.85 }}>{s}</span>
            ))}
          </div>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 14, marginTop: 8 }}>
            <span style={{ color: 'var(--fs-accent)', fontSize: '1rem', opacity: 0.7 }}>◆</span>
            <button
              style={{
                background: 'transparent',
                color: 'var(--fs-accent)',
                border: '2px solid var(--fs-accent)',
                borderRadius: 8,
                fontFamily: 'Cinzel, serif',
                fontWeight: 700,
                fontSize: '0.72rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                padding: '16px 44px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 0,
                transition: 'transform 0.2s ease, box-shadow 0.2s ease, background 0.25s ease, color 0.25s ease',
                boxShadow: '0 6px 28px rgba(114,224,21,0.18)',
              }}
              onMouseEnter={e => { const b = e.currentTarget as HTMLButtonElement; b.style.transform = 'scale(1.04)'; b.style.background = 'var(--fs-accent)'; b.style.color = 'var(--fs-dark)'; }}
              onMouseLeave={e => { const b = e.currentTarget as HTMLButtonElement; b.style.transform = 'scale(1)'; b.style.background = 'transparent'; b.style.color = 'var(--fs-accent)'; }}
              onClick={() => window.open(WHATSAPP_URL, '_blank')}
            >
              AGENDAR VISITA
            </button>
            <span style={{ color: 'var(--fs-accent)', fontSize: '1rem', opacity: 0.7 }}>◆</span>
          </div>
          <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--fs-muted)', fontFamily: 'Cinzel, serif', fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              <Clock size={15} color="var(--fs-accent)" />
              <span>Atendimento personalizado com hora marcada</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--fs-muted)', fontFamily: 'Cinzel, serif', fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              <MapPin size={15} color="var(--fs-accent)" />
              <span>Região nobre · às margens do lago · próximo ao shopping</span>
            </div>
          </div>
        </div>
        <div style={{ flex: '0 0 55%', position: 'relative', height: 900 }}>
          <svg
            viewBox="0 0 400 600"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              position: 'absolute',
              top: '15%', right: '20%',
              width: '80%', height: '78%',
              zIndex: 0, opacity: 0.14,
            }}
          >
            <rect x="60" y="0" width="340" height="320" rx="18" fill="var(--fs-accent)" />
            <rect x="60" y="340" width="100" height="260" rx="14" fill="var(--fs-accent)" />
            <rect x="300" y="340" width="100" height="260" rx="14" fill="var(--fs-accent)" />
          </svg>
          <div style={{ position: 'absolute', inset: 0, borderRadius: 24, overflow: 'hidden', zIndex: 1 }}>
            <img src="/images/tatuador/tatuador-hero-removebg.png" alt="Figura tatuada" style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center center' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 240, background: 'linear-gradient(to bottom, transparent, var(--fs-bg))' }} />
          </div>
        </div>
      </div>
    </section>
  );
}

function PartnersStrip() {
  const isMobile = useIsMobile();
  const partners = [
    { icon: Layers, name: 'Layers' },
    { icon: Zap, name: 'Sisyphus' },
    { icon: Circle, name: 'Circooles' },
    { icon: BookOpen, name: 'Catalog' },
    { icon: Search, name: 'Quotient' },
  ];
  return (
    <div style={{ borderTop: '1px solid var(--fs-divider)', borderBottom: '1px solid var(--fs-divider)', background: 'var(--fs-bg2)', padding: '28px 0' }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        padding: isMobile ? '0 24px' : '0 64px',
        display: 'flex',
        justifyContent: isMobile ? 'center' : 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: isMobile ? 20 : 24,
      }}>
        {partners.map((P, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--fs-muted)', fontFamily: 'Cinzel, serif', fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', opacity: 0.65, cursor: 'default', transition: 'opacity 0.25s, color 0.25s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.opacity = '1'; (e.currentTarget as HTMLDivElement).style.color = 'var(--fs-accent)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.opacity = '0.65'; (e.currentTarget as HTMLDivElement).style.color = 'var(--fs-muted)'; }}
          >
            <P.icon size={16} strokeWidth={1.5} />
            <span>{P.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PortfolioSection() {
  const headRef = useReveal();
  const col1Ref = useReveal();
  const col2Ref = useReveal();
  const col3Ref = useReveal();
  const [hov, setHov] = useState<string | null>(null);
  const isMobile = useIsMobile();

  const cardStyle = (hover: boolean): React.CSSProperties => ({
    borderRadius: 12, overflow: 'hidden', position: 'relative', cursor: 'pointer',
    transform: hover ? 'scale(1.02)' : 'scale(1)',
    boxShadow: hover ? '0 8px 32px rgba(196,149,106,0.18)' : '0 2px 12px rgba(0,0,0,0.3)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  });

  if (isMobile) {
    return (
      <section id="portfolio" style={{ padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <div ref={headRef} className="fs-fade-up" style={{ marginBottom: 40 }}>
            <h2 style={{ fontFamily: 'Cinzel Decorative, serif', fontSize: 28, lineHeight: 1.2, color: 'var(--fs-text)' }}>
              Tatuador premiado em convenção!
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {/* Main artist card */}
            <div ref={col1Ref} className="fs-fade-up fs-delay-1">
              <div style={{ ...cardStyle(hov === 'artist'), height: 340, background: 'var(--fs-bg2)' }}
                onMouseEnter={() => setHov('artist')} onMouseLeave={() => setHov(null)}>
                <img src="/images/tatuador/tatoo17.jpeg" alt="Artista" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 120, background: 'linear-gradient(to top, rgba(26,22,16,0.92), transparent)' }} />
                <div style={{ position: 'absolute', bottom: 20, left: 20 }}>
                  <p style={{ fontFamily: 'Cinzel, serif', fontSize: '0.65rem', letterSpacing: '0.14em', color: 'var(--fs-muted)', textTransform: 'uppercase', marginBottom: 4 }}>Artista Principal</p>
                  <p style={{ fontFamily: 'Cinzel Decorative, serif', fontSize: '1.2rem', color: 'var(--fs-accent-light)' }}>Fighting Star</p>
                </div>
              </div>
            </div>

            {/* Two cards side by side */}
            <div ref={col2Ref} className="fs-fade-up fs-delay-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              {[
                { img: '/images/tatuador/tatoo5.jpeg', price: 'R$ 2.800,00', label: 'GORILA URBANO' },
                { img: '/images/tatuador/tatoo2.jpeg', price: 'R$ 1.500,00', label: 'SNAKE & SKULL' },
              ].map((item) => (
                <div key={item.label} style={{ ...cardStyle(hov === item.label), background: 'var(--fs-surface)', height: 180 }}
                  onMouseEnter={() => setHov(item.label)} onMouseLeave={() => setHov(null)}>
                  <img src={item.img} alt={item.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', top: 10, left: 10 }}>
                    <p style={{ fontFamily: 'Cinzel, serif', fontSize: '0.5rem', letterSpacing: '0.1em', color: 'var(--fs-muted)', textTransform: 'uppercase' }}>{item.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Process card */}
            <div ref={col3Ref} className="fs-fade-up fs-delay-3" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ ...cardStyle(hov === 'process'), height: 220 }}
                onMouseEnter={() => setHov('process')} onMouseLeave={() => setHov(null)}>
                <img src="/images/tatuador/tatoo3.jpeg" alt="Processo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 60%, rgba(26,22,16,0.7))' }} />
              </div>
              <div style={{ background: 'var(--fs-bg2)', borderRadius: 12, padding: '28px 24px', border: '1px solid var(--fs-divider)', display: 'flex', flexDirection: 'column', gap: 16 }}>
                <h3 style={{ fontFamily: 'Cinzel Decorative, serif', fontSize: '1.4rem', color: 'var(--fs-accent-light)', lineHeight: 1.2 }}>
                  O estúdio de tatuagem mais bem avaliado da cidade.
                </h3>
                <p style={{ color: 'var(--fs-muted)', fontSize: '0.85rem', lineHeight: 1.65 }}>
                  Tem uma ideia? Me envie por DM!
                </p>
                <button style={{
                  background: 'transparent', border: '1px solid var(--fs-accent)', color: 'var(--fs-accent)',
                  borderRadius: 6, padding: '13px 0',
                  fontFamily: 'Cinzel, serif', fontWeight: 700, fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase',
                  cursor: 'pointer', transition: 'background 0.25s, color 0.25s',
                }}
                  onClick={() => window.open(WHATSAPP_URL, '_blank')}
                >
                  FALE CONOSCO AGORA
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="portfolio" style={{ padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
      <div className="fs-blob" style={{ width: 600, height: 600, left: -200, top: 100, opacity: 0.08 }} />
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 64px', position: 'relative', zIndex: 1 }}>
        <div ref={headRef} className="fs-fade-up" style={{ marginBottom: 64 }}>
          <h2 style={{ fontFamily: 'Cinzel Decorative, serif', fontSize: 52, lineHeight: 1.1, color: 'var(--fs-text)', whiteSpace: 'nowrap' }}>
            Tatuador premiado em convenção!
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24 }}>
          <div ref={col1Ref} className="fs-fade-up fs-delay-1" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div style={{ ...cardStyle(hov === 'artist'), height: 500, background: 'var(--fs-bg2)' }}
              onMouseEnter={() => setHov('artist')} onMouseLeave={() => setHov(null)}>
              <img src="/images/tatuador/tatoo17.jpeg" alt="Artista" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 160, background: 'linear-gradient(to top, rgba(26,22,16,0.92), transparent)' }} />
              <div style={{ position: 'absolute', bottom: 24, left: 24 }}>
                <p style={{ fontFamily: 'Cinzel, serif', fontSize: '0.65rem', letterSpacing: '0.14em', color: 'var(--fs-muted)', textTransform: 'uppercase', marginBottom: 4 }}>Artista Principal</p>
                <p style={{ fontFamily: 'Cinzel Decorative, serif', fontSize: '1.4rem', color: 'var(--fs-accent-light)' }}>Fighting Star</p>
              </div>
            </div>
          </div>
          <div ref={col2Ref} className="fs-fade-up fs-delay-2" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {[
              { img: '/images/tatuador/tatoo5.jpeg', price: 'R$ 2.800,00', label: 'GORILA URBANO' },
              { img: '/images/tatuador/tatoo2.jpeg', price: 'R$ 1.500,00', label: 'SNAKE & SKULL' },
            ].map((item) => (
              <div key={item.label} style={{ ...cardStyle(hov === item.label), background: 'var(--fs-surface)', height: 238 }}
                onMouseEnter={() => setHov(item.label)} onMouseLeave={() => setHov(null)}>
                <img src={item.img} alt={item.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: 14, left: 14 }}>
                  <p style={{ fontFamily: 'Cinzel, serif', fontSize: '0.58rem', letterSpacing: '0.12em', color: 'var(--fs-muted)', textTransform: 'uppercase' }}>{item.label}</p>
                </div>
              </div>
            ))}
          </div>
          <div ref={col3Ref} className="fs-fade-up fs-delay-3" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div style={{ ...cardStyle(hov === 'process'), height: 320 }}
              onMouseEnter={() => setHov('process')} onMouseLeave={() => setHov(null)}>
              <img src="/images/tatuador/tatoo3.jpeg" alt="Processo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 60%, rgba(26,22,16,0.7))' }} />
            </div>
            <div style={{ background: 'var(--fs-bg2)', borderRadius: 12, padding: 32, border: '1px solid var(--fs-divider)', display: 'flex', flexDirection: 'column', gap: 16, flex: 1 }}>
              <h3 style={{ fontFamily: 'Cinzel Decorative, serif', fontSize: '1.9rem', color: 'var(--fs-accent-light)', lineHeight: 1.15 }}>
                O estúdio de tatuagem mais bem avaliado da cidade.
              </h3>
              <p style={{ color: 'var(--fs-muted)', fontSize: '0.85rem', lineHeight: 1.65 }}>
                Tem uma ideia? Me envie por DM!
              </p>
              <button style={{
                background: 'transparent', border: '1px solid var(--fs-accent)', color: 'var(--fs-accent)',
                borderRadius: 6, padding: '13px 0',
                fontFamily: 'Cinzel, serif', fontWeight: 700, fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase',
                cursor: 'pointer', transition: 'background 0.25s, color 0.25s',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = 'var(--fs-accent)'; (e.currentTarget as HTMLButtonElement).style.color = 'var(--fs-dark)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; (e.currentTarget as HTMLButtonElement).style.color = 'var(--fs-accent)'; }}
                onClick={() => window.open(WHATSAPP_URL, '_blank')}
              >
                FALE CONOSCO AGORA
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const TESTIMONIALS = [
  {
    name: 'VINICIUS EDUARDO', initials: 'VE', gradient: 'linear-gradient(135deg, #0d1a06, #2a4a10)',
    quote: '"Muito bem recebido, minha tatuagem não descascou, muita pouca dor, o homem sabe oq faz!"',
    stars: 5,
  },
  {
    name: 'AGNALDO JÚNIOR', initials: 'AJ', gradient: 'linear-gradient(135deg, #0a0a0a, #1e3808)',
    quote: '"Fiz um dragão no braço e ficou excelente. Foram mais de 8h de seção e o atendimento foi espetacular do início ao fim."',
    stars: 5,
  },
  {
    name: 'JAO', initials: 'J_', gradient: 'linear-gradient(135deg, #0d1a06, #1a3206)',
    quote: '"Foi incrível, fez um trabalho excelente tirou todas as minhas dúvidas, me ajudou com os cuidados da tatuagem."',
    stars: 5,
  },
  {
    name: 'ALINE MARIELA', initials: 'AM', gradient: 'linear-gradient(135deg, #111a08, #3a5a18)',
    quote: '"Ótimo atendimento, ótimo trabalho, espero fazer muito mais tattoos, só experiência boa."',
    stars: 5,
  },
  {
    name: 'ANDREA FINGER', initials: 'AF', gradient: 'linear-gradient(135deg, #080808, #182e08)',
    quote: '"Profissionalismo do início ao fim. Mão leve, trabalho impecável e um preço muito justo. Recomendo de olhos fechados."',
    stars: 5,
  },
  {
    name: 'WILLIAM JDS', initials: 'WJ', gradient: 'linear-gradient(135deg, #0a0a0a, #243a10)',
    quote: '"Faz um excelente trabalho. Detalhista e mão leve. Já fiz três e faria outras, recomendo."',
    stars: 5,
  },
  {
    name: 'MARIA CHRISTOPHER', initials: 'MC', gradient: 'linear-gradient(135deg, #0d1a06, #2a4a10)',
    quote: '"Tatuador brabo dms, muito educado e lugar show de bola."',
    stars: 5,
  },
  {
    name: 'LUANA MOLINA', initials: 'LM', gradient: 'linear-gradient(135deg, #111a08, #3a5a18)',
    quote: '"Excelente profissional, minha Tatoo ficou perfeita, do jeitinho que eu planejei, cicatrizou super tranquilo, traços perfeitos."',
    stars: 5,
  },
];

const AVATARS = TESTIMONIALS.map(t => ({ initials: t.initials, gradient: t.gradient }));

function TestimonialsSection() {
  const [idx, setIdx] = useState(0);
  const ref = useReveal();
  const isMobile = useIsMobile();

  const prevIdx = () => setIdx(p => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const nextIdx = () => setIdx(p => (p + 1) % TESTIMONIALS.length);

  const arrowBtnStyle: React.CSSProperties = {
    width: 44, height: 44, borderRadius: '50%', background: 'rgba(114,224,21,0.1)',
    border: '1px solid var(--fs-accent)', cursor: 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    color: 'var(--fs-accent)',
    boxShadow: '0 4px 16px rgba(114,224,21,0.12)', transition: 'background 0.2s',
    flexShrink: 0,
  };

  return (
    <section id="depoimentos" style={{ padding: isMobile ? '80px 0' : '120px 0', background: 'var(--fs-bg2)', borderTop: '1px solid var(--fs-divider)', borderBottom: '1px solid var(--fs-divider)' }}>
      <div style={{ maxWidth: 860, margin: '0 auto', padding: isMobile ? '0 24px' : '0 64px' }}>
        <div ref={ref} className="fs-fade-up" style={{ textAlign: 'center', marginBottom: 48 }}>
          <p style={{ fontFamily: 'Cinzel, serif', fontSize: '0.7rem', letterSpacing: '0.2em', color: 'var(--fs-accent)', textTransform: 'uppercase', marginBottom: 16 }}>Depoimentos</p>
          <h2 style={{ fontFamily: 'Cinzel Decorative, serif', fontSize: isMobile ? 32 : 52, color: 'var(--fs-text)', lineHeight: 1.1 }}>
            O Que Nossos<br />Clientes Dizem
          </h2>
        </div>

        {/* Avatars row */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: isMobile ? 6 : 16, marginBottom: 40, flexWrap: 'wrap' }}>
          {AVATARS.map((av, i) => {
            const active = i === idx;
            const size = active ? (isMobile ? 48 : 58) : (isMobile ? 34 : 42);
            return (
              <div key={i} onClick={() => setIdx(i)}
                style={{
                  width: size, height: size, borderRadius: '50%', background: av.gradient,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'Cinzel, serif', fontWeight: 700, fontSize: active ? '0.65rem' : '0.52rem',
                  color: 'var(--fs-surface)',
                  border: active ? '2px solid var(--fs-accent)' : '2px solid transparent',
                  boxShadow: active ? '0 0 18px rgba(196,149,106,0.35)' : 'none',
                  opacity: active ? 1 : 0.5,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              >
                {av.initials}
              </div>
            );
          })}
        </div>

        {/* Card */}
        <div style={{
          background: 'var(--fs-bg)', border: '1px solid var(--fs-divider)',
          borderRadius: 20, padding: isMobile ? '36px 24px' : '48px 56px', textAlign: 'center',
          boxShadow: '0 4px 32px rgba(196,149,106,0.08)',
        }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 4, marginBottom: 24 }}>
            {Array(TESTIMONIALS[idx].stars).fill(0).map((_, i) => (
              <Star key={i} size={18} fill="var(--fs-accent)" color="var(--fs-accent)" />
            ))}
          </div>
          <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: isMobile ? '1.05rem' : '1.35rem', color: 'var(--fs-text)', lineHeight: 1.7, marginBottom: 28 }}>
            {TESTIMONIALS[idx].quote}
          </p>
          <p style={{ fontFamily: 'Cinzel, serif', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.18em', color: 'var(--fs-accent-light)' }}>
            — {TESTIMONIALS[idx].name}
          </p>
        </div>

        {/* Navigation arrows below card on mobile */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16, marginTop: 24 }}>
          <button onClick={prevIdx} style={arrowBtnStyle}
            onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.background = 'rgba(114,224,21,0.22)')}
            onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.background = 'rgba(114,224,21,0.1)')}
          >
            <ChevronLeft size={22} />
          </button>
          {/* Dots */}
          <div style={{ display: 'flex', gap: 8 }}>
            {TESTIMONIALS.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)} style={{
                width: i === idx ? 24 : 8, height: 8, borderRadius: 4, border: 'none', cursor: 'pointer',
                background: i === idx ? 'var(--fs-accent)' : 'var(--fs-divider)', transition: 'all 0.3s ease', padding: 0,
              }} />
            ))}
          </div>
          <button onClick={nextIdx} style={arrowBtnStyle}
            onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.background = 'rgba(114,224,21,0.22)')}
            onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.background = 'rgba(114,224,21,0.1)')}
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  {
    q: 'QUAL É O PROCESSO?',
    a: 'Começamos com uma consulta gratuita onde entendemos sua visão, estilo e história. Após aprovação do esboço, agendamos a sessão. Cada etapa é uma colaboração entre cliente e artista para garantir uma obra única e permanente.',
  },
  {
    q: 'COMO VOCÊS DEFINEM O PREÇO?',
    a: '1. Tamanho: Os preços de tatuagem geralmente são baseados no tamanho do desenho. Tatuagens maiores costumam custar mais do que as menores. Alguns estúdios cobram por centímetro quadrado ou têm preços fixos para diferentes categorias de tamanho.\n\n2. Complexidade: A complexidade do design tem um papel importante na precificação. Designs mais intrincados e detalhados exigem mais tempo e habilidade, resultando em um custo mais elevado.\n\n3. Cor: Tatuagens coloridas geralmente custam mais do que as de preto e cinza. Cores vibrantes podem exigir mais trabalho e habilidade para atingir o resultado desejado.',
  },
  {
    q: 'VOCÊS FAZEM QUALQUER TIPO DE TATUAGEM?',
    a: 'Trabalhamos com a maioria dos estilos — Old School, Blackwork, Realismo, Neo-Tradicional, Geometria e Arte Autoral. Avaliamos cada pedido individualmente para garantir que possamos executar com o padrão Fighting Star.',
  },
  {
    q: 'QUAL É A LOCALIZAÇÃO DE VOCÊS?',
    a: 'Estamos em uma área nobre da cidade, às margens do lago, próximo ao shopping. Um espaço aconchegante e fácil de encontrar. Entre em contato para obter o endereço completo e agendar sua visita ao estúdio.',
  },
];

function FaqSection() {
  const [openIdx, setOpenIdx] = useState(1);
  const ref = useReveal();
  const isMobile = useIsMobile();

  return (
    <section id="faq" style={{ padding: isMobile ? '80px 0' : '120px 0', position: 'relative' }}>
      <div className="fs-blob" style={{ width: 400, height: 400, right: -100, bottom: 0, opacity: 0.06 }} />
      <div style={{ maxWidth: 860, margin: '0 auto', padding: isMobile ? '0 24px' : '0 64px', position: 'relative', zIndex: 1 }}>
        <div ref={ref} className="fs-fade-up" style={{ textAlign: 'center', marginBottom: 56 }}>
          <img src="/images/tatuador/logo-tatoo-removebg-preview.png" alt="Logo" style={{ height: 36, width: 36, objectFit: 'contain' }} />
          <h2 style={{ fontFamily: 'Cinzel Decorative, serif', fontSize: isMobile ? 32 : 48, color: 'var(--fs-text)', marginTop: 20, lineHeight: 1.1 }}>
            Perguntas Frequentes
          </h2>
        </div>
        <div>
          {FAQS.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div key={i} style={{ borderTop: '1px solid var(--fs-divider)' }}>
                <button onClick={() => setOpenIdx(isOpen ? -1 : i)}
                  style={{
                    width: '100%', padding: isMobile ? '22px 0' : '28px 0',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 16,
                  }}
                >
                  <span style={{
                    fontFamily: 'Cinzel, serif', fontWeight: 600,
                    fontSize: isMobile ? '0.72rem' : '0.82rem',
                    letterSpacing: '0.08em', textTransform: 'uppercase',
                    color: isOpen ? 'var(--fs-accent)' : 'var(--fs-text)', transition: 'color 0.25s ease',
                  }}>
                    {faq.q}
                  </span>
                  <div style={{ color: 'var(--fs-accent)', flexShrink: 0, transition: 'transform 0.3s', transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                    <Plus size={22} />
                  </div>
                </button>
                <div className={`fs-accordion-body${isOpen ? ' open' : ''}`}>
                  <div className="fs-accordion-inner">
                    <div style={{
                      fontFamily: 'Inter, sans-serif', color: 'var(--fs-muted)',
                      fontSize: '0.88rem', lineHeight: 1.8, paddingBottom: 28,
                      paddingLeft: 16, borderLeft: '2px solid rgba(114,224,21,0.2)',
                      whiteSpace: 'pre-line',
                    }}>
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div style={{ borderTop: '1px solid var(--fs-divider)' }} />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <footer style={{ background: 'var(--fs-bg)', borderTop: '1px solid var(--fs-divider)', paddingTop: 48, paddingBottom: 32 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 36, marginBottom: 40 }}>
            {/* Logo */}
            <img src="/images/tatuador/logo-tatoo-removebg-preview.png" alt="Logo" style={{ height: 120, width: 120, objectFit: 'contain' }} />

            {/* Links */}
            <div style={{ display: 'flex', gap: 40, justifyContent: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}>
                {['PÁGINA INICIAL', 'PORTFÓLIO', 'SOBRE NÓS'].map(l => (
                  <a key={l} href="#" style={{ fontFamily: 'Cinzel, serif', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fs-muted)', textDecoration: 'none', transition: 'color 0.25s' }}>{l}</a>
                ))}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}>
                {['ORÇAMENTOS', 'PREÇOS', 'DESAFIOS'].map(l => (
                  <a key={l} href="#" style={{ fontFamily: 'Cinzel, serif', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fs-muted)', textDecoration: 'none', transition: 'color 0.25s' }}>{l}</a>
                ))}
              </div>
            </div>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: 12 }}>
              {([Youtube, Twitter, Instagram] as React.ElementType[]).map((Icon, i) => (
                <a key={i} href="#" style={{
                  width: 42, height: 42, borderRadius: '50%',
                  border: '1px solid var(--fs-divider)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--fs-muted)', textDecoration: 'none',
                  transition: 'border-color 0.25s, color 0.25s',
                }}>
                  <Icon size={17} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Credit bar */}
          <div style={{ borderTop: '1px solid var(--fs-divider)', paddingTop: 20, textAlign: 'center' }}>
            <a
              href="https://www.moveonsistemas.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'Cinzel, serif', fontSize: '0.58rem', letterSpacing: '0.14em',
                textTransform: 'uppercase', textDecoration: 'none',
                color: 'var(--fs-muted)', transition: 'color 0.25s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--fs-accent)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--fs-muted)')}
            >
              Desenvolvido por <span style={{ color: 'var(--fs-accent)' }}>Moveon Sistemas</span>
            </a>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer style={{ background: 'var(--fs-bg)', borderTop: '1px solid var(--fs-divider)', paddingTop: 64, paddingBottom: 32 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 64px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 48, marginBottom: 56 }}>
          <div><img src="/images/tatuador/logo-tatoo-removebg-preview.png" alt="Logo" style={{ height: 200, width: 200, objectFit: 'contain' }} /></div>
          <div style={{ display: 'flex', gap: 64 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {['PÁGINA INICIAL', 'PORTFÓLIO', 'SOBRE NÓS'].map(l => (
                <a key={l} href="#" style={{ fontFamily: 'Cinzel, serif', fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fs-muted)', textDecoration: 'none', transition: 'color 0.25s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--fs-accent)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--fs-muted)')}
                >{l}</a>
              ))}
            </div>
            <div style={{ width: 1, background: 'var(--fs-divider)', alignSelf: 'stretch' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {['ORÇAMENTOS', 'PREÇOS', 'DESAFIOS'].map(l => (
                <a key={l} href="#" style={{ fontFamily: 'Cinzel, serif', fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fs-muted)', textDecoration: 'none', transition: 'color 0.25s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--fs-accent)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--fs-muted)')}
                >{l}</a>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            {([Youtube, Twitter, Instagram] as React.ElementType[]).map((Icon, i) => (
              <a key={i} href="#" style={{
                width: 42, height: 42, borderRadius: '50%',
                border: '1px solid var(--fs-divider)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--fs-muted)', textDecoration: 'none',
                transition: 'border-color 0.25s, color 0.25s',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--fs-accent)'; (e.currentTarget as HTMLAnchorElement).style.color = 'var(--fs-accent)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--fs-divider)'; (e.currentTarget as HTMLAnchorElement).style.color = 'var(--fs-muted)'; }}
              >
                <Icon size={17} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        {/* Credit bar */}
        <div style={{ borderTop: '1px solid var(--fs-divider)', paddingTop: 24, textAlign: 'center' }}>
          <a
            href="https://www.moveonsistemas.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'Cinzel, serif', fontSize: '0.62rem', letterSpacing: '0.14em',
              textTransform: 'uppercase', textDecoration: 'none',
              color: 'var(--fs-muted)', transition: 'color 0.25s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--fs-accent)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--fs-muted)')}
          >
            Desenvolvido por <span style={{ color: 'var(--fs-accent)' }}>Moveon Sistemas</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div style={{ background: 'var(--fs-bg)', color: 'var(--fs-text)', fontFamily: 'Inter, sans-serif', overflowX: 'hidden', minHeight: '100vh' }}>
      <div className="fs-noise" />
      <Navbar />
      <main>
        <HeroSection />
        <PartnersStrip />
        <PortfolioSection />
        <TestimonialsSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
