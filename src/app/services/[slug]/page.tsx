import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { servicesData, ServiceItem } from "@/data/servicesData";
import {
  ShieldCheck,
  CheckCircle2,
  Wrench,
  Sparkles,
  ArrowLeft,
  MessageCircle,
  PhoneCall,
  Sliders,
  Award,
  ClipboardCheck,
  Compass,
} from "lucide-react";
import QuickEstimator from "@/components/QuickEstimator";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServiceDetailPage({ params }: PageProps) {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="py-12 space-y-16">
      {/* Breadcrumb & Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-gold-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Engineering Services</span>
        </Link>
      </div>

      {/* Service Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-charcoal-900 border border-gold-400/40 text-gold-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{service.badge || "Turnkey Engineering Service"}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
              {service.title}
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {service.fullDescription}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={`https://wa.me/923001234567?text=Hello%20Master%20Craftsman%20Abu%20Ahmed%20(Abu%20Ahmed%20Gulf%20Frames),%20I%20would%20like%20to%20book%20a%20site%20survey%20for%20${encodeURIComponent(
                  service.title
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-gradient-bg text-charcoal-950 font-bold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-gold-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 text-xs"
              >
                <MessageCircle className="w-4 h-4 fill-charcoal-950" />
                <span>Book Site Survey on WhatsApp</span>
              </a>

              <a
                href="tel:+923001234567"
                className="bg-charcoal-800 hover:bg-charcoal-700 text-white font-medium px-5 py-3.5 rounded-xl border border-charcoal-600 transition-colors flex items-center gap-2 text-xs"
              >
                <PhoneCall className="w-4 h-4 text-gold-400" />
                <span>Direct Hotline</span>
              </a>
            </div>

            {/* Warranty badge */}
            <div className="p-3.5 rounded-xl bg-charcoal-900/90 border border-charcoal-700/80 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-gold-400 shrink-0" />
              <div className="text-xs">
                <span className="font-bold text-white block">Official Service & Warranty Guarantee:</span>
                <span className="text-slate-400">{service.warranty}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-charcoal-700 shadow-2xl h-80 sm:h-96">
              <img
                src={service.heroImage}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-charcoal-900/90 backdrop-blur-md p-3 rounded-xl border border-charcoal-700 text-xs text-slate-300 flex items-center justify-between">
                <span>Abu Ahmed Gulf Frames Execution</span>
                <span className="text-gold-400 font-bold">20-Yr Heritage</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Turnkey Deliverables Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="charcoal-gradient-card rounded-2xl p-6 sm:p-10 border border-charcoal-700/80">
          <div className="mb-6 pb-4 border-b border-charcoal-800 flex items-center justify-between">
            <div>
              <span className="text-xs uppercase tracking-wider text-gold-400 font-semibold flex items-center gap-1.5">
                <ClipboardCheck className="w-4 h-4 text-gold-400" />
                Scope of Work
              </span>
              <h2 className="text-2xl font-heading font-bold text-white">
                Turnkey Service Deliverables
              </h2>
            </div>
            <Compass className="w-6 h-6 text-gold-400" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.serviceDeliverables.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-charcoal-950/80 border border-charcoal-800 flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-lg bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-gold-400 shrink-0 mt-0.5 text-xs font-bold">
                  {idx + 1}
                </div>
                <p className="text-xs text-slate-200 leading-relaxed font-medium">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="charcoal-gradient-card rounded-2xl p-6 sm:p-10 border border-charcoal-700/80">
          <div className="mb-6 pb-4 border-b border-charcoal-800 flex items-center justify-between">
            <div>
              <span className="text-xs uppercase tracking-wider text-gold-400 font-semibold">
                Engineering Blueprint
              </span>
              <h2 className="text-2xl font-heading font-bold text-white">
                Technical Specifications & Tolerances
              </h2>
            </div>
            <Wrench className="w-6 h-6 text-gold-400" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.specs.map((spec, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-charcoal-950/80 border border-charcoal-800 flex flex-col justify-between"
              >
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">
                  {spec.label}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white mt-1">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mechanism Breakdown (If available) */}
      {service.mechanisms && service.mechanisms.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="space-y-6">
            <div>
              <span className="text-xs uppercase tracking-wider text-gold-400 font-semibold">
                Operating Systems
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                Engineered Mechanism Options
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Select the ideal mechanism configuration for your architectural opening.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.mechanisms.map((mech, idx) => (
                <div
                  key={idx}
                  className="bg-charcoal-900 rounded-2xl p-6 border border-charcoal-700/80 hover:border-gold-400/50 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-gold-400">
                      <Sliders className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-heading font-bold text-white">
                      {mech.name}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {mech.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-charcoal-800 text-[11px]">
                    <span className="text-slate-400 block font-medium">Best Application:</span>
                    <span className="text-gold-300 font-semibold">{mech.suitableFor}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Key Features & Advantages */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Engineering Features */}
          <div className="charcoal-gradient-card rounded-2xl p-6 sm:p-8 border border-charcoal-700/80 space-y-4">
            <h3 className="text-lg font-heading font-bold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-gold-400" />
              <span>Core Engineering Features</span>
            </h3>
            <div className="space-y-3">
              {service.features.map((feat, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-charcoal-950/70 border border-charcoal-800">
                  <h4 className="text-xs font-bold text-white mb-1">{feat.title}</h4>
                  <p className="text-xs text-slate-400">{feat.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Workshop Advantages */}
          <div className="charcoal-gradient-card rounded-2xl p-6 sm:p-8 border border-charcoal-700/80 space-y-4">
            <h3 className="text-lg font-heading font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-gold-400" />
              <span>Abu Ahmed Gulf Frames Craftsmanship Guarantee</span>
            </h3>
            <div className="space-y-3">
              {service.advantages.map((adv, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <span>{adv}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-charcoal-800">
              <QuickEstimator />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
