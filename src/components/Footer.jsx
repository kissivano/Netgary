function Footer({ t }) {
  return (
    <footer className="border-t border-white/10 bg-brand text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>
          © {new Date().getFullYear()} NETGARY. {t.footer.rights}
        </p>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <a
            href="#services"
            className="transition duration-300 hover:text-white"
          >
            {t.footer.services}
          </a>

          <a href="#about" className="transition duration-300 hover:text-white">
            {t.footer.about}
          </a>

          <a
            href="#contact"
            className="transition duration-300 hover:text-white"
          >
            {t.footer.contact}
          </a>

          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="transition duration-300 hover:text-white"
          >
            {t.footer.instagram}
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
