/* eslint-disable @typescript-eslint/no-empty-function */
import dayjs from "dayjs";
import React, { useReducer, useContext, ReactChild, useMemo } from "react";
import { useHistory } from "react-router";
import { useEventCallback } from "../../utils";
import { generatePath } from "./routes";

export interface ListingModel {
  type: undefined;
  date: dayjs.ConfigType | null;
  selectedMode: string;
  searchText: string;
}
export interface PlayerModel {
  type: "player";
  playerId: string;
  startDate: dayjs.ConfigType | null;
  endDate: dayjs.ConfigType | null;
  selectedMode: string;
  searchText: string;
  rank: number | null;
}
export type Model = ListingModel | PlayerModel;
export const Model = Object.freeze({
  removeExtraParams(model: Model): Model {
    if (model.type === "player") {
      return {
        type: "player",
        playerId: model.playerId,
        selectedMode: "",
        startDate: null,
        endDate: null,
        searchText: "",
        rank: null,
      };
    }
    return {
      type: undefined,
      searchText: "",
      selectedMode: "",
      date: null,
    };
  },
});
type ModelUpdate = Partial<ListingModel> | ({ type: "player" } & Partial<PlayerModel>);
type DispatchModelUpdate = (props: ModelUpdate) => void;

const DEFAULT_MODEL: ListingModel = { type: undefined, date: null, selectedMode: "", searchText: "" };
const ModelContext = React.createContext<[Readonly<Model>, DispatchModelUpdate]>([DEFAULT_MODEL, () => {}]);
export const useModel = () => useContext(ModelContext);

function normalizeUpdate(newProps: ModelUpdate): ModelUpdate {
  if (newProps.type === undefined) {
    if (newProps.date) {
      newProps.date = dayjs(newProps.date).valueOf();
    }
  }
  for (const key of Object.keys(newProps)) {
    if (key !== "type" && newProps[key as keyof typeof newProps] === undefined) {
      delete newProps[key as keyof typeof newProps];
    }
  }
  return newProps;
}
function isSameModel(a: Model, b: Model): boolean {
  return generatePath(a) === generatePath(b);
}

const OnRouteModelUpdatedContext = React.createContext((() => {}) as (model: Model) => void);
export const useOnRouteModelUpdated = () => useContext(OnRouteModelUpdatedContext);

export function ModelProvider({ children }: { children: ReactChild | ReactChild[] }) {
  const history = useHistory();
  const [model, setModel] = useReducer(
    (oldModel, newModel: Model): Readonly<Model> => {
      if (isSameModel(oldModel, newModel)) {
        return oldModel;
      }
      return Object.freeze(newModel);
    },
    undefined,
    () => Object.freeze(DEFAULT_MODEL as Model)
  );
  const dispatchModelUpdate = useEventCallback(
    (newProps: ModelUpdate) => {
      const newModel = {
        ...((model.type === newProps.type ? model : {}) as Model),
        ...(normalizeUpdate(newProps) as Model),
      };
      if (isSameModel(model, newModel)) {
        return;
      }
      history.replace(generatePath(newModel));
    },
    [model, history]
  );
  const value = useMemo(() => [model, dispatchModelUpdate] as [Readonly<Model>, DispatchModelUpdate], [
    model,
    dispatchModelUpdate,
  ]);
  return (
    <ModelContext.Provider value={value}>
      <OnRouteModelUpdatedContext.Provider value={setModel}>{children}</OnRouteModelUpdatedContext.Provider>
    </ModelContext.Provider>
  );
}
