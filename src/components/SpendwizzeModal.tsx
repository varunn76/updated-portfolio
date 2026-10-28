"use client";
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRightIcon } from "@/assets/index";
import { GithubIcon, SparkleIcon } from "@/components/icons/index";

interface SpendwizzeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SpendwizzeModal: React.FC<SpendwizzeModalProps> = ({
  isOpen,
  onClose,
}) => {
  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-gray-950/85 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/15 bg-gray-950/95 p-6 md:p-10 shadow-[0_30px_100px_rgba(0,0,0,0.85)] text-white scrollbar-thin scrollbar-thumb-white/10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-5 right-5 size-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/15 transition flex items-center justify-center text-white/70 hover:text-white z-20"
            >
              <svg
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Header section */}
            <div className="relative pb-6 border-b border-white/10">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-300">
                  <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Lead Mobile Engineer
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70">
                  Production APK v1.0.9
                </span>
                <span className="rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-xs font-medium text-sky-300">
                  React Native 0.86 • Expo 57
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="size-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center font-bold text-gray-950 text-xl shadow-[0_0_25px_rgba(16,185,129,0.4)]">
                  V
                </div>
                <div>
                  <h2 className="text-2xl md:text-4xl font-serif font-bold text-white tracking-tight">
                    SpendWizze
                  </h2>
                  <p className="text-sm md:text-base text-white/60">
                    Privacy-First Offline Expense Tracker & Financial Ledger
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm md:text-base text-white/75 leading-relaxed">
                A 100% offline-first, zero-cloud personal finance application
                for Android. Features automated on-device SMS parsing using
                local regex heuristics, embedded SQLite transactional ledger,
                YouTube Studio-style analytics, and custom .swb SAF backups.
              </p>

              {/* Action Buttons */}
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="https://github.com/varunn76"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-gray-950 transition hover:bg-white/90"
                >
                  <GithubIcon className="size-4" />
                  <span>GitHub Profile</span>
                  <ArrowUpRightIcon className="size-4" />
                </a>
                <span className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-5 py-2.5 text-sm font-semibold text-emerald-300">
                  <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                  Production Tested on Android 14+
                </span>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-center">
                <div className="text-2xl md:text-3xl font-extrabold text-emerald-400 font-serif">
                  0%
                </div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/60">
                  Cloud Dependency
                </div>
                <div className="mt-1 text-[11px] text-white/40">
                  100% On-Device Data
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-center">
                <div className="text-2xl md:text-3xl font-extrabold text-sky-400 font-serif">
                  10
                </div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/60">
                  Filter Pipeline Stages
                </div>
                <div className="mt-1 text-[11px] text-white/40">
                  Zero Spam & False Positives
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-center">
                <div className="text-2xl md:text-3xl font-extrabold text-teal-400 font-serif">
                  30+
                </div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/60">
                  Indian Banks & UPI
                </div>
                <div className="mt-1 text-[11px] text-white/40">
                  HDFC, ICICI, SBI, Axis, CRED
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-center">
                <div className="text-2xl md:text-3xl font-extrabold text-emerald-300 font-serif">
                  100%
                </div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/60">
                  Financial Correctness
                </div>
                <div className="mt-1 text-[11px] text-white/40">
                  Zero Transfer Double-Count
                </div>
              </div>
            </div>

            {/* Problem & Solution */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-red-500/20 bg-red-500/[0.03] p-5">
                <div className="flex items-center gap-2 text-red-400 font-semibold text-sm uppercase tracking-wider mb-2">
                  <span>⚠️</span> The Problem in Existing Apps
                </div>
                <p className="text-xs text-white/70 leading-relaxed">
                  Most popular personal finance apps (Walnut, Fold, Splitwise)
                  mandate cloud accounts and transmit raw SMS strings or bank
                  credentials to remote servers. Furthermore, naive parsers
                  treat every debit alert as spending, double-counting internal
                  bank transfers, credit card bill payments, and wallet top-ups.
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.03] p-5">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm uppercase tracking-wider mb-2">
                  <span>🛡️</span> The SpendWizze Solution
                </div>
                <p className="text-xs text-white/70 leading-relaxed">
                  SpendWizze operates 100% offline. Financial alerts are parsed
                  directly in-memory on the device using TypeScript regex
                  heuristics. It isolates internal account transfers, credit
                  card settlements, and refunds to ensure spending reflects pure
                  consumption.
                </p>
              </div>
            </div>

            {/* System Architecture Section */}
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] p-5 md:p-6">
              <h3 className="text-lg font-serif font-bold text-white flex items-center gap-2">
                <SparkleIcon className="size-4 text-emerald-400" />
                <span>On-Device Processing Pipeline</span>
              </h3>
              <p className="mt-1 text-xs text-white/60">
                End-to-end deterministic processing on Android with 0 network
                calls:
              </p>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                <div className="p-3 rounded-xl border border-white/5 bg-white/[0.02]">
                  <div className="font-semibold text-emerald-300">
                    1. SMS Ingestion
                  </div>
                  <div className="mt-1 text-white/50 text-[11px]">
                    Automatic scanning of incoming SMS via Android background
                    permissions.
                  </div>
                </div>
                <div className="p-3 rounded-xl border border-white/5 bg-white/[0.02]">
                  <div className="font-semibold text-sky-300">
                    2. 10-Stage Filter
                  </div>
                  <div className="mt-1 text-white/50 text-[11px]">
                    Discards OTPs, telecom recharge notices (Jio/Airtel), and
                    marketing noise.
                  </div>
                </div>
                <div className="p-3 rounded-xl border border-white/5 bg-white/[0.02]">
                  <div className="font-semibold text-teal-300">
                    3. Heuristic Parsing
                  </div>
                  <div className="mt-1 text-white/50 text-[11px]">
                    Extracts Amount, Direction (DR/CR), Merchant, Account mask,
                    and UTR reference.
                  </div>
                </div>
                <div className="p-3 rounded-xl border border-white/5 bg-white/[0.02]">
                  <div className="font-semibold text-emerald-300">
                    4. Fingerprint Ledger
                  </div>
                  <div className="mt-1 text-white/50 text-[11px]">
                    Deduplicates UPI alerts in 60s windows and stores in
                    embedded SQLite.
                  </div>
                </div>
              </div>
            </div>

            {/* Financial Correctness Rules */}
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] p-5 md:p-6">
              <h3 className="text-lg font-serif font-bold text-white">
                Financial Correctness Engine
              </h3>
              <p className="mt-1 text-xs text-white/60">
                How SpendWizze eliminates distorted spending totals:
              </p>

              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 text-white/50">
                      <th className="py-2 pr-4 font-semibold">
                        Transaction Type
                      </th>
                      <th className="py-2 pr-4 font-semibold">
                        Treated as Spending?
                      </th>
                      <th className="py-2 font-semibold">Impact on Metrics</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-white/80">
                    <tr>
                      <td className="py-2.5 pr-4 font-medium text-white">
                        Regular Expense
                      </td>
                      <td className="py-2.5 pr-4 text-emerald-400 font-semibold">
                        Yes
                      </td>
                      <td className="py-2.5 text-white/60">
                        Adds to spending total
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-4 font-medium text-white">
                        Income / Salary
                      </td>
                      <td className="py-2.5 pr-4 text-sky-400 font-semibold">
                        No
                      </td>
                      <td className="py-2.5 text-white/60">
                        Adds to income total
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-4 font-medium text-white">
                        Internal Transfer
                      </td>
                      <td className="py-2.5 pr-4 text-white/50">No</td>
                      <td className="py-2.5 text-white/60">
                        Neutral (Excluded from spend & income)
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-4 font-medium text-white">
                        Credit Card Repayment
                      </td>
                      <td className="py-2.5 pr-4 text-white/50">No</td>
                      <td className="py-2.5 text-white/60">
                        Classified as transfer (prevents double-count)
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-4 font-medium text-white">
                        Refund
                      </td>
                      <td className="py-2.5 pr-4 text-teal-400 font-semibold">
                        Negative
                      </td>
                      <td className="py-2.5 text-white/60">
                        Directly offsets/reduces previous spend
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Tech Stack List */}
            <div className="mt-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60 mb-3">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "React Native 0.86",
                  "Expo SDK 57 (New Architecture)",
                  "TypeScript 6",
                  "expo-sqlite",
                  "NativeWind v4 (Tailwind)",
                  "React Native Reanimated 4",
                  "Android Storage Access Framework (SAF)",
                  "expo-notifications",
                  "expo-haptics",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-xs font-medium text-white/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer close */}
            <div className="mt-8 pt-6 border-t border-white/10 flex justify-end">
              <button
                onClick={onClose}
                className="rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 px-6 py-2.5 text-sm font-semibold text-white transition"
              >
                Close Case Study
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SpendwizzeModal;
