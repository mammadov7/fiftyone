import { Setter } from "@fiftyone/relay";
import { Session } from "@fiftyone/state";
import { MutableRefObject } from "react";
import { Environment } from "react-relay";
import { Queries } from "../makeRoutes";
import { RoutingContext } from "../routing";

type SetterContext = {
  environment: Environment;
  router: RoutingContext<Queries>;
  sessionRef: MutableRefObject<Session>;
};

export type RegisteredSetter = (ctx: SetterContext) => Setter;

export const REGISTERED_SETTERS = new Map<string, RegisteredSetter>();

export default (key: string, setter: RegisteredSetter) => {
  REGISTERED_SETTERS.set(key, setter);
};
