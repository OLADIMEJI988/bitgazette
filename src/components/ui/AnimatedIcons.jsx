import React from "react";
import { motion } from "framer-motion";
import AnimatedPath from "../AnimatedPath";

export function AnimatedChartIcon({ className }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <AnimatedPath
        d="M7 18V16M12 18V15M17 18V13M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        duration={1.2}
        pauseBeforeReverse={3000}
      />

      <motion.path
        d="M5.99219 11.4863C8.14729 11.5581 13.0341 11.2328 15.8137 6.82132M13.9923 6.28835L15.8678 5.98649C16.0964 5.95738 16.432 6.13785 16.5145 6.35298L17.0104 7.99142"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        transition={{
          duration: 0.6,
          delay: 0.8,
          ease: "easeInOut",
        }}
      />
    </svg>
  );
}

export function AnimatedMegaphoneIcon({ className }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <AnimatedPath
        d="M14.9263 2.91103L8.27352 6.10452C7.76151 6.35029 7.21443 6.41187 6.65675 6.28693C6.29177 6.20517 6.10926 6.16429 5.9623 6.14751C4.13743 5.93912 3 7.38342 3 9.04427V9.95573C3 11.6166 4.13743 13.0609 5.9623 12.8525C6.10926 12.8357 6.29178 12.7948 6.65675 12.7131C7.21443 12.5881 7.76151 12.6497 8.27352 12.8955L14.9263 16.089C16.4534 16.8221 17.217 17.1886 18.0684 16.9029C18.9197 16.6172 19.2119 16.0041 19.7964 14.778C21.4012 11.4112 21.4012 7.58885 19.7964 4.22196C19.2119 2.99586 18.9197 2.38281 18.0684 2.0971C17.217 1.8114 16.4534 2.17794 14.9263 2.91103Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        duration={0.8}
        pauseBeforeReverse={3000}
      />

      <motion.path
        d="M11.4581 20.7709L9.96674 22C6.60515 19.3339 7.01583 18.0625 7.01583 13H8.14966C8.60978 15.8609 9.69512 17.216 11.1927 18.197C12.1152 18.8012 12.3054 20.0725 11.4581 20.7709Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        duration={0.8}
        delay={0.2}
      />

      <motion.path
        d="M7.5 12.5V6.5"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        duration={0.4}
        delay={0.5}
      />
    </svg>
  );
}

export function AnimatedTechIcon({ className }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer chip */}
      <AnimatedPath
        d="M4 12C4 8.22876 4 6.34315 5.17157 5.17157C6.34315 4 8.22876 4 12 4C15.7712 4 17.6569 4 18.8284 5.17157C20 6.34315 20 8.22876 20 12C20 15.7712 20 17.6569 18.8284 18.8284C17.6569 20 15.7712 20 12 20C8.22876 20 6.34315 20 5.17157 18.8284C4 17.6569 4 15.7712 4 12Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinejoin="round"
        duration={1}
        pauseBeforeReverse={3000}
      />

      {/* Top pins */}
      <AnimatedPath
        d="M9.5 2V4"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        delay={0.15}
        duration={0.25}
      />

      <AnimatedPath
        d="M14.5 2V4"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        delay={0.25}
        duration={0.25}
      />

      {/* Bottom pins */}
      <AnimatedPath
        d="M9.5 20V22"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        delay={0.35}
        duration={0.25}
      />

      <AnimatedPath
        d="M14.5 20V22"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        delay={0.45}
        duration={0.25}
      />

      {/* Left pins */}
      <AnimatedPath
        d="M4 9.5H2"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        delay={0.55}
        duration={0.25}
      />

      <AnimatedPath
        d="M4 14.5H2"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        delay={0.65}
        duration={0.25}
      />

      {/* Right pins */}
      <AnimatedPath
        d="M22 9.5H20"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        delay={0.75}
        duration={0.25}
      />

      <AnimatedPath
        d="M22 14.5H20"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        delay={0.85}
        duration={0.25}
      />

      {/* Circuit traces */}
      <AnimatedPath
        d="M13 9L9 13"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        delay={1}
        duration={0.45}
      />

      <AnimatedPath
        d="M15 13L13 15"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        delay={1.3}
        duration={0.35}
      />
    </svg>
  );
}

