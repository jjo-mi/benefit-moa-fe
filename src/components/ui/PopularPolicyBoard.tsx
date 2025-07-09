"use client"

import { useState } from "react";

const categories = ["전체", "청년", "중년", "노년", "신혼부부"];

const dummyPolicies = [
  { id: 1, title: "청년 주택 지원", category: "청년", views: 1200 },
  { id: 2, title: "청년 창업 지원", category: "청년", views: 980 },
  { id: 3, title: "청년 취업 연수", category: "청년", views: 850 },
  { id: 4, title: "중년 재취업 지원", category: "중년", views: 1100 },
  { id: 5, title: "중년 창업 교육", category: "중년", views: 750 },
  { id: 6, title: "중년 자격증 취득", category: "중년", views: 920 },
  { id: 7, title: "중년 전직 지원", category: "중년", views: 680 },
  { id: 8, title: "노년 건강 검진", category: "노년", views: 1500 },
  { id: 9, title: "노년 여가 활동", category: "노년", views: 820 },
  { id: 10, title: "노년 재취업", category: "노년", views: 650 },
  { id: 11, title: "신혼부부 전세자금", category: "신혼부부", views: 900 },
  { id: 12, title: "신혼부부 주택 구입", category: "신혼부부", views: 1300 },
  { id: 13, title: "신혼부부 육아 지원", category: "신혼부부", views: 1100 },
  { id: 14, title: "신혼부부 교육 지원", category: "신혼부부", views: 780 },
];

export default function PopularPolicyBoard() {
  const [selected, setSelected] = useState("전체");
  const filtered = selected === "전체"
    ? dummyPolicies
    : dummyPolicies.filter(p => p.category === selected);

  return (
    <div className="w-full max-w-2xl mt-8 max-h-300 overflow-x-auto">
      <div className="flex gap-2 mb-4 ">
        {categories.map(cat => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full border border-blue-500 ${selected === cat ? "bg-blue-500 text-white" : "bg-white text-blue-500"}`}
            onClick={() => setSelected(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid gap-4">
        {filtered.map(policy => (
          <div key={policy.id} className="p-4 border rounded-lg shadow flex justify-between items-center">
            <div>
              <div className="font-semibold">{policy.title}</div>
              <div className="text-xs text-gray-400">{policy.category}</div>
            </div>
            <div className="text-xs text-gray-500">조회수 {policy.views}</div>
          </div>
        ))}
      </div>
    </div>
  );
}