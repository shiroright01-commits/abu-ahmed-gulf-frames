import React from "react";
import {
  Layers,
  Thermometer,
  Shield,
  Gauge,
  CheckCircle2,
  Cpu,
} from "lucide-react";

export default function TechnicalSpecs() {
  const specs = [
    {
      icon: Gauge,
      category: "Extrusion Alloy & Temper",
      detail: "Al-Mg-Si 6063-T6 Architectural Grade",
      desc: "High yield strength (160 MPa) and extreme resistance to corrosion in outdoor atmospheric conditions.",
    },
    {
      icon: Thermometer,
      category: "Thermal Break Technology",
      detail: "PA66 GF25 Polyamide Thermal Barrier",
      desc: "Fiberglass-reinforced polyamide strips isolate interior from exterior profiles, eliminating thermal bridging.",
    },
    {
      icon: Shield,
      category: "Surface Finishing Quality",
      detail: "Qualicoat Class 1 & Anodized Class 1",
      desc: "Electrostatic powder coating (60-80 microns) and hard anodizing resisting UV degradation and coastal oxidation.",
    },
    {
      icon: Cpu,
      category: "Miter & Corner Precision",
      detail: "CNC Hydraulic Cleat Crimp (±0.5mm)",
      desc: "Corner joints assembled with heavy internal aluminum corner brackets and two-part polyurethane structural adhesive.",
    },
  ];

  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-8">
      <div className="text-center max-w-2xl mx-auto mb-14 space-y-2.5">
        <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">
          Engineering Benchmarks
        </span>
        <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white">
          Structural Aluminum Specifications
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm">
          Strict technical tolerances fabricated in our specialized workshop by veteran aluminum craftsmen.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {specs.map((spec, idx) => {
          const Icon = spec.icon;
          return (
            <div
              key={idx}
              className="bg-charcoal-900/90 rounded-2xl p-6 border border-charcoal-700/80 hover:border-gold-400/50 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-gold-400 mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-[10px] uppercase tracking-wider text-slate-400 block mb-1">
                {spec.category}
              </span>
              <h3 className="text-sm font-heading font-bold text-white mb-2">
                {spec.detail}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {spec.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