export function AnimatedTrendingIcon({ className }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <AnimatedPath
        d="M3 17L7 13C7.88256 12.1174 8.32385 11.6762 8.86543 11.6274C8.95496 11.6193 9.04504 11.6193 9.13457 11.6274C9.67615 11.6762 10.1174 12.1174 11 13C11.8826 13.8826 12.3238 14.3238 12.8654 14.3726C12.955 14.3807 13.045 14.3807 13.1346 14.3726C13.6762 14.3238 14.1174 13.8826 15 13L20 8"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        duration={1}
        pauseBeforeReverse={3000}
      />

      <AnimatedPath
        d="M16 7.27657C16 7.27657 20.101 6.65426 20.7234 7.27661C21.3458 7.89896 20.7234 12 20.7234 12"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        duration={0.5}
        delay={0.8}
        pauseBeforeReverse={3000}
      />
    </svg>
  );
}

export function AnimatedOpinionIcon({ className }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <AnimatedPath
        d="M17.9922 5.75C20.2013 5.75 21.9922 7.63509 21.9922 9.96101C21.9922 13.0258 20.5783 15.7433 18.3998 17.4295C17.6167 18.0357 17.2252 18.3387 16.9588 18.2272C16.8775 18.1932 16.8045 18.1362 16.7514 18.0654C16.5774 17.8331 16.8036 17.2896 17.2561 16.2028C17.5006 15.6154 17.6228 15.3217 17.5771 15.0357C17.5587 14.9206 17.5428 14.8689 17.4933 14.7636C17.3704 14.5018 16.8808 14.1853 15.9018 13.5523C14.7562 12.8116 13.9922 11.4802 13.9922 9.96101C13.9922 8.47071 14.7273 7.16135 15.8366 6.41291C16.4587 5.99345 17.1985 5.75 17.9922 5.75Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinejoin="round"
        duration={1}
        pauseBeforeReverse={3000}
      />

      <AnimatedPath
        d="M5.99219 5.75C8.20132 5.75 9.99219 7.63509 9.99219 9.96101C9.99219 13.0258 8.57833 15.7433 6.39979 17.4295C5.61672 18.0357 5.22518 18.3387 4.95877 18.2272C4.87752 18.1932 4.80451 18.1362 4.75143 18.0654C4.57737 17.8331 4.8036 17.2896 5.25607 16.2028C5.50059 15.6154 5.62285 15.3217 5.57711 15.0357C5.55871 14.9206 5.54279 14.8689 5.49331 14.7636C5.37036 14.5018 4.88084 14.1853 3.9018 13.5523C2.75622 12.8116 1.99219 11.4802 1.99219 9.96101C1.99219 8.47071 2.72729 7.16135 3.83662 6.41291C4.45869 5.99345 5.19849 5.75 5.99219 5.75Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinejoin="round"
        duration={1}
        delay={0.35}
        pauseBeforeReverse={3000}
      />
    </svg>
  );
}

