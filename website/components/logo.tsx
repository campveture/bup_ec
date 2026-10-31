import Image from "next/image";

/**
 * The club's real mark, sampled from the official logo file (navy #0b395d / teal #1582a9).
 * It sits on a white tile so the navy half stays visible on the dark navbar and footer.
 */
export function Logo({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <span
      className={`relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-[22%] bg-white ring-1 ring-black/5 ${className}`}
    >
      <Image
        src="/logo.png"
        alt=""
        width={160}
        height={160}
        priority
        sizes="160px"
        className="h-[82%] w-[82%] object-contain"
      />
    </span>
  );
}

export function Watermark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden="true">
      <circle cx="200" cy="200" r="196" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="200" cy="200" r="150" fill="none" stroke="currentColor" strokeWidth="0.7" />
      <circle cx="200" cy="200" r="104" fill="none" stroke="currentColor" strokeWidth="0.7" />
      <path d="M40 200h320M200 40v320" stroke="currentColor" strokeWidth="0.7" />
      <path d="M86 86l228 228M314 86 86 314" stroke="currentColor" strokeWidth="0.4" />
    </svg>
  );
}
