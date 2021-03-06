import * as React from "react";
import Svg, { G, Path, Circle, Ellipse } from "react-native-svg";

function SvgComponent({ width = 672.531, height = 738.395 }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 672.531 738.395"
    >
      <G transform="translate(0 .001)">
        <Path
          d="M467 149.804c-46.62-7.44-99.71-11.41-155-11.41-50.6 0-99.35 3.32-142.98 9.58.01-.67.02-1.34.05-2.01a149 149 0 01297.91 1.82c.01.68.02 1.35.02 2.02z"
          fill="#2170fc"
        />
        <Path
          d="M337.551 1.341A149.047 149.047 0 00168.619 144.57c-.03.67-.04 1.34-.05 2.01 12.962-1.86 26.385-3.454 40.165-4.784A149.022 149.022 0 01337.551 1.341z"
          fill="#fff"
          opacity={0.1}
        />
        <Path
          d="M532.18 161.624a600.146 600.146 0 00-65.2-13.84 943.359 943.359 0 00-108.74-10.45 1133.585 1133.585 0 00-83.01-.34 973.287 973.287 0 00-106.16 8.97 624.282 624.282 0 00-77.25 15.66C32.61 177.994 0 199.934 0 223.394s32.61 45.4 91.82 61.77c41.64 11.52 92.98 19.37 148.92 22.97 23.09 1.5 46.96 2.26 71.26 2.26 24.38 0 48.33-.77 71.49-2.27 50.91-3.29 98.01-10.1 137.43-20 .21-.06.41-.11.62-.16 2.66-.66 5.28-1.35 7.87-2.04.93-.26 1.85-.51 2.77-.76a.972.972 0 01.16-.05c.88-.24 1.75-.49 2.62-.73 1.74-.5 3.46-.99 5.15-1.5.08-.02.15-.04.22-.06 1.47-.44 2.91-.88 4.34-1.32 1.17-.37 2.33-.73 3.48-1.1q1.26-.4 2.49-.81c.6-.2 1.19-.39 1.77-.59.79-.26 1.58-.53 2.36-.8.33-.11.66-.22.98-.34.75-.25 1.48-.51 2.21-.77.79-.28 1.58-.57 2.36-.85.65-.23 1.3-.47 1.94-.71.54-.21 1.07-.41 1.61-.61 1.47-.55 2.91-1.12 4.33-1.68.71-.29 1.42-.57 2.12-.86s1.39-.57 2.07-.86q1.679-.705 3.3-1.41c.52-.24 1.05-.47 1.56-.69.39-.18.77-.35 1.16-.53.28-.12.56-.25.83-.38 1.01-.46 2.01-.93 2.99-1.4q5.64-2.7 10.53-5.52c20.45-11.71 31.24-24.7 31.24-38.2 0-23.46-32.61-45.397-91.82-61.77zm-.54 121.62c-41.69 11.53-93.17 19.38-149.26 22.95-22.81 1.45-46.39 2.2-70.38 2.2-23.91 0-47.41-.74-70.15-2.19-56.18-3.56-107.74-11.41-149.49-22.96C34.09 267.124 2 245.874 2 223.394a24.119 24.119 0 01.74-5.89c5.1-20.28 36.47-39.26 89.62-53.96a623.8 623.8 0 0176.66-15.57 976.009 976.009 0 01106.8-9q17.881-.585 36.18-.58c15.41 0 30.65.31 45.63.91a941.39 941.39 0 01109.37 10.5 598.845 598.845 0 0164.64 13.74c53.14 14.7 84.5 33.67 89.61 53.94a23.818 23.818 0 01.75 5.91c0 22.48-32.09 43.73-90.36 59.85z"
          fill="#3f3d56"
        />
        <Path
          d="M623.43 224.304c0 13.36-11.01 26-30.67 37.29-3.27 1.88-6.79 3.72-10.53 5.52-.98.47-1.98.94-2.99 1.4-.27.13-.55.26-.83.38-.39.18-.77.35-1.16.53-.51.22-1.04.45-1.56.69q-1.62.705-3.3 1.41c-.68.29-1.38.58-2.07.86s-1.41.57-2.12.86c-1.42.56-2.86 1.13-4.33 1.68-.54.2-1.07.4-1.61.61-.64.24-1.29.48-1.94.71-.78.28-1.57.57-2.36.85-.73.26-1.46.52-2.21.77-.32.12-.65.23-.98.34-.78.27-1.57.54-2.36.8-.58.2-1.17.39-1.77.59l-2.49.81c-1.15.37-2.31.73-3.48 1.1-1.43.44-2.87.88-4.34 1.32-.07.02-.14.04-.22.06-1.69.51-3.41 1-5.15 1.5-.87.24-1.74.49-2.62.73a.973.973 0 00-.16.05c-.92.25-1.84.5-2.77.76-2.58.68-5.21 1.37-7.87 2.04-.21.05-.41.1-.62.16-38.35 9.58-85.4 16.56-137.47 19.93-22.81 1.47-46.59 2.25-71.02 2.25-24.65 0-48.63-.79-71.62-2.29-137.24-8.95-239.38-43.03-239.38-83.71a25.072 25.072 0 011.12-7.3c.06.17.12.33.19.5 14.27 37.48 115.54 67.77 246.94 75.16 20.13 1.14 40.98 1.73 62.32 1.73 21.43 0 42.36-.6 62.57-1.74 131.29-7.42 232.46-37.72 246.68-75.17q.36-.9.63-1.8a25.306 25.306 0 011.55 8.62zM91.666 213.54c-16.643 0-34.331-3.581-34.331-10.217s17.688-10.217 34.331-10.217 34.331 3.581 34.331 10.217-17.685 10.217-34.331 10.217zm0-18.434c-19.053 0-32.331 4.331-32.331 8.217s13.278 8.217 32.331 8.217 32.331-4.331 32.331-8.217-13.274-8.217-32.331-8.217z"
          fill="#3f3d56"
        />
        <Path
          d="M162.666 260.54c-16.643 0-34.331-3.581-34.331-10.217s17.688-10.217 34.331-10.217 34.331 3.581 34.331 10.217-17.685 10.217-34.331 10.217zm0-18.434c-19.053 0-32.331 4.331-32.331 8.217s13.278 8.217 32.331 8.217 32.331-4.331 32.331-8.217-13.275-8.217-32.331-8.217zM531.666 213.54c-16.643 0-34.331-3.581-34.331-10.217s17.688-10.217 34.331-10.217 34.331 3.581 34.331 10.217-17.685 10.217-34.331 10.217zm0-18.434c-19.053 0-32.331 4.331-32.331 8.217s13.278 8.217 32.331 8.217 32.331-4.331 32.331-8.217-13.275-8.217-32.331-8.217zM460.666 260.54c-16.643 0-34.331-3.581-34.331-10.217s17.688-10.217 34.331-10.217 34.331 3.581 34.331 10.217-17.685 10.217-34.331 10.217zm0-18.434c-19.053 0-32.331 4.331-32.331 8.217s13.278 8.217 32.331 8.217 32.331-4.331 32.331-8.217-13.275-8.217-32.331-8.217zM311.666 282.54c-16.643 0-34.331-3.581-34.331-10.217s17.688-10.217 34.331-10.217 34.331 3.581 34.331 10.217-17.685 10.217-34.331 10.217zm0-18.434c-19.053 0-32.331 4.331-32.331 8.217s13.278 8.217 32.331 8.217 32.331-4.331 32.331-8.217-13.275-8.217-32.331-8.217z"
          fill="#3f3d56"
        />
        <Circle
          cx={42.012}
          cy={42.012}
          r={42.012}
          transform="translate(294.966 408.692)"
          fill="#2f2e41"
        />
        <Path
          fill="#2f2e41"
          d="M300.554 488.551l20.447-10.24 5.715 11.412-20.447 10.24z"
        />
        <Ellipse
          cx={3.989}
          cy={10.636}
          rx={3.989}
          ry={10.636}
          transform="rotate(-56.601 599.899 -23.16)"
          fill="#2f2e41"
        />
        <Path
          fill="#2f2e41"
          d="M347.238 489.714l5.715-11.412 20.447 10.24-5.715 11.412z"
        />
        <Ellipse
          cx={10.636}
          cy={3.989}
          rx={10.636}
          ry={3.989}
          transform="rotate(-33.399 1007.17 -356.91)"
          fill="#2f2e41"
        />
        <Circle
          cx={14.359}
          cy={14.359}
          r={14.359}
          transform="translate(319.678 426.069)"
          fill="#fff"
        />
        <Ellipse
          cx={4.766}
          cy={4.8}
          rx={4.766}
          ry={4.8}
          transform="rotate(-45 687.882 -178.047)"
          fill="#3f3d56"
        />
        <Path
          d="M370.12 404.997c.632-15.554-12.773-28.728-29.941-29.425s-31.6 11.346-32.229 26.9 11.3 19.087 28.47 19.785 33.068-1.704 33.7-17.26z"
          fill="#2170fc"
        />
        <Ellipse
          cx={6.594}
          cy={21.006}
          rx={6.594}
          ry={21.006}
          transform="rotate(-40.645 781.921 -266.11)"
          fill="#2f2e41"
        />
        <Ellipse
          cx={21.006}
          cy={6.594}
          rx={21.006}
          ry={6.594}
          transform="rotate(-49.355 647.088 -64.762)"
          fill="#2f2e41"
        />
        <Path
          d="M348.517 467.261a9.572 9.572 0 01-18.835 3.429v-.018c-.942-5.2 3.08-7.043 8.283-7.985s9.61-.628 10.552 4.574z"
          fill="#fff"
        />
        <Path
          d="M266 495.397a2 2 0 01-2-2v-118a2 2 0 014 0v118a2 2 0 01-2 2zM236 601.397a2 2 0 01-2-2v-86a2 2 0 014 0v86a2 2 0 01-2 2zM313 530.397a2 2 0 01-2-2v-118a2 2 0 014 0v118a2 2 0 01-2 2zM284 615.397a2 2 0 01-2-2v-48a2 2 0 014 0v48a2 2 0 01-2 2zM325 369.397a2 2 0 01-2-2v-48a2 2 0 014 0v48a2 2 0 01-2 2zM225 390.397a2 2 0 01-2-2v-48a2 2 0 014 0v48a2 2 0 01-2 2zM399 395.397a2 2 0 01-2-2v-48a2 2 0 014 0v48a2 2 0 01-2 2zM395 545.397a2 2 0 01-2-2v-58a2 2 0 014 0v58a2 2 0 01-2 2zM355 596.397a2 2 0 01-2-2v-86a2 2 0 014 0v86a2 2 0 01-2 2zM363 449.397a2 2 0 01-2-2v-118a2 2 0 014 0v118a2 2 0 01-2 2z"
          fill="#ccc"
        />
        <Ellipse
          cx={6.76}
          cy={21.534}
          rx={6.76}
          ry={21.534}
          transform="rotate(-39.938 1212.138 -455.824)"
          fill="#2f2e41"
        />
        <Circle
          cx={43.067}
          cy={43.067}
          r={43.067}
          transform="rotate(-71.58 734.994 9.116)"
          fill="#2f2e41"
        />
        <Path
          fill="#2f2e41"
          d="M553.707 710.302h13.084v23.442h-13.084zM527.54 710.302h13.084v23.442H527.54z"
        />
        <Ellipse
          cx={10.903}
          cy={4.089}
          rx={10.903}
          ry={4.089}
          transform="translate(544.985 729.928)"
          fill="#2f2e41"
        />
        <Ellipse
          cx={10.903}
          cy={4.089}
          rx={10.903}
          ry={4.089}
          transform="translate(518.817 729.382)"
          fill="#2f2e41"
        />
        <Path
          d="M535.04 622.366c3.846-15.487 20.821-24.6 37.915-20.356s27.834 20.24 23.989 35.727-16.6 15.537-33.7 11.292-32.05-11.176-28.204-26.663z"
          fill="#b4cff8"
        />
        <Ellipse
          cx={6.76}
          cy={21.534}
          rx={6.76}
          ry={21.534}
          transform="rotate(-64.626 755.379 -50.937)"
          fill="#2f2e41"
        />
        <Circle
          cx={14.359}
          cy={14.359}
          r={14.359}
          transform="translate(527.765 653.056)"
          fill="#fff"
        />
        <Circle
          cx={4.786}
          cy={4.786}
          r={4.786}
          transform="translate(531.436 657.482)"
          fill="#3f3d56"
        />
        <Circle
          cx={6}
          cy={6}
          r={6}
          transform="translate(536 691.394)"
          fill="#fff"
        />
        <Path
          d="M671.532 738.397h-236a1 1 0 010-2h236a1 1 0 010 2z"
          fill="#3f3d56"
        />
      </G>
    </Svg>
  );
}

export default SvgComponent;