export function AnimatedPressReleaseIcon({ className }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Clipboard outline */}
      <AnimatedPath
        d="M19.4922 21H7.49219C5.13516 21 3.95665 21 3.22442 20.2678C2.49219 19.5355 2.49219 18.357 2.49219 16V8C2.49219 5.64298 2.49219 4.46447 3.22442 3.73223C3.95665 3 5.13516 3 7.49219 3H12.4922C14.8492 3 16.0277 3 16.76 3.73223C17.4922 4.46447 17.4922 5.64298 17.4922 8"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        duration={1}
        pauseBeforeReverse={3000}
      />

      {/* Header box */}
      <AnimatedPath
        d="M11.9922 6H7.99219C7.04938 6 6.57797 6 6.28508 6.29289C5.99219 6.58579 5.99219 7.05719 5.99219 8C5.99219 8.94281 5.99219 9.41421 6.28508 9.70711C6.57797 10 7.04938 10 7.99219 10H11.9922C12.935 10 13.4064 10 13.6993 9.70711C13.9922 9.41421 13.9922 8.94281 13.9922 8C13.9922 7.05719 13.9922 6.58579 13.6993 6.29289C13.4064 6 12.935 6 11.9922 6Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        duration={0.7}
        delay={0.4}
        pauseBeforeReverse={3000}
      />

      {/* Text line 1 */}
      <AnimatedPath
        d="M5.99219 14H13.9922"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        duration={0.35}
        delay={0.9}
        pauseBeforeReverse={3000}
      />

      {/* Text line 2 */}
      <AnimatedPath
        d="M5.99219 18H10.9922"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        duration={0.35}
        delay={1.1}
        pauseBeforeReverse={3000}
      />

      {/* Attached document */}
      <AnimatedPath
        d="M17.4922 8H18.4922C19.9064 8 20.6135 8 21.0528 8.43934C21.4922 8.87868 21.4922 9.58579 21.4922 11V19C21.4922 20.1046 20.5968 21 19.4922 21C18.3876 21 17.4922 20.1046 17.4922 19V8Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinejoin="round"
        duration={0.7}
        delay={1.3}
        pauseBeforeReverse={3000}
      />
    </svg>
  );
}

export function AnimatedBitcoinIcon({ className }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer coin */}
      <AnimatedPath
        d="M12 2C6.47716 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        duration={1}
        pauseBeforeReverse={3000}
      />

      {/* Inner coin */}
      <AnimatedPath
        d="M12 5C8.13401 5 5 8.134 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        duration={0.8}
        delay={0.3}
        pauseBeforeReverse={3000}
      />

      {/* Top & Bottom */}
      <AnimatedPath
        d="M12 2V5"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        duration={0.2}
        delay={0.7}
        pauseBeforeReverse={3000}
      />

      <AnimatedPath
        d="M12 19V22"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        duration={0.2}
        delay={0.8}
        pauseBeforeReverse={3000}
      />

      {/* Diagonal marks */}
      <AnimatedPath
        d="M3.3396 7L5.93768 8.5"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        duration={0.2}
        delay={0.9}
        pauseBeforeReverse={3000}
      />

      <AnimatedPath
        d="M20.6604 7L18.0623 8.5"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        duration={0.2}
        delay={1.0}
        pauseBeforeReverse={3000}
      />

      <AnimatedPath
        d="M5.93744 15.5L3.33936 17"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        duration={0.2}
        delay={1.1}
        pauseBeforeReverse={3000}
      />

      <AnimatedPath
        d="M18.0625 15.5L20.6606 17"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        duration={0.2}
        delay={1.2}
        pauseBeforeReverse={3000}
      />

      {/* Bitcoin symbol */}
      <motion.path
        d="M10.4375 14.6667V9.33333M12 9.33333V8M12 16V14.6667M10.4375 12H13.5625M13.5625 12C14.0803 12 14.5 12.4477 14.5 13V13.6667C14.5 14.219 14.0803 14.6667 13.5625 14.6667H9.5M13.5625 12C14.0803 12 14.5 11.5523 14.5 11V10.3333C14.5 9.78105 14.0803 9.33333 13.5625 9.33333H9.5"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        duration={0.8}
        delay={1.35}
      />
    </svg>
  );
}

