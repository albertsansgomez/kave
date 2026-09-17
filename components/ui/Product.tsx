import Image from 'next/image';

export function Product() {
  return (
    <article className="bg-green-600">
      <div className="relative aspect-[4/5] w-full">
        <Image
          src="https://picsum.photos/375/300"
          fill
          alt="Lorem ipsum dolor sit amet"
          className="object-cover"
        />
      </div>
      <h3>nombre producto</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p>399 €</p>
    </article>
  );
}
