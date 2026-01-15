const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground font-body text-sm">
            © {currentYear} Ernest Tafadzwa Maenda. All rights reserved.
          </p>
          <p className="text-muted-foreground font-body text-sm">
            Designed with precision. Built with passion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;