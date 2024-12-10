import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

interface IconProps {
  height?: number;
  width?: number;
  color?: string;
  props?: any;
}

export function BagIcon({
  height,
  width,
  color,
  props,
}: IconProps): JSX.Element {
  return (
    <Svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M20.224 12.526c-.586-3.121-.878-4.682-1.99-5.604C17.125 6 15.537 6 12.36 6h-.72c-3.176 0-4.764 0-5.875.922-1.11.922-1.403 2.483-1.989 5.604-.823 4.389-1.234 6.583-.034 8.029C4.942 22 7.174 22 11.639 22h.722c4.465 0 6.698 0 7.897-1.445.696-.84.85-1.93.696-3.555M9 6V5a3 3 0 116 0v1"
        stroke={color ?? "#1C274C"}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export function LikeIcon({
  height,
  width,
  color,
  props,
}: IconProps): JSX.Element {
  return (
    <Svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        opacity={0.5}
        d="M12 5.501l2 2"
        stroke={color ?? "#1C274C"}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <Path
        d="M8.962 18.911l.464-.589-.464.59zM12 5.501l-.54.52a.75.75 0 001.08 0l-.54-.52zm3.038 13.41l.465.59-.465-.59zm-5.612-.589c-1.516-1.195-3.173-2.361-4.488-3.842C3.65 13.028 2.75 11.335 2.75 9.137h-1.5c0 2.666 1.11 4.7 2.567 6.339 1.43 1.61 3.254 2.9 4.68 4.024l.93-1.178zM2.75 9.137c0-2.15 1.215-3.954 2.874-4.713 1.612-.736 3.778-.541 5.836 1.597l1.08-1.04C10.1 2.444 7.264 2.026 5 3.06 2.786 4.072 1.25 6.424 1.25 9.136h1.5zM8.497 19.5c.513.404 1.063.834 1.62 1.16.557.326 1.193.59 1.883.59v-1.5c-.31 0-.674-.12-1.126-.385-.453-.264-.922-.628-1.448-1.043L8.497 19.5zm7.006 0c1.426-1.125 3.25-2.413 4.68-4.024 1.457-1.64 2.567-3.673 2.567-6.339h-1.5c0 2.198-.9 3.891-2.188 5.343-1.315 1.48-2.972 2.647-4.488 3.842l.929 1.178zM22.75 9.137c0-2.712-1.535-5.064-3.75-6.077-2.264-1.034-5.098-.616-7.54 1.92l1.08 1.041c2.058-2.138 4.224-2.333 5.836-1.597 1.659.759 2.874 2.562 2.874 4.713h1.5zm-8.176 9.185c-.526.415-.995.779-1.448 1.043-.452.265-.816.385-1.126.385v1.5c.69 0 1.326-.264 1.883-.59.558-.326 1.107-.756 1.62-1.16l-.929-1.178z"
        fill={color ?? "#1C274C"}
      />
    </Svg>
  );
}

export function UserIcon({
  height,
  width,
  color,
  props,
}: IconProps): JSX.Element {
  return (
    <Svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle
        cx={height == undefined ? 12 : height / 2}
        cy={6}
        r={4}
        stroke={color ?? "#1C274C"}
        strokeWidth={1.5}
      />
      <Path
        d="M15 20.615c-.91.247-1.926.385-3 .385-3.866 0-7-1.79-7-4s3.134-4 7-4 7 1.79 7 4c0 .345-.077.68-.22 1"
        stroke={color ?? "#1C274C"}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export function SearchIcon({
  height,
  width,
  color,
  props,
}: IconProps): JSX.Element {
  return (
    <Svg
      width={width ?? 22}
      height={height ?? 22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M9.462 17.923a8.461 8.461 0 100-16.922 8.461 8.461 0 000 16.922zM20.999 21l-5.385-5.385"
        stroke={color ?? "#3E3E3E"}
        strokeWidth={1.71429}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
