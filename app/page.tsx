"use client";

import { useMemo, useState } from "react";

export default function Page() {
  const [search, setSearch] = useState("");

  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const handleCopy = async (item: any) => {
    await navigator.clipboard.writeText(item.CN);

    setCopiedItem(item.EN);

    setTimeout(() => {
      setCopiedItem(null);
    }, 1500);
  };

  const items = [
    { EN: "Aether Nobilitas", CN: "以太贵族" },
    { EN: "Sacred Knight (Black)", CN: "神圣骑士团（黑）" },
    { EN: "Sacred Knight", CN: "神圣骑士团" },
    { EN: "Ocean Pearl (Red)", CN: "沧海遗珠（赤）" },
    { EN: "Ocean Pearl", CN: "沧海遗珠" },
    { EN: "Agent Nous", CN: "奴斯族特工" },
    { EN: "Agent Nous (White)", CN: "奴斯族特工（白）" },
    { EN: "Eligos (White)", CN: "埃力格（白）" },
    { EN: "Aurora Mustika", CN: "神秘极光" },
    { EN: "Rosa Lethe", CN: "绯色忘川" },
    { EN: "Sanctus Seraphim", CN: "神圣炽天使发型" },
    { EN: "White Mass", CN: "黑色魔使（白）" },
    { EN: "Wander Marchen", CN: "幻影童话" },
    { EN: "White Dragon Servius (Black)", CN: "白龙：塞尔维乌斯（黑）" },
    { EN: "Eligos", CN: "埃力格" },
    { EN: "Horde of Darkness", CN: "黑暗君主下衣" },
    { EN: "Lapis Arbiter", CN: "青金石裁决者" },
    { EN: "Divinity of Seven Realms", CN: "七界的权能" },
    { EN: "Brilliant Knight", CN: "辉煌骑士" },
    { EN: "Nereid", CN: "涅瑞伊得斯" },
    { EN: "Mechanic General", CN: "机械上将下衣" },
    { EN: "Shaviana Truffles", CN: "沙漠之星" },
    { EN: "Crescent Lullaby", CN: "新月摇篮曲" },
    { EN: "Black Mass", CN: "黑色魔使：" },
    { EN: "Radiant Flower (Black)", CN: "百花缭乱（黑）" },
    { EN: "Radiant Flower", CN: "百花缭乱" },
    { EN: "Chess Arena (Black)", CN: "国际象棋竞技场（黑）" },
    { EN: "Chess Arena", CN: "国际象棋竞技场" },
    { EN: "Ruler of Dawn", CN: "黎明的支配者" },
    { EN: "Ruler of Dusk", CN: "黄昏的支配者" },
    { EN: "Mariposa Requiem (White)", CN: "马里波萨安魂曲（白）" },
    { EN: "Mariposa Requiem", CN: "马里波萨安魂曲" },
    { EN: "White Dragon Servius", CN: "白龙：塞尔维乌斯" },
    { EN: "Elpheus", CN: "艾尔意志" },
    { EN: "Salvatore Rosso", CN: "火神罗索" },
    { EN: "Celestial Master", CN: "天界主宰者" },
    { EN: "Arch Priest", CN: "弧光圣职者-光之引导者" },
    { EN: "Perkisas", CN: "佩尔基萨斯-贪欲的相位" },
    { EN: "Henir", CN: "赫尼尔-异界的支配者" },
    { EN: "Masquerade", CN: "假面舞会-皇家孔雀" },
    { EN: "Velder Academy Knights (Black)", CN: "拜德学院骑士团-黑色贵族" },
    { EN: "Velder Academy Knights", CN: "拜德学院骑士团" },
    { EN: "Salvatore Gaia", CN: "大地之神盖亚" },
  ];

  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      item.EN.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 p-8">
      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="mb-6 text-2xl font-bold">Elsword Ice Burners</h1>
        <input
          type="text"
          placeholder="Search EN name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mb-6 w-full rounded-lg border px-4 py-2 max-w-2xl"
        />
      </div>

      <div className="space-y-3 grid grid-cols-3 gap-4">
        {filteredItems.map((item) => (
          <div
            key={`${item.EN}-${item.CN}`}
            className="flex items-center justify-between rounded-lg border p-4"
          >
            <div>
              <div className="font-semibold">{item.EN}</div>
              <div className="text-sm text-gray-500">{item.CN}</div>
            </div>

            <button
              onClick={() => handleCopy(item)}
              className="rounded bg-blue-500 px-4 py-2 text-white"
            >
              {copiedItem === item.EN ? "Copied!" : "Copy"}
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
