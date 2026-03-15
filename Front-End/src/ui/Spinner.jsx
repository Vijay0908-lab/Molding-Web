export function Spinner() {
  return (
    <div
      className="
        mx-auto my-[4.8rem] 
        h-[6.4rem] w-[6.4rem] 
        aspect-square 
        rounded-full 
        animate-spin-slow
        [background:radial-gradient(farthest-side,var(--color-brand-600)_94%,#0000)_top/10px_10px_no-repeat,conic-gradient(#0000_30%,var(--color-brand-600))]
        [-webkit-mask:radial-gradient(farthest-side,#0000_calc(100%-10px),#000_0)]
      "
    ></div>
  );
}

export default Spinner;