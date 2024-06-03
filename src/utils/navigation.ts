import { NavigateFunction } from "react-router-dom";

export const navigateToPreviousPage = (
  pathname: string,
  navigate: NavigateFunction
): void => {
  if (
    pathname.startsWith("/station-lists/station-details") ||
    pathname.startsWith("/station-lists")
  ) {
    navigate(-1);
  }
};
