type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  Search: (props: IconProps) => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_1_1791)">
        <path
          d="M13.3333 22.6667C18.488 22.6667 22.6667 18.488 22.6667 13.3333C22.6667 8.17868 18.488 4 13.3333 4C8.17868 4 4 8.17868 4 13.3333C4 18.488 8.17868 22.6667 13.3333 22.6667Z"
          stroke="#2C3E50"
          stroke-width="2.75"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M28 28L20 20"
          stroke="#2C3E50"
          stroke-width="2.75"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_1791">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  Facebook: (props: IconProps) => (
    <svg
      width="10"
      height="18"
      viewBox="0 0 10 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.6328 0.69207C9.36159 0.651891 8.42744 0.571533 7.34262 0.571533C5.07253 0.571533 3.51561 1.95769 3.51561 4.49899V6.68872H0.954224V9.66194H3.51561V17.2858H6.58927V9.66194H9.14061L9.53235 6.68872H6.58927V4.79028C6.58927 3.93649 6.8203 3.34385 8.05579 3.34385H9.6328V0.69207Z"
        fill="#12305B"
      />
    </svg>
  ),
  X: (props: IconProps) => (
    <svg
      width="17"
      height="13"
      viewBox="0 0 17 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.0556 1.66961C15.473 1.92072 14.8402 2.10153 14.1873 2.17184C14.8603 1.77005 15.3725 1.13724 15.6136 0.383894C14.9908 0.755545 14.2877 1.02675 13.5545 1.16738C12.9618 0.534564 12.1181 0.142822 11.1839 0.142822C9.38593 0.142822 7.93951 1.5993 7.93951 3.38724C7.93951 3.63836 7.96964 3.88947 8.01986 4.13055C5.3279 3.98992 2.92723 2.70421 1.33013 0.735456C1.04888 1.2176 0.888168 1.77005 0.888168 2.37273C0.888168 3.49773 1.46071 4.49215 2.33459 5.07474C1.80223 5.05465 1.3 4.90398 0.868076 4.66291C0.868076 4.67296 0.868076 4.69305 0.868076 4.70309C0.868076 6.2801 1.98303 7.5859 3.46964 7.88724C3.19843 7.95755 2.90714 7.99773 2.61584 7.99773C2.40491 7.99773 2.20402 7.97764 2.00312 7.94751C2.41495 9.23322 3.61027 10.1674 5.03661 10.1975C3.92165 11.0714 2.52544 11.5837 1.0087 11.5837C0.737496 11.5837 0.48638 11.5736 0.22522 11.5435C1.6616 12.4676 3.36919 13 5.20736 13C11.1739 13 14.4384 8.058 14.4384 3.76894C14.4384 3.62831 14.4384 3.48769 14.4283 3.34706C15.0612 2.88501 15.6136 2.31247 16.0556 1.66961Z"
        fill="#12305B"
      />
    </svg>
  ),
  LinkedIn: (props: IconProps) => (
    <svg
      width="17"
      height="15"
      viewBox="0 0 17 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.15598 4.8494H0.841232V14.8036H4.15598V4.8494ZM4.36691 1.77574C4.35687 0.801409 3.65374 0.0581055 2.51869 0.0581055C1.39369 0.0581055 0.650391 0.801409 0.650391 1.77574C0.650391 2.72998 1.36356 3.49337 2.47852 3.49337H2.49861C3.65375 3.49337 4.37696 2.72998 4.36691 1.77574ZM16.079 9.09828C16.079 6.04471 14.4517 4.61837 12.272 4.61837C10.4841 4.61837 9.70061 5.61279 9.26869 6.29583H9.28879V4.8494H5.9841C5.9841 4.8494 6.02428 5.78355 5.9841 14.8036H9.28879V9.24895C9.28879 8.94761 9.31892 8.65632 9.39928 8.43534C9.64035 7.8427 10.1828 7.22998 11.0968 7.22998C12.2921 7.22998 12.7743 8.14404 12.7743 9.47998V14.8036H16.079V9.09828Z"
        fill="#12305B"
      />
    </svg>
  ),
  GPlus: (props: IconProps) => (
    <svg
      width="24"
      height="15"
      viewBox="0 0 24 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.9342 7.74222C14.9342 7.26008 14.8839 6.88843 14.8136 6.51678H7.86272V9.04803H12.0413C11.8705 10.1228 10.7757 12.2221 7.86272 12.2221C5.35156 12.2221 3.30245 10.1429 3.30245 7.57146C3.30245 5.00004 5.35156 2.92079 7.86272 2.92079C9.29911 2.92079 10.2534 3.53352 10.7958 4.05584L12.7946 2.13731C11.5089 0.931955 9.85156 0.20874 7.86272 0.20874C3.79464 0.20874 0.5 3.50338 0.5 7.57146C0.5 11.6395 3.79464 14.9342 7.86272 14.9342C12.1116 14.9342 14.9342 11.9509 14.9342 7.74222ZM23.6429 6.51678H21.5435V4.41745H19.4342V6.51678H17.3348V8.62615H19.4342V10.7255H21.5435V8.62615H23.6429V6.51678Z"
        fill="#12305B"
      />
    </svg>
  ),
  Hamburger: (props: IconProps) => (
    <svg
      width="40"
      height="40"
      viewBox="0 0 0.8 0.8"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M.1.15h.6a.05.05 0 0 1 0 .1H.1a.05.05 0 1 1 0-.1m0 .2h.6a.05.05 0 0 1 0 .1H.1a.05.05 0 1 1 0-.1m0 .2h.6a.05.05 0 0 1 0 .1H.1a.05.05 0 0 1 0-.1" />
    </svg>
  ),
  Close: (props: IconProps) => (
    <svg
      width="40"
      height="40"
      viewBox="0 0 0.8 0.8"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M.565.165a.05.05 0 1 1 .071.071L.471.4l.165.165a.05.05 0 0 1-.071.071L.4.471.235.636A.05.05 0 0 1 .164.565L.329.4.165.235A.05.05 0 0 1 .236.164L.4.329z"
      />
    </svg>
  ),
};
