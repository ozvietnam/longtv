/**
 * Mục tiêu logistics 6 tháng — Oz khởi điểm 50 cont/tháng (T8) → 200 cont/tháng (T12).
 * Tổng xuất + nhập. Nhập thường nhiều hơn xuất ~30% (NM FDI nhập máy/NVL).
 */

/** Nhập = xuất × 1,3 → tỷ lệ trên tổng cont */
export const IMPORT_VS_EXPORT_RATIO = 1.3;

export const EXPORT_IMPORT_MIX = {
  export: 1 / (1 + IMPORT_VS_EXPORT_RATIO),
  import: IMPORT_VS_EXPORT_RATIO / (1 + IMPORT_VS_EXPORT_RATIO),
} as const;

/** Báo giá bán · cost đối tác · GP · biên % (trên doanh thu dòng) */
export const LOGISTICS_SERVICE_LINES = [
  {
    code: "L-HQ-01",
    name: "Khai báo hải quan — xuất khẩu (FCL, luồng xanh)",
    appliesTo: "export" as const,
    unit: "cont",
    sellVnd: 750_000,
    costVnd: 500_000,
    gpVnd: 250_000,
    marginPct: 33.3,
  },
  {
    code: "L-HQ-02",
    name: "Khai báo hải quan — nhập khẩu (cont đầu)",
    appliesTo: "import" as const,
    unit: "cont",
    sellVnd: 1_000_000,
    costVnd: 650_000,
    gpVnd: 350_000,
    marginPct: 35.0,
  },
  {
    code: "L-HQ-03",
    name: "Khai báo — cont tiếp (cùng DN, cùng ngày)",
    appliesTo: "both" as const,
    unit: "cont",
    sellVnd: 450_000,
    costVnd: 300_000,
    gpVnd: 150_000,
    marginPct: 33.3,
  },
  {
    code: "L-TR-01",
    name: "Trucking cảng HP → Thái Nguyên (20DC)",
    appliesTo: "both" as const,
    unit: "cont",
    sellVnd: 5_900_000,
    costVnd: 5_350_000,
    gpVnd: 550_000,
    marginPct: 9.3,
    shareOfCont: 0.6,
  },
  {
    code: "L-TR-03",
    name: "Trucking nội Hải Phòng (Đình Vũ / Tràng Duệ)",
    appliesTo: "both" as const,
    unit: "cont",
    sellVnd: 1_750_000,
    costVnd: 1_500_000,
    gpVnd: 250_000,
    marginPct: 14.3,
    shareOfCont: 0.4,
  },
  {
    code: "L-CO-01",
    name: "Xin C/O Form E (xuất khẩu)",
    appliesTo: "export" as const,
    unit: "lần",
    sellVnd: 1_600_000,
    costVnd: 1_000_000,
    gpVnd: 600_000,
    marginPct: 37.5,
    shareOfExport: 0.32,
  },
  {
    code: "L-TR-04",
    name: "Phí điều phối & tracking (tách riêng nếu cần)",
    appliesTo: "both" as const,
    unit: "cont",
    sellVnd: 300_000,
    costVnd: 0,
    gpVnd: 300_000,
    marginPct: 100,
    optional: true,
  },
] as const;

/** GP trucking blended (60% tuyến dài + 40% nội HP) */
const TRUCKING_BLENDED = {
  sellVnd: Math.round(0.6 * 5_900_000 + 0.4 * 1_750_000),
  costVnd: Math.round(0.6 * 5_350_000 + 0.4 * 1_500_000),
  gpVnd: Math.round(0.6 * 550_000 + 0.4 * 250_000),
};

/** Một cont xuất khẩu đầy đủ (desk) */
export const PER_EXPORT_CONT = {
  customs: { sell: 750_000, cost: 500_000, gp: 250_000 },
  trucking: TRUCKING_BLENDED,
  co: { sell: Math.round(1_600_000 * 0.32), cost: Math.round(1_000_000 * 0.32), gp: Math.round(600_000 * 0.32) },
  get total() {
    const sell = this.customs.sell + this.trucking.sellVnd + this.co.sell;
    const cost = this.customs.cost + this.trucking.costVnd + this.co.cost;
    const gp = this.customs.gp + this.trucking.gpVnd + this.co.gp;
    return { sellVnd: sell, costVnd: cost, gpVnd: gp, marginPct: Math.round((gp / sell) * 1000) / 10 };
  },
};

/** Một cont nhập khẩu đầy đủ (desk) */
export const PER_IMPORT_CONT = {
  customs: { sell: 1_000_000, cost: 650_000, gp: 350_000 },
  trucking: TRUCKING_BLENDED,
  get total() {
    const sell = this.customs.sell + this.trucking.sellVnd;
    const cost = this.customs.cost + this.trucking.costVnd;
    const gp = this.customs.gp + this.trucking.gpVnd;
    return { sellVnd: sell, costVnd: cost, gpVnd: gp, marginPct: Math.round((gp / sell) * 1000) / 10 };
  },
};

