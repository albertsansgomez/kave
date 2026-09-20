import Chevron from '@/components/icons/Chevron.svg';

interface DropDownOption {
  value: string;
  label: string;
}

export interface DropDownProps {
  options: DropDownOption[];
}

export default function DropDown({ options }: DropDownProps) {
  return (
    <div className="border border-[#A1A19B] relative inline-block w-24 h-12 focus-within:rounded-sm not-last-of-type:focus-within:border-black focus-within:outline-2 focus-within:outline-black focus-within:outline-offset-[-2px]">
      <select
        name="quantity"
        className="h-full w-full appearance-none pl-4 pr-11 text-[13px] leading-none text-black outline-none"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 flex w-[42px] items-center justify-center"
      >
        <Chevron className="stroke-[#1A1A14] size-5 rotate-270" />
      </span>
    </div>
  );
}