export function AnimatedFinanceIcon({ className }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Axes */}
      <motion.path
        d="M3 3V13C3 16.7712 3 18.6569 4.17157 19.8284C5.34315 21 7.22876 21 11 21H21"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        duration={1}
      />

      {/* Left bar */}
      <AnimatedPath
        d="M11 13V11C11 10.535 11 10.3025 10.9489 10.1118C10.8102 9.59413 10.4059 9.18981 9.88823 9.05111C9.69748 9 9.46499 9 9 9C8.53501 9 8.30252 9 8.11177 9.05111C7.59413 9.18981 7.18981 9.59413 7.05111 10.1118C7 10.3025 7 10.535 7 11V13C7 13.465 7 13.6975 7.05111 13.8882C7.18981 14.4059 7.59413 14.8102 8.11177 14.9489C8.30252 15 8.53501 15 9 15C9.46499 15 9.69748 15 9.88823 14.9489C10.4059 14.8102 10.8102 14.4059 10.9489 13.8882C11 13.6975 11 13.465 11 13Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        duration={0.7}
        delay={0.4}
        pauseBeforeReverse={3000}
      />

      {/* Right bar */}
      <AnimatedPath
        d="M19 12V8C19 7.53501 19 7.30252 18.9489 7.11177C18.8102 6.59413 18.4059 6.18981 17.8882 6.05111C17.6975 6 17.465 6 17 6C16.535 6 16.3025 6 16.1118 6.05111C15.5941 6.18981 15.1898 6.59413 15.0511 7.11177C15 7.30252 15 7.53501 15 8V12C15 12.465 15 12.6975 15.0511 12.8882C15.1898 13.4059 15.5941 13.8102 16.1118 13.9489C16.3025 14 16.535 14 17 14C17.465 14 17.6975 14 17.8882 13.9489C18.4059 13.8102 18.8102 13.4059 18.9489 12.8882C19 12.6975 19 12.465 19 12Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        duration={0.7}
        delay={0.7}
        pauseBeforeReverse={3000}
      />

      {/* Left connectors */}
      <AnimatedPath
        d="M9 9V5"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        duration={0.3}
        delay={1.1}
        pauseBeforeReverse={3000}
      />

      <AnimatedPath
        d="M9 15V17"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        duration={0.3}
        delay={1.25}
        pauseBeforeReverse={3000}
      />

      {/* Right connectors */}
      <AnimatedPath
        d="M17 6V3"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        duration={0.3}
        delay={1.4}
        pauseBeforeReverse={3000}
      />

      <AnimatedPath
        d="M17 14V17"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        duration={0.3}
        delay={1.55}
        pauseBeforeReverse={3000}
      />
    </svg>
  );
}


