"use client";

import React, { useState } from "react";
import {
  Zap,
  RotateCw,
  ShieldCheck,
  BatteryCharging,
  Sliders,
  Settings,
  PhoneCall,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export default function ShutterComparison() {
  const [activeTab, setActiveTab] = useState<"comparison" | "motorized" | "manual">(
    "comparison"
  );

  return (
    <div className="bg-charcoal-900/90 rounded-2xl border border-charcoal-700/80 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      {/* Decorative ambient gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 border-b border-charcoal-800 pb-6">
        <div>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-charcoal-800 border border-gold-400/30 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sliders className="w-3.5 h-3.5 text-gold-400" />
            20-Year Master Technician Specialization
          </span>
          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
            Rolling Shutter Mechanisms Comparison
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-xl">
            From smart remote-controlled tubular motors to fail-safe manual crank gearboxes, we engineer durable systems designed for zero operational failure.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center gap-1.5 p-1 bg-charcoal-950 rounded-xl border border-charcoal-800">
          <button
            type="button"
            onClick={() => setActiveTab("comparison")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeTab === "comparison"
                ? "bg-charcoal-800 text-gold-400 border border-gold-400/30 shadow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Direct Comparison
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("motorized")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeTab === "motorized"
                ? "bg-charcoal-800 text-gold-400 border border-gold-400/30 shadow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Motorized Deep Dive
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("manual")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeTab === "manual"
                ? "bg-charcoal-800 text-gold-400 border border-gold-400/30 shadow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Manual Overrides
          </button>
        </div>
      </div>

      {/* Tab 1: Comparison Matrix */}
      {activeTab === "comparison" && (
        <div className="space-y-6">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-charcoal-700 text-slate-400">
                  <th className="pb-3.5 font-semibold uppercase tracking-wider text-[11px]">
                    Engineering Aspect
                  </th>
                  <th className="pb-3.5 font-semibold uppercase tracking-wider text-gold-400 text-[11px]">
                    Automatic Motorized Shutter
                  </th>
                  <th className="pb-3.5 font-semibold uppercase tracking-wider text-slate-200 text-[11px]">
                    Manual Mechanical Shutter
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-charcoal-800 text-slate-300">
                <tr>
                  <td className="py-4 font-semibold text-white flex items-center gap-2">
                    <Zap className="w-4 h-4 text-gold-400" />
                    Drive System
                  </td>
                  <td className="py-4 text-slate-200">
                    High-torque European tubular motor (60-230 Nm) housed invisibly inside axle barrel
                  </td>
                  <td className="py-4 text-slate-300">
                    Calibrated oil-tempered torsion springs, gear reduction crank box, or chain hoist
                  </td>
                </tr>
                <tr>
                  <td className="py-4 font-semibold text-white flex items-center gap-2">
                    <BatteryCharging className="w-4 h-4 text-gold-400" />
                    Power Cut Protocol
                  </td>
                  <td className="py-4 text-slate-200">
                    <span className="inline-flex items-center gap-1.5 text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-md border border-emerald-500/20">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Dual Protection: Detachable hand crank + UPS backup
                    </span>
                  </td>
                  <td className="py-4 text-slate-300">
                    100% mechanical independence; unaffected by electricity grid interruptions
                  </td>
                </tr>
                <tr>
                  <td className="py-4 font-semibold text-white flex items-center gap-2">
                    <Settings className="w-4 h-4 text-gold-400" />
                    Operation Controls
                  </td>
                  <td className="py-4 text-slate-200">
                    Wireless rolling-code remotes, magnetic wall switch, key switch, or smart automation
                  </td>
                  <td className="py-4 text-slate-300">
                    Hand lift bar, exterior keyed padlock slide locks, or rotating mechanical crank rod
                  </td>
                </tr>
                <tr>
                  <td className="py-4 font-semibold text-white flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-gold-400" />
                    Security Features
                  </td>
                  <td className="py-4 text-slate-200">
                    Motor brake prevents manual forced prying; automatic bottom rail lock pins
                  </td>
                  <td className="py-4 text-slate-300">
                    Dual hardened steel side shoot bolts with anti-cut floor receiver strikes
                  </td>
                </tr>
                <tr>
                  <td className="py-4 font-semibold text-white flex items-center gap-2">
                    <RotateCw className="w-4 h-4 text-gold-400" />
                    Ideal Application
                  </td>
                  <td className="py-4 text-slate-200">
                    Commercial plazas, luxury villas, jewelry showrooms, modern garage portals
                  </td>
                  <td className="py-4 text-slate-300">
                    Industrial godowns, street shops, warehouse backdoors, emergency fire escapes
                  </td>
                </tr>
                <tr>
                  <td className="py-4 font-semibold text-white">
                    Warranty & Maintenance
                  </td>
                  <td className="py-4 text-gold-400 font-bold">
                    5-Year Motor Replacement Warranty + Annual Free Inspection
                  </td>
                  <td className="py-4 text-gold-400 font-bold">
                    10-Year Torsion Spring & Heavy Extrusion Structural Warranty
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 2: Motorized Deep Dive */}
      {activeTab === "motorized" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          <div className="bg-charcoal-950/70 p-5 rounded-xl border border-charcoal-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-gold-400">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white">Internal Tubular Axle Motors</h4>
            <p className="text-slate-300 leading-relaxed">
              Unlike bulky external chain motors, our high-grade Italian and German tubular motors fit entirely within the 70mm or 102mm octagonal steel drive shaft, requiring minimal side headroom and zero visible chains.
            </p>
            <ul className="text-slate-400 space-y-1">
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-gold-400" /> Thermal overload cut-off protection</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-gold-400" /> Precision mechanical or electronic limit switches</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-gold-400" /> Whisper-quiet operation under 52 dB</li>
            </ul>
          </div>

          <div className="bg-charcoal-950/70 p-5 rounded-xl border border-charcoal-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-gold-400">
              <BatteryCharging className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white">Smart Integration & Power Reserves</h4>
            <p className="text-slate-300 leading-relaxed">
              Equipped with multichannel 433MHz transmitters capable of operating multiple shutters individually or simultaneously. Can be coupled with dedicated sine-wave UPS battery packs providing up to 48 hours of emergency opening power.
            </p>
            <ul className="text-slate-400 space-y-1">
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-gold-400" /> Central plaza master remote compatibility</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-gold-400" /> Obstacle auto-reverse safety sensors</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-gold-400" /> Key switch for staff entry</li>
            </ul>
          </div>
        </div>
      )}

      {/* Tab 3: Manual Overrides Deep Dive */}
      {activeTab === "manual" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          <div className="bg-charcoal-950/70 p-5 rounded-xl border border-charcoal-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-gold-400">
              <RotateCw className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white">Manual Crank Bevel Gearbox</h4>
            <p className="text-slate-300 leading-relaxed">
              Every automated shutter engineered by Abu Ahmed Gulf Frames can be equipped with an eyelet hook and removable winding crank handle. In case of catastrophic power outages, a technician or owner simply turns the crank to raise or lower the curtain effortlessly.
            </p>
            <ul className="text-slate-400 space-y-1">
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-gold-400" /> 1:7 or 1:11 reduction ratio for low effort</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-gold-400" /> Hardened steel helical gear teeth</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-gold-400" /> Secure interior or lockable exterior key access</li>
            </ul>
          </div>

          <div className="bg-charcoal-950/70 p-5 rounded-xl border border-charcoal-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-gold-400">
              <Sliders className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white">High-Tensile Torsion Spring Pulley</h4>
            <p className="text-slate-300 leading-relaxed">
              For manual roll-up shutters, our 20-year technician formula calculates the exact spring tension matching curtain weight. The shutter floats effortlessly in any position, allowing easy one-hand push up and pull down.
            </p>
            <ul className="text-slate-400 space-y-1">
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-gold-400" /> Pre-stressed oil-tempered spring coils</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-gold-400" /> Heavy nylon pulleys with steel ball bearings</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-gold-400" /> Zero electricity consumption for lifetime utility</li>
            </ul>
          </div>
        </div>
      )}

      {/* Technician Hotline & Consultation Bar */}
      <div className="mt-8 pt-6 border-t border-charcoal-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5 text-xs text-slate-300">
          <AlertCircle className="w-4 h-4 text-gold-400 shrink-0" />
          <span>
            Need emergency rolling shutter repairs or custom motor conversion for existing shutters?
          </span>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="tel:+923001234567"
            className="px-4 py-2 rounded-xl bg-charcoal-800 hover:bg-charcoal-700 text-white border border-charcoal-600 transition-colors text-xs font-semibold flex items-center gap-1.5"
          >
            <PhoneCall className="w-3.5 h-3.5 text-gold-400" />
            <span>Emergency Repair Hotline</span>
          </a>
          <a
            href="https://wa.me/923001234567?text=Hello%20Master%20Craftsman%20Abu%20Ahmed%20(Abu%20Ahmed%20Gulf%20Frames),%20I%20need%20a%20site%20consultation%20for%20rolling%20shutter%20engineering."
            target="_blank"
            rel="noopener noreferrer"
            className="gold-gradient-bg text-charcoal-950 font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 hover:shadow-lg hover:shadow-gold-500/20 transition-all"
          >
            <span>Book Shutter Survey</span>
          </a>
        </div>
      </div>
    </div>
  );
}
