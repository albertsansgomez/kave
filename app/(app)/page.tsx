import Link from 'next/link';

export default function Home() {
  return (
    <ul>
      <li>
        <Link href="/sillas">sillas</Link>
      </li>
      <li>
        <Link href="/mesas">mesas</Link>
      </li>
      <li>
        <Link href="/sofas">sofas</Link>
      </li>
    </ul>
  );
}
