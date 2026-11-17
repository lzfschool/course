/*
  課程目錄資料：首頁（index.html）依這份資料產生「課程」與「章節」選單。

  新增課程：在 COURSES 陣列加一筆 { id, name, desc, chapters:[...] }
    - id   ：英文資料夾名稱，網頁放在同名資料夾，例如 basic-electricity-lab/
  新增章節：在該課程的 chapters 加一筆 { no, title, sections:[...] }
  新增項目：在章節的 sections[].items 加一筆
    { no:"工作項目 7", title:"…", desc:"…", href:"資料夾/檔名.html" }
    尚未完成的項目不寫 href，首頁會顯示為「製作中」。
*/
window.COURSES = [
  {
    id: "basic-electricity-lab",
    name: "基本電學實習",
    desc: "可操作的電路圖與麵包板接線圖、數位三用電表、可更換的色碼電阻，以及可檢查答案的學習單。",
    chapters: [
      {
        no: 3,
        title: "直流電路實作",
        sections: [
          {
            title: "3-2 串並聯電路與惠斯登電橋",
            items: [
              { no: "工作項目 1", title: "串並聯電路值之量測", desc: "量測各點電壓與各支路電流，驗證串並聯電路的關係。", href: "basic-electricity-lab/ch3-item1.html" },
              { no: "工作項目 2", title: "判斷串並聯電路系統排列之電阻值", desc: "梯形電阻網路逐步化簡，並以歐姆檔量測總電阻。", href: "basic-electricity-lab/ch3-item2.html" },
              { no: "工作項目 3", title: "惠斯登電橋之平衡條件求未知電阻", desc: "調整可變電阻使電橋平衡，以 LED 或檢流計判斷。", href: "basic-electricity-lab/ch3-item3.html" }
            ]
          },
          {
            title: "3-3 重疊定理",
            items: [
              { no: "工作項目 4", title: "重疊定理實習", desc: "兩電源輪流換成短路線，量測電流並相加驗證。", href: "basic-electricity-lab/ch3-item4.html" }
            ]
          },
          {
            title: "3-4 戴維寧及諾頓定理",
            items: [
              { no: "工作項目 5", title: "量測等效電阻與電壓並繪戴維寧等效電路圖", desc: "量 RTh 與開路電壓 ETh，接回負載驗證。", href: "basic-electricity-lab/ch3-item5.html" },
              { no: "工作項目 6", title: "量測等效電阻與短路電流並繪諾頓等效電路圖", desc: "量 RN 與短路電流 IN，以重疊定理計算驗證。", href: "basic-electricity-lab/ch3-item6.html" }
            ]
          },
          {
            title: "3-5 最大功率轉移定理",
            items: [
              { no: "工作項目 7", title: "製作功率消耗曲線圖", desc: "更換負載量 VL、算 PL，畫出功率曲線，驗證 RL = RS 時功率最大。", href: "basic-electricity-lab/ch3-item7.html" },
              { no: "工作項目 8", title: "量測等效電壓與電阻值，並計算最大功率值", desc: "" }
            ]
          }
        ]
      }
    ]
  }
];
