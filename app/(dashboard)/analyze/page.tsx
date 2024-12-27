"use client";

import { useGetAnalyzeGoals } from "@/features/goals/api/use-get-analyze-goals";
import { useGetTransactions } from "@/features/transactions/api/use-get-transactions";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import axios from "axios";
import { Loader2 } from "lucide-react";
import MonthlyAnalysisCard from "./monthly-analyse";

const analyzeData = async (data: any) => {
  return axios.post("https://finance-tracker-gpd2enf4ffdwfzfd.centralindia-01.azurewebsites.net/analyze", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const AnalyzePage = () => {
  const { data: transactions = [], isLoading: transactionsLoading } =
    useGetTransactions();
  const { data: goals = [], isLoading: goalsLoading } = useGetAnalyzeGoals();

  const { mutate: analyze, data: analysisResult } = useMutation({
    mutationFn: analyzeData,
    onError: (error) => {
      console.error("Analysis failed:", error);
    },
  });

  const formattedData = {
    transactions: transactions.map((transaction) => ({
      ...transaction,
    })),
    category_limits: goals.map((goal) => ({
      ...goal,
    })),
  };

  React.useEffect(() => {
    if (transactions.length && goals.length) {
      analyze(formattedData);
    }
  }, [transactions, goals]);

  if (goals.length === 0) {
    return <div className="text-white text-center my-8">Please add at least one goal.</div>;
  }

  if (transactionsLoading || goalsLoading || !analysisResult) {
    return (
      <div className="flex items-center text-white justify-center my-[80px]">
        <Loader2 className="animate-spin" />
      </div>
    );
  }

  

  

  return (
    <div className="p-4 text-white mb-8">
      
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <section className="rounded bg-gray-800 p-4">
          <h2 className="mb-4 md:text-xl">Monthly Analysis</h2>
          <MonthlyAnalysisCard
            analysis={analysisResult.data.monthly_analysis} monthly={true}
          />
        </section>
        <section className="rounded bg-gray-800 p-4">
          <h2 className="mb-4 md:text-xl">Five Days Analysis</h2>
          <MonthlyAnalysisCard
            analysis={analysisResult.data.five_day_analysis} monthly={false}
          />
        </section>
      </div>
    </div>
  );
};

export default AnalyzePage;
