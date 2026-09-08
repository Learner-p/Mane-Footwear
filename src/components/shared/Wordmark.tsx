type WordmarkProps = {
  className?: string;
};

// Temporary text-based wordmark. Replace the contents of this component
// with a real <Image> logo later — every place the brand appears
// (Navbar, Footer, anywhere else) will update automatically.
export default function Wordmark({ className = "" }: WordmarkProps) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span aria-hidden="true" className="h-2 w-2 rounded-sm bg-orange-dark" />
      <span className="font-bold tracking-tight">
        MANE <span className="font-medium tracking-wide">FOOTWEAR</span>
      </span>
    </span>
  );
}