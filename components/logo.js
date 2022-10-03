import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <div className="logo">
      <Link href="/">
        <a>
          <Image
            src="/img/logo.svg"
            layout="fixed"
            alt="Boards"
            width={135}
            height={26}
          />
        </a>
      </Link>
    </div>
  );
}
