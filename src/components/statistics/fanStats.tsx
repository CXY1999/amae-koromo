import React from "react";

import { useAsyncFactory, formatPercent } from "../../utils/index";
import { getFanStats } from "../../data/source/misc";
import Loading from "../misc/loading";
import { FanStatEntry, FanStats, modeLabel } from "../../data/types";
import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";

const SORTERS: (undefined | ((a: FanStatEntry, b: FanStatEntry) => number))[] = [
  undefined,
  (a, b) => a.count - b.count,
  (a, b) => b.count - a.count
];

export default function FanStatsView() {
  const { t } = useTranslation();
  const data = useAsyncFactory(getFanStats, [], "getFanStats");
  const [sorterIndex, setSorterIndex] = useState(0);
  const sortedData = useMemo((): FanStats | undefined => {
    if (!data) {
      return undefined;
    }
    if (!SORTERS[sorterIndex]) {
      return data;
    }
    const ret = { ...data };
    for (const key of Object.keys(ret)) {
      ret[key] = {
        ...ret[key],
        entries: [...ret[key].entries].sort(SORTERS[sorterIndex])
      };
    }
    return ret;
  }, [data, sorterIndex]);
  if (!sortedData) {
    return <Loading />;
  }
  return (
    <>
      <div className="row">
        {Object.entries(sortedData).map(([modeId, value]) => (
          <div className="col-xl-4" key={modeId}>
            <h2 className="text-center">{t(modeId === "0" ? "全部" : modeLabel(parseInt(modeId)))}</h2>
            <p className="text-center">
              {t("记录和出局数：")}
              {value.count}
            </p>
            <table className="table table-striped">
              <thead onClick={() => setSorterIndex((sorterIndex + 1) % SORTERS.length)} className="cursor-pointer">
                <tr>
                  <th>{t("役")}</th>
                  <th className="text-right">{t("记录数")}</th>
                  <th className="text-right">{t("比率")}</th>
                </tr>
              </thead>
              <tbody>
                {value.entries.map(x => (
                  <tr key={x.label}>
                    <td>{t(x.label)}</td>
                    <td className="text-right">{x.count}</td>
                    <td className="text-right">
                      {x.count
                        ? x.count / value.count < 0.0001
                          ? "<0.01%"
                          : formatPercent(x.count / value.count)
                        : ""}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </>
  );
}
