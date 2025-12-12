export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t dark:border-gray-700 mt-12">
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="mb-2">© {new Date().getFullYear()} Techno Light — جميع الحقوق محفوظة</p>
        <div className="flex justify-center gap-4">
          <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
          <a href="#" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="#" target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}
