import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <Link href="/">
          <a><img className="block mx-auto align-center" src='https://www.pilimpi.com/themes/pilimpi/assets/img/img-pilimpi/pilimpi.svg' height="100px" alt='Pilimpi - Matelas Latex Naturel' ></img></a>
        </Link>
      <p className="text-2xl dark:text-white text-center">
        <Link href="https://blog.pilimpi.com/">
          <a>{name}</a>
        </Link>
      </p>
    </header>
  );
}