export function ChartIcon({ className }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 18V16M12 18V15M17 18V13M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M5.99219 11.4863C8.14729 11.5581 13.0341 11.2328 15.8137 6.82132M13.9923 6.28835L15.8678 5.98649C16.0964 5.95738 16.432 6.13785 16.5145 6.35298L17.0104 7.99142"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MegaphoneIcon({ className }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.9263 2.91103L8.27352 6.10452C7.76151 6.35029 7.21443 6.41187 6.65675 6.28693C6.29177 6.20517 6.10926 6.16429 5.9623 6.14751C4.13743 5.93912 3 7.38342 3 9.04427V9.95573C3 11.6166 4.13743 13.0609 5.9623 12.8525C6.10926 12.8357 6.29178 12.7948 6.65675 12.7131C7.21443 12.5881 7.76151 12.6497 8.27352 12.8955L14.9263 16.089C16.4534 16.8221 17.217 17.1886 18.0684 16.9029C18.9197 16.6172 19.2119 16.0041 19.7964 14.778C21.4012 11.4112 21.4012 7.58885 19.7964 4.22196C19.2119 2.99586 18.9197 2.38281 18.0684 2.0971C17.217 1.8114 16.4534 2.17794 14.9263 2.91103Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M11.4581 20.7709L9.96674 22C6.60515 19.3339 7.01583 18.0625 7.01583 13H8.14966C8.60978 15.8609 9.69512 17.216 11.1927 18.197C12.1152 18.8012 12.3054 20.0725 11.4581 20.7709Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M7.5 12.5V6.5"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TechIcon({ className }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer chip */}
      <path
        d="M4 12C4 8.22876 4 6.34315 5.17157 5.17157C6.34315 4 8.22876 4 12 4C15.7712 4 17.6569 4 18.8284 5.17157C20 6.34315 20 8.22876 20 12C20 15.7712 20 17.6569 18.8284 18.8284C17.6569 20 15.7712 20 12 20C8.22876 20 6.34315 20 5.17157 18.8284C4 17.6569 4 15.7712 4 12Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />

      {/* Top pins */}
      <path
        d="M9.5 2V4"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />

      <path
        d="M14.5 2V4"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />

      {/* Bottom pins */}
      <path
        d="M9.5 20V22"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />

      <path
        d="M14.5 20V22"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />

      {/* Left pins */}
      <path
        d="M4 9.5H2"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />

      <path
        d="M4 14.5H2"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />

      {/* Right pins */}
      <path
        d="M22 9.5H20"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />

      <path
        d="M22 14.5H20"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />

      {/* Circuit traces */}
      <path
        d="M13 9L9 13"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M15 13L13 15"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TrendingIcon({ className }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 17L7 13C7.88256 12.1174 8.32385 11.6762 8.86543 11.6274C8.95496 11.6193 9.04504 11.6193 9.13457 11.6274C9.67615 11.6762 10.1174 12.1174 11 13C11.8826 13.8826 12.3238 14.3238 12.8654 14.3726C12.955 14.3807 13.045 14.3807 13.1346 14.3726C13.6762 14.3238 14.1174 13.8826 15 13L20 8"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M16 7.27657C16 7.27657 20.101 6.65426 20.7234 7.27661C21.3458 7.89896 20.7234 12 20.7234 12"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function OpinionIcon({ className }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.9922 5.75C20.2013 5.75 21.9922 7.63509 21.9922 9.96101C21.9922 13.0258 20.5783 15.7433 18.3998 17.4295C17.6167 18.0357 17.2252 18.3387 16.9588 18.2272C16.8775 18.1932 16.8045 18.1362 16.7514 18.0654C16.5774 17.8331 16.8036 17.2896 17.2561 16.2028C17.5006 15.6154 17.6228 15.3217 17.5771 15.0357C17.5587 14.9206 17.5428 14.8689 17.4933 14.7636C17.3704 14.5018 16.8808 14.1853 15.9018 13.5523C14.7562 12.8116 13.9922 11.4802 13.9922 9.96101C13.9922 8.47071 14.7273 7.16135 15.8366 6.41291C16.4587 5.99345 17.1985 5.75 17.9922 5.75Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />

      <path
        d="M5.99219 5.75C8.20132 5.75 9.99219 7.63509 9.99219 9.96101C9.99219 13.0258 8.57833 15.7433 6.39979 17.4295C5.61672 18.0357 5.22518 18.3387 4.95877 18.2272C4.87752 18.1932 4.80451 18.1362 4.75143 18.0654C4.57737 17.8331 4.8036 17.2896 5.25607 16.2028C5.50059 15.6154 5.62285 15.3217 5.57711 15.0357C5.55871 14.9206 5.54279 14.8689 5.49331 14.7636C5.37036 14.5018 4.88084 14.1853 3.9018 13.5523C2.75622 12.8116 1.99219 11.4802 1.99219 9.96101C1.99219 8.47071 2.72729 7.16135 3.83662 6.41291C4.45869 5.99345 5.19849 5.75 5.99219 5.75Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PressReleaseIcon({ className }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Clipboard outline */}
      <path
        d="M19.4922 21H7.49219C5.13516 21 3.95665 21 3.22442 20.2678C2.49219 19.5355 2.49219 18.357 2.49219 16V8C2.49219 5.64298 2.49219 4.46447 3.22442 3.73223C3.95665 3 5.13516 3 7.49219 3H12.4922C14.8492 3 16.0277 3 16.76 3.73223C17.4922 4.46447 17.4922 5.64298 17.4922 8"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Header box */}
      <path
        d="M11.9922 6H7.99219C7.04938 6 6.57797 6 6.28508 6.29289C5.99219 6.58579 5.99219 7.05719 5.99219 8C5.99219 8.94281 5.99219 9.41421 6.28508 9.70711C6.57797 10 7.04938 10 7.99219 10H11.9922C12.935 10 13.4064 10 13.6993 9.70711C13.9922 9.41421 13.9922 8.94281 13.9922 8C13.9922 7.05719 13.9922 6.58579 13.6993 6.29289C13.4064 6 12.935 6 11.9922 6Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Text line 1 */}
      <path
        d="M5.99219 14H13.9922"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Text line 2 */}
      <path
        d="M5.99219 18H10.9922"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Attached document */}
      <path
        d="M17.4922 8H18.4922C19.9064 8 20.6135 8 21.0528 8.43934C21.4922 8.87868 21.4922 9.58579 21.4922 11V19C21.4922 20.1046 20.5968 21 19.4922 21C18.3876 21 17.4922 20.1046 17.4922 19V8Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BitcoinIcon({ className }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer coin */}
      <path
        d="M12 2C6.47716 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Inner coin */}
      <path
        d="M12 5C8.13401 5 5 8.134 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Top & Bottom */}
      <path
        d="M12 2V5"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />

      <path
        d="M12 19V22"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />

      {/* Diagonal marks */}
      <path
        d="M3.3396 7L5.93768 8.5"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />

      <path
        d="M20.6604 7L18.0623 8.5"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />

      <path
        d="M5.93744 15.5L3.33936 17"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />

      <path
        d="M18.0625 15.5L20.6606 17"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />

      {/* Bitcoin symbol */}
      <path
        d="M10.4375 14.6667V9.33333M12 9.33333V8M12 16V14.6667M10.4375 12H13.5625M13.5625 12C14.0803 12 14.5 12.4477 14.5 13V13.6667C14.5 14.219 14.0803 14.6667 13.5625 14.6667H9.5M13.5625 12C14.0803 12 14.5 11.5523 14.5 11V10.3333C14.5 9.78105 14.0803 9.33333 13.5625 9.33333H9.5"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FinanceIcon({ className }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Axes */}
      <path
        d="M3 3V13C3 16.7712 3 18.6569 4.17157 19.8284C5.34315 21 7.22876 21 11 21H21"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"

      />

      {/* Left bar */}
      <path
        d="M11 13V11C11 10.535 11 10.3025 10.9489 10.1118C10.8102 9.59413 10.4059 9.18981 9.88823 9.05111C9.69748 9 9.46499 9 9 9C8.53501 9 8.30252 9 8.11177 9.05111C7.59413 9.18981 7.18981 9.59413 7.05111 10.1118C7 10.3025 7 10.535 7 11V13C7 13.465 7 13.6975 7.05111 13.8882C7.18981 14.4059 7.59413 14.8102 8.11177 14.9489C8.30252 15 8.53501 15 9 15C9.46499 15 9.69748 15 9.88823 14.9489C10.4059 14.8102 10.8102 14.4059 10.9489 13.8882C11 13.6975 11 13.465 11 13Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Right bar */}
      <path
        d="M19 12V8C19 7.53501 19 7.30252 18.9489 7.11177C18.8102 6.59413 18.4059 6.18981 17.8882 6.05111C17.6975 6 17.465 6 17 6C16.535 6 16.3025 6 16.1118 6.05111C15.5941 6.18981 15.1898 6.59413 15.0511 7.11177C15 7.30252 15 7.53501 15 8V12C15 12.465 15 12.6975 15.0511 12.8882C15.1898 13.4059 15.5941 13.8102 16.1118 13.9489C16.3025 14 16.535 14 17 14C17.465 14 17.6975 14 17.8882 13.9489C18.4059 13.8102 18.8102 13.4059 18.9489 12.8882C19 12.6975 19 12.465 19 12Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Left connectors */}
      <path
        d="M9 9V5"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M9 15V17"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Right connectors */}
      <path
        d="M17 6V3"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M17 14V17"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
