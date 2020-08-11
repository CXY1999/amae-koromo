import React from "react";

import { useAsyncFactory, formatPercent, formatFixed3 } from "../../utils/index";
import { getGlobalStatistics } from "../../data/source/misc";
import Loading from "../misc/loading";
import { useModel } from "../modeModel/model";
import { Level } from "../../data/types/level";
import { ModelModeSelector } from "../modeModel";
import { useTranslation } from "react-i18next";
import Conf from "../../utils/conf";

const HEADERS = ["等级"].concat(
  ["一位率", "二位率", "三位率", "四位率"].slice(0, Conf.rankColors.length),
  ["被飞率", "平均顺位", "和牌率", "放铳率", "副露率", "立直率", "自摸率", "流局率", "流听率", "对战数", "在位记录"]
);

export default function DataByRank() {
  const { t } = useTranslation();
  const data = useAsyncFactory(getGlobalStatistics, [], "getGlobalStatistics");
  const [model] = useModel();
  if (!data) {
    return <Loading />;
  }
  const modeData = Object.entries(data[model.selectedMode || "0"]);
  modeData.sort((a, b) => a[0].localeCompare(b[0]));

  return (
    <>
      <ModelModeSelector />
      <table className="table table-responsive-xl table-striped table-sm table-hover text-center">
        <thead className="vertical-table-header">
          <tr>
            {HEADERS.map((x) => (
              <th key={x}>
                <div>{t(x)}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {modeData.map(([levelId, levelData]) => (
            <tr key={levelId}>
              <td className="text-nowrap">{new Level(parseInt(levelId)).getTag()}</td>
              {levelData.basic.rank_rates.slice(0, Conf.rankColors.length).map((x, i) => (
                <td key={i}>{formatPercent(x)}</td>
              ))}
              <td>{formatPercent(levelData.basic.negative_rate)}</td>
              <td>{formatFixed3(levelData.basic.avg_rank)}</td>
              <td>{formatPercent(levelData.extended.和牌率)}</td>
              <td>{formatPercent(levelData.extended.放铳率)}</td>
              <td>{formatPercent(levelData.extended.副露率)}</td>
              <td>{formatPercent(levelData.extended.立直率)}</td>
              <td>{formatPercent(levelData.extended.自摸率)}</td>
              <td>{formatPercent(levelData.extended.流局率)}</td>
              <td>{formatPercent(levelData.extended.流听率)}</td>
              <td>{levelData.basic.count}</td>
              <td>{levelData.num_players}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="row">
        <div className="col text-right">
          {t("统计半庄数：")}
          {Math.floor(modeData.map(([, levelData]) => levelData.basic.count).reduce((a, b) => a + b, 0) / 4)}
        </div>
      </div>
    </>
  );
}
