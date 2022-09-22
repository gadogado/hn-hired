import type { SVGProps } from "react";

export default function SwithOff(
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
        d="M16.6667 0.166687H8.33333C3.73095 0.166687 0 3.89763 0 8.50002C0 13.1024 3.73095 16.8334 8.33333 16.8334H16.6667C21.2691 16.8334 25 13.1024 25 8.50002C25 3.89763 21.2691 0.166687 16.6667 0.166687ZM2.77778 8.50002C2.77778 5.42966 5.26254 2.94446 8.33333 2.94446C11.4037 2.94446 13.8889 5.42923 13.8889 8.50002C13.8889 11.5704 11.4041 14.0556 8.33333 14.0556C5.26298 14.0556 2.77778 11.5708 2.77778 8.50002ZM16.6667 14.0556H14.5441C17.3747 10.8933 17.3755 6.10766 14.5441 2.94446H16.6667C19.737 2.94446 22.2222 5.42923 22.2222 8.50002C22.2222 11.5703 19.7375 14.0556 16.6667 14.0556Z"
        fill="#CBD5E1"
        strokeWidth={1}
      />
    </svg>
  );
}