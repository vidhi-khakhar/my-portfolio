function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full px-6 md:px-8 py-8 border-t border-slate-800 text-center bg-slate-950/50">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm text-slate-500">
          Built and designed by Vidhi Khakhar. All rights reserved. © {year}
        </p>
      </div>
    </footer>
  );
}

export default Footer;