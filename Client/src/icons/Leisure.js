import * as React from "react";

function SvgLeisure(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57 57" {...props}>
      <path
        d="M29 27.528v-12.5c0-2.475 2.025-4.5 4.5-4.5h0c2.475 0 4.5 2.025 4.5 4.5v3.5c0 2.2 1.8 4 4 4h0c2.2 0 4-1.8 4-4v-16"
        fill="none"
        stroke="#38454f"
        strokeWidth={2}
        strokeLinecap="round"
        strokeMiterlimit={10}
      />
      <path
        d="M45.241 55.471c-1.303.022-5.452-.268-9.314-1.331-4.514-1.242-10.121-1.237-14.637 0-3.892 1.066-7.521 1.354-9.314 1.331C5.142 55.383 0 48.52 0 41.499c0-7.684 6.287-13.972 13.972-13.972h29.274C50.93 27.528 57 33.815 57 41.499c0 7.021-4.925 13.856-11.759 13.972z"
        fill="#cbd4d8"
      />
      <path
        fill="none"
        stroke="#afb6bb"
        strokeWidth={2}
        strokeLinecap="round"
        strokeMiterlimit={10}
        d="M27 31.528h4.632"
      />
      <circle cx={36} cy={41.528} r={3} fill="#43b05c" />
      <circle cx={50} cy={41.528} r={3} fill="#dd352e" />
      <circle cx={43} cy={48.528} r={3} fill="#ebba16" />
      <circle cx={43} cy={34.528} r={3} fill="#366db6" />
      <path fill="#38454f" d="M22 38.528h-4v-4h-6v4H8v6h4v4h6v-4h4z" />
    </svg>
  );
}

export default SvgLeisure;
