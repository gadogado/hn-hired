import type { SVGProps } from "react";

export default function SwitchOn(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      width="25"
      height="17"
      viewBox="0 0 25 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.6667 0.166687H8.33333C3.73264 0.166687 0 3.89933 0 8.50002C0 13.1007 3.73264 16.8334 8.33333 16.8334H16.6667C21.2674 16.8334 25 13.1007 25 8.50002C25 3.89933 21.2674 0.166687 16.6667 0.166687ZM16.6667 14.0556C13.5937 14.0556 11.1111 11.5686 11.1111 8.50002C11.1111 5.4271 13.5981 2.94446 16.6667 2.94446C19.7396 2.94446 22.2222 5.43144 22.2222 8.50002C22.2222 11.5729 19.7352 14.0556 16.6667 14.0556Z"
        fill="#60A5FA"
      />
    </svg>
  );
}
