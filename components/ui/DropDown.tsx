import Arrow from '@/components/icons/Arrow.svg';

export default function DropDown() {
  return (
    <div className="border border-[#A1A19B] relative inline-block w-24 h-12">
      <select
        name="quantity"
        className="h-full w-full appearance-none pl-4 pr-11 text-[13px] leading-none text-black outline-none"
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 flex w-[42px] items-center justify-center"
      >
        <Arrow className="stroke-[#1A1A14] size-5 rotate-270" />
      </span>
    </div>
  );
}
