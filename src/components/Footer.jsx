function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-8 py-8 border-t border-slate-800 text-center">
      <p className="text-sm text-slate-500">
        Built and designed by Vidhi Khakhar. All rights reserved. © {year}
      </p>
    </footer>
  );
}

export default Footer;