/** Blended — nhập nhiều hơn xuất 30% (~43% xuất / ~57% nhập) */
export const PER_CONT_BLENDED = (() => {
  const e = PER_EXPORT_CONT.total;
  const i = PER_IMPORT_CONT.total;
  const sellVnd = Math.round(EXPORT_IMPORT_MIX.export * e.sellVnd + EXPORT_IMPORT_MIX.import * i.sellVnd);
  const costVnd = Math.round(EXPORT_IMPORT_MIX.export * e.costVnd + EXPORT_IMPORT_MIX.import * i.costVnd);
  const gpVnd = sellVnd - costVnd;
  return {
    sellVnd,
    costVnd,
    gpVnd,
    marginPct: Math.round((gpVnd / sellVnd) * 1000) / 10,
    exportShare: EXPORT_IMPORT_MIX.export,
    importShare: EXPORT_IMPORT_MIX.import,
  };
})();

/**
 * Ramp 6 tháng (T7–T12):
 * - T7 (tháng 1): thiết lập GPLS + pilot Oz ~25 cont
 * - T8 (tháng 2): 50 cont/tháng — nguồn Oz có sẵn
 * - T9–T12: tăng đều → 200 cont/tháng tháng 6
 */
export const LOGISTICS_RAMP_MONTHS = [
  { month: 1, label: "T7 · Tháng 1", cont: 25, note: "Pilot Oz · MOU GPLS" },
  { month: 2, label: "T8 · Tháng 2", cont: 50, note: "Khởi điểm Oz — 50 cont/tháng" },
  { month: 3, label: "T9 · Tháng 3", cont: 88, note: "Tăng đều (+38)" },
  { month: 4, label: "T10 · Tháng 4", cont: 125, note: "Tăng đều (+37)" },
  { month: 5, label: "T11 · Tháng 5", cont: 163, note: "Tăng đều (+38)" },
  { month: 6, label: "T12 · Tháng 6", cont: 200, note: "Mục tiêu — 200 cont/tháng" },
] as const;

export const LOGISTICS_6M_TARGET = {
  contPerMonthEnd: 200,
  contCumulative: LOGISTICS_RAMP_MONTHS.reduce((s, m) => s + m.cont, 0),
  ozStartMonth: 2,
  ozStartCont: 50,
  exportImportNote: "~43% xuất / ~57% nhập (nhập nhiều hơn xuất 30%)",
  splitAt200: { export: 87, import: 113, total: 200 },
};

export function monthLogisticsPnl(cont: number) {
  const blended = PER_CONT_BLENDED;
  const exportCont = Math.round(cont * EXPORT_IMPORT_MIX.export);
  const importCont = cont - exportCont;
  return {
    cont,
    exportCont,
    importCont,
    revenueVnd: cont * blended.sellVnd,
    costVnd: cont * blended.costVnd,
    gpVnd: cont * blended.gpVnd,
    marginPct: blended.marginPct,
  };
}

export const LOGISTICS_6M_TOTALS = (() => {
  let revenueVnd = 0;
  let gpVnd = 0;
  let cont = 0;
  let exportCont = 0;
  let importCont = 0;
  for (const m of LOGISTICS_RAMP_MONTHS) {
    const pnl = monthLogisticsPnl(m.cont);
    revenueVnd += pnl.revenueVnd;
    gpVnd += pnl.gpVnd;
    cont += m.cont;
    exportCont += pnl.exportCont;
    importCont += pnl.importCont;
  }
  return {
    cont,
    exportCont,
    importCont,
    revenueVnd,
    gpVnd,
    marginPct: Math.round((gpVnd / revenueVnd) * 1000) / 10,
    revenueBillion: Math.round((revenueVnd / 1_000_000_000) * 10) / 10,
    gpMillion: Math.round(gpVnd / 1_000_000),
  };
})();

export const LOGISTICS_TRANSACTIONAL_PRICING = [
  { code: "L-HQ-01", name: "Khai báo xuất FCL (luồng xanh)", priceVnd: "750.000", unit: "cont", margin: "33%", gpVnd: "250.000" },
  { code: "L-HQ-02", name: "Khai báo nhập FCL (cont đầu)", priceVnd: "1.000.000", unit: "cont", margin: "35%", gpVnd: "350.000" },
  { code: "L-TR-01", name: "Trucking HP → TN (20DC)", priceVnd: "5.900.000", unit: "cont", margin: "9%", gpVnd: "550.000" },
  { code: "L-TR-03", name: "Trucking nội HP", priceVnd: "1.750.000", unit: "cont", margin: "14%", gpVnd: "250.000" },
  { code: "L-CO-01", name: "Xin C/O Form E (xuất khẩu)", priceVnd: "1.600.000", unit: "lần", margin: "38%", gpVnd: "600.000" },
] as const;

export const LOGISTICS_VOLUME_TARGETS = {
  month6: { bear: "25 cont/tháng", base: "200 cont/tháng", note: "Tổng xuất + nhập" },
  ozStart: "50 cont/tháng từ tháng 2 (nguồn Oz)",
  gpPerCont: `~${(PER_CONT_BLENDED.gpVnd / 1_000_000).toFixed(2)} triệu (~${PER_CONT_BLENDED.marginPct}%)`,
  cont6m: String(LOGISTICS_6M_TARGET.contCumulative),
  revenue6m: `~${LOGISTICS_6M_TOTALS.revenueBillion} tỷ VND`,
  gp6m: `~${LOGISTICS_6M_TOTALS.gpMillion} triệu VND`,
  benchmarkDoc: "/docs/04-research/2026-07/logistics-pricing-benchmark",
};
