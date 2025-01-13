import React, { useState, useEffect } from 'react';
import { Text } from 'src/components/atoms';
import { Layout } from 'src/components/Layout';
import { fetchFaq } from 'src/services/dataService';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export const FaqPage: React.FC = () => {
  const [faq, setFaq] = useState<FaqItem[]>([]);

  useEffect(() => {
    fetchFaq().then(setFaq).catch(console.error);
  }, []);

  return (
    <Layout>
      <Text variant="h1" className="text-3xl font-bold text-emerald-900 mb-6 text-center">
        Frequently Asked Questions
      </Text>
      {faq.map((item) => (
        <div key={item.id} className="mb-4">
          <Text variant="h3" className="font-semibold text-emerald-700">{item.question}</Text>
          <Text className="text-gray-700 leading-relaxed">{item.answer}</Text>
        </div>
      ))}
    </Layout>
  );
};
