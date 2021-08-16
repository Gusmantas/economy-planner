import * as React from "react";

function SvgSubscription(props) {
  return (
    <svg
      id="subscription_svg__Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      {...props}
    >
      <defs>
        <style>{".subscription_svg__cls-3{fill:#6d4135}"}</style>
      </defs>
      <path fill="#ffd38d" d="M21.33 149.33h469.33v341.33H21.33z" />
      <path fill="#ed7c69" d="M21.33 42.67h469.33v106.67H21.33z" />
      <path
        className="subscription_svg__cls-3"
        d="M490.67 21.33H384a21.33 21.33 0 10-42.67 0H170.67a21.33 21.33 0 10-42.67 0H21.33A21.33 21.33 0 000 42.67v448A21.33 21.33 0 0021.33 512h469.34A21.33 21.33 0 00512 490.67v-448a21.33 21.33 0 00-21.33-21.34zM42.67 64H128a21.33 21.33 0 1042.67 0h170.66A21.33 21.33 0 10384 64h85.33v64H42.67zm426.66 405.33H42.67V170.67h426.66z"
      />
      <path
        className="subscription_svg__cls-3"
        d="M227.67 362.67H192a21.33 21.33 0 000 42.67h35.67a49.72 49.72 0 0049.67-49.67v-71.34a49.72 49.72 0 00-49.67-49.67H192a21.33 21.33 0 000 42.67h35.67a7 7 0 017 7v14.33h-21.34a21.33 21.33 0 000 42.67h21.33v14.33a7 7 0 01-6.99 7.01zM320 405.33A21.33 21.33 0 00341.33 384V256a21.33 21.33 0 10-42.67 0v128A21.33 21.33 0 00320 405.33z"
      />
    </svg>
  );
}

export default SvgSubscription;
