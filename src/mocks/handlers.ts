import { http, HttpResponse } from "msw";
import { robotsApiMock } from "./robotMock";

const handlers = [
  http.get(
    "https://two02309-w10chwe-back-patricia-femenias.onrender.com/robots",
    () => {
      return HttpResponse.json(robotsApiMock);
    },
  ),
];

export default handlers;